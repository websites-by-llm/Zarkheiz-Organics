import type { JSX } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle, Wheat } from "lucide-react";
import {
  CONTACT_LINKS,
  HOME_CONTENT,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  localize,
} from "@/pages/home/content";
import type { LanguageProps } from "@/pages/home/content";

function HeroActions({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <div
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
      data-testid="hero-actions"
    >
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="primary-button"
        data-testid="hero-contact-button"
      >
        <MessageCircle size={ICON_SIZE.medium} />
        {localize(isUrdu, HOME_CONTENT.hero.contactButton)}
        <ArrowUpRight size={ICON_SIZE.action} />
      </a>
      <a
        href="#products"
        className="secondary-button"
        data-testid="hero-explore-products-button"
      >
        {localize(isUrdu, HOME_CONTENT.hero.exploreButton)}
        <ArrowDown size={ICON_SIZE.action} />
      </a>
    </div>
  );
}

function HeroTrustCard({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <div className="hero-note-card" data-testid="hero-trust-card">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.19em] text-[#E69D24]"
            data-testid="hero-trust-eyebrow"
          >
            {localize(isUrdu, HOME_CONTENT.hero.promiseEyebrow)}
          </p>
          <p
            className="mt-3 font-heading text-2xl font-semibold leading-tight text-white"
            data-testid="hero-trust-title"
          >
            {localize(isUrdu, HOME_CONTENT.hero.promiseTitle)}
          </p>
        </div>
        <Wheat
          className="shrink-0 text-[#E69D24]"
          size={ICON_SIZE.hero}
          strokeWidth={ICON_STROKE_WIDTH.hero}
        />
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
        <div data-testid="hero-trust-stat-direct">
          <span className="block font-heading text-2xl font-bold text-white">
            {HOME_CONTENT.hero.promiseStats[0].value}
          </span>
          <span className="mt-1 block text-xs leading-5 text-white/60">
            {localize(isUrdu, HOME_CONTENT.hero.promiseStats[0].label)}
          </span>
        </div>
        <div data-testid="hero-trust-stat-origin">
          <span className="block font-heading text-2xl font-bold text-white">
            {HOME_CONTENT.hero.promiseStats[1].value}
          </span>
          <span className="mt-1 block text-xs leading-5 text-white/60">
            {localize(isUrdu, HOME_CONTENT.hero.promiseStats[1].label)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section id="hero" className="hero-section" data-testid="hero-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${HOME_CONTENT.hero.image})` }}
        aria-label={localize(isUrdu, HOME_CONTENT.hero.imageAlt)}
      />
      <div className="hero-scrim" />
      <div className="hero-sun" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4.65rem)] max-w-[1320px] items-end gap-10 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.6fr)] lg:items-center lg:px-10 lg:pb-24">
        <div className="max-w-3xl text-white">
          <div className="hero-kicker" data-testid="hero-kicker">
            <span className="hero-kicker-dot" />
            {localize(isUrdu, HOME_CONTENT.hero.kicker)}
          </div>
          <h1
            className={`mt-6 font-heading text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.065em] ${isUrdu ? "font-urdu text-[clamp(2.7rem,7vw,5.5rem)] leading-[1.35]" : ""}`}
            data-testid="hero-heading-text"
          >
            {localize(isUrdu, HOME_CONTENT.hero.heading)}
          </h1>
          <p
            className="mt-7 max-w-2xl font-heading text-lg leading-8 text-white/80 sm:text-xl"
            data-testid="hero-tagline-text"
          >
            {localize(isUrdu, HOME_CONTENT.hero.tagline)}
          </p>
          <HeroActions isUrdu={isUrdu} />
        </div>
        <HeroTrustCard isUrdu={isUrdu} />
      </div>
      <div className="hero-bottom-line" data-testid="hero-bottom-note">
        <span>{localize(isUrdu, HOME_CONTENT.hero.bottomNotes[0])}</span>
        <span className="hidden sm:inline">
          {localize(isUrdu, HOME_CONTENT.hero.bottomNotes[1])}
        </span>
      </div>
    </section>
  );
}
