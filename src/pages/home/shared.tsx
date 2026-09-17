import type { JSX } from "react";
import { HOME_CONTENT, localize } from "@/pages/home/content";

interface BrandLockupProps {
  compact?: boolean;
  isUrdu: boolean;
  placement: "header" | "footer";
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy: string;
  id: string;
  align?: "left" | "center";
}

interface BilingualCopyProps {
  en: string;
  ur: string;
  isUrdu: boolean;
  className?: string;
}

export function BrandLockup({
  compact = false,
  isUrdu,
  placement,
}: BrandLockupProps): JSX.Element {
  return (
    <a
      href="#hero"
      className={`brand-lockup group inline-flex items-center gap-3 ${compact ? "scale-90 origin-left" : ""}`}
      data-testid={`${placement}-brand-lockup-link`}
      aria-label={localize(isUrdu, {
        en: "Zarkheiz Organics home",
        ur: "زرخیز آرگنیکس کا صفحہ اول",
      })}
    >
      <img
        src={HOME_CONTENT.brand.logoUrl}
        alt={localize(isUrdu, {
          en: "Zarkheiz Organics official logo",
          ur: "زرخیز آرگنیکس کا لوگو",
        })}
        className="h-14 w-auto max-w-[13.5rem] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        data-testid={`${placement}-brand-logo-image`}
      />
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  id,
  align = "left",
}: SectionHeadingProps): JSX.Element {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      <p className="eyebrow" data-testid={`${id}-eyebrow`}>
        {eyebrow}
      </p>
      <h2
        className="mt-4 font-heading text-3xl font-bold tracking-[-0.045em] text-[#133926] sm:text-4xl lg:text-[3.1rem]"
        data-testid={`${id}-heading`}
      >
        {title}
      </h2>
      <p
        className="mt-4 text-base leading-7 text-[#526457]"
        data-testid={`${id}-description`}
      >
        {copy}
      </p>
    </div>
  );
}

export function BilingualCopy({
  en,
  ur,
  isUrdu,
  className = "",
}: BilingualCopyProps): JSX.Element {
  return (
    <div className={className}>
      <p
        className={
          isUrdu
            ? "urdu-display text-[1.13rem] leading-[2.05] text-[#2E7D32]"
            : "text-[1rem] leading-7 text-[#3E5042]"
        }
        data-testid={isUrdu ? "about-copy-urdu" : "about-copy-english"}
      >
        {localize(isUrdu, { en, ur })}
      </p>
    </div>
  );
}
