import type { JSX } from "react";
import { ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import { BrandLockup } from "@/pages/home/shared";
import {
  CONTACT_LINKS,
  ICON_SIZE,
  NAV_ITEMS,
  localize,
} from "@/pages/home/content";
import type { Language, NavItem } from "@/pages/home/content";

interface HeaderProps {
  language: Language;
  mobileMenuOpen: boolean;
  onLanguageChange: (language: Language) => void;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

interface NavigationProps {
  isUrdu: boolean;
  items: readonly NavItem[];
}

function LanguageSwitcher({
  language,
  onLanguageChange,
}: Pick<HeaderProps, "language" | "onLanguageChange">): JSX.Element {
  const isUrdu = language === "ur";
  return (
    <div
      className={`language-switcher ${isUrdu ? "is-urdu" : "is-english"}`}
      data-testid="language-switcher"
    >
      <span className="language-active-indicator" aria-hidden="true" />
      <button
        type="button"
        className={`language-option ${!isUrdu ? "active" : ""}`}
        onClick={() => onLanguageChange("en")}
        aria-label="Switch to English"
        aria-pressed={!isUrdu}
        data-testid="language-toggle-english"
      >
        EN
      </button>
      <button
        type="button"
        className={`language-option language-option-urdu ${isUrdu ? "active" : ""}`}
        onClick={() => onLanguageChange("ur")}
        aria-label="اردو زبان منتخب کریں"
        aria-pressed={isUrdu}
        data-testid="language-toggle-urdu"
      >
        اردو
      </button>
    </div>
  );
}

function DesktopNavigation({ isUrdu, items }: NavigationProps): JSX.Element {
  return (
    <nav
      className="hidden items-center gap-6 lg:flex"
      aria-label={localize(isUrdu, {
        en: "Main navigation",
        ur: "مرکزی رہنمائی",
      })}
      data-testid="desktop-navigation"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="nav-link"
          data-testid={`nav-link-${item.id}`}
        >
          {localize(isUrdu, item.label)}
        </a>
      ))}
    </nav>
  );
}

function MobileNavigation({
  isUrdu,
  items,
  onClose,
}: NavigationProps & { onClose: () => void }): JSX.Element {
  return (
    <nav
      className="mobile-nav lg:hidden"
      aria-label={localize(isUrdu, {
        en: "Mobile navigation",
        ur: "موبائل رہنمائی",
      })}
      data-testid="mobile-navigation"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onClose}
          data-testid={`mobile-nav-link-${item.id}`}
        >
          {localize(isUrdu, item.label)}
          <ChevronRight size={ICON_SIZE.navigation} />
        </a>
      ))}
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mobile-nav-contact"
        data-testid="mobile-whatsapp-link"
      >
        <MessageCircle size={ICON_SIZE.navigation} />
        {localize(isUrdu, {
          en: "Contact Zarkheiz Organics on WhatsApp",
          ur: "زرخیز آرگنیکس سے واٹس ایپ پر رابطہ",
        })}
      </a>
    </nav>
  );
}

function getMenuLabel(isUrdu: boolean, isOpen: boolean): string {
  if (isUrdu) return isOpen ? "رہنمائی بند کریں" : "رہنمائی کھولیں";
  return isOpen ? "Close navigation" : "Open navigation";
}

export function SiteHeader({
  language,
  mobileMenuOpen,
  onLanguageChange,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderProps): JSX.Element {
  const isUrdu = language === "ur";
  const MenuIcon = mobileMenuOpen ? X : Menu;
  return (
    <header className="site-header" data-testid="site-header">
      <div className="mx-auto flex h-[4.65rem] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <BrandLockup compact isUrdu={isUrdu} placement="header" />
        <DesktopNavigation isUrdu={isUrdu} items={NAV_ITEMS} />
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            language={language}
            onLanguageChange={onLanguageChange}
          />
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="header-contact hidden sm:inline-flex"
            data-testid="header-whatsapp-link"
          >
            <MessageCircle size={ICON_SIZE.compact} />
            {localize(isUrdu, { en: "WhatsApp", ur: "واٹس ایپ" })}
          </a>
          <button
            type="button"
            className="mobile-menu-button lg:hidden"
            onClick={onToggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={getMenuLabel(isUrdu, mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <MenuIcon size={ICON_SIZE.menu} />
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <MobileNavigation
          isUrdu={isUrdu}
          items={NAV_ITEMS}
          onClose={onCloseMobileMenu}
        />
      ) : null}
    </header>
  );
}
