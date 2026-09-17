import path from "node:path";
import { defineConfig, type PluginOption, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualEdits } from "@emergentbase/visual-edits/vite";

// Supervisor exports DISABLE_HOT_RELOAD=true when the platform sets ENABLE_RELOAD=false.
const hotReloadDisabled = process.env.DISABLE_HOT_RELOAD === "true";

// Visual Edits (x-* JSX tagging, overlay, /edit-file endpoint) is dev-server-only by
// default (apply: serve); escape hatch mirrors DISABLE_HOT_RELOAD.
const visualEditsDisabled = process.env.DISABLE_VISUAL_EDITS === "true";

// Branded error overlay (build + runtime errors); escape hatch mirrors the two above.
const emergentOverlayDisabled = process.env.DISABLE_EMERGENT_OVERLAY === "true";
const FRONTEND_DEV_PORT = 3000;
const WATCH_POLL_INTERVAL_MS = 300;
const BACKEND_DEV_ORIGIN = "http://localhost:8001";

// Fails open: a broken overlay package must degrade to "no overlay" (Vite's own overlay
// takes over), never to "no dev server". Never let a preview aid take the app down.
async function loadEmergentOverlay(): Promise<PluginOption | null> {
  if (emergentOverlayDisabled) return null;
  try {
    const mod = await import("@emergentbase/overlay/vite");
    return mod.emergentOverlay();
  } catch {
    return null;
  }
}

// Pod inotify quota is node-shared and routinely exhausted; native fs.watch EMFILEs at
// boot. Polling is the load-bearing default (set before Vite evaluates the config).
if (!hotReloadDisabled) {
  process.env.CHOKIDAR_USEPOLLING = "true";
}

function createPlugins(
  emergentOverlay: PluginOption | null,
): NonNullable<UserConfig["plugins"]> {
  return [
    react(),
    tailwindcss(),
    ...(visualEditsDisabled ? [] : [visualEdits()]),
    ...(emergentOverlay ? [emergentOverlay] : []),
  ];
}

function createResolveConfig(): NonNullable<UserConfig["resolve"]> {
  return {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  };
}

function createOptimizeDepsConfig(): NonNullable<UserConfig["optimizeDeps"]> {
  return {
    include: ["react", "react-dom/client", "react-router-dom"],
  };
}

function createServerConfig(
  emergentOverlay: PluginOption | null,
): NonNullable<UserConfig["server"]> {
  return {
    host: true,
    port: FRONTEND_DEV_PORT,
    allowedHosts: true,
    cors: true,
    hmr: hotReloadDisabled ? false : { overlay: !emergentOverlay },
    watch: hotReloadDisabled
      ? null
      : { usePolling: true, interval: WATCH_POLL_INTERVAL_MS },
    proxy: {
      "/api": {
        target: BACKEND_DEV_ORIGIN,
        changeOrigin: true,
      },
    },
  };
}

async function createViteConfig(): Promise<UserConfig> {
  const emergentOverlay = await loadEmergentOverlay();
  return {
    plugins: createPlugins(emergentOverlay),
    resolve: createResolveConfig(),
    optimizeDeps: createOptimizeDepsConfig(),
    server: createServerConfig(emergentOverlay),
  };
}

// https://vite.dev/config/
export default defineConfig(createViteConfig);
