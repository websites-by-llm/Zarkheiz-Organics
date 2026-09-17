import type { JSX } from "react";
import { Globe2, MapPin } from "lucide-react";
import { HOME_CONTENT, ICON_SIZE, localize } from "@/pages/home/content";
import type { LanguageProps } from "@/pages/home/content";

export function ContactSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section
      id="contact"
      className="contact-section"
      data-testid="contact-section"
    >
      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 pb-10!">
        <div className="text-white">
          <p className="eyebrow eyebrow-light" data-testid="contact-eyebrow">
            {localize(isUrdu, HOME_CONTENT.contact.eyebrow)}
          </p>
          <h2
            className="mt-5 font-heading text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl"
            data-testid="contact-heading"
          >
            {localize(isUrdu, HOME_CONTENT.contact.title)}
          </h2>
          <p
            className={
              isUrdu
                ? "urdu-display mt-4 text-2xl leading-[1.8] text-[#D2E5C9]"
                : "mt-4 text-xl leading-8 text-[#D2E5C9]"
            }
            data-testid="contact-subheading"
          >
            {localize(isUrdu, HOME_CONTENT.contact.subheading)}
          </p>
          <p
            className="mt-5 max-w-lg text-base leading-7 text-white/65"
            data-testid="contact-description"
          >
            {localize(isUrdu, HOME_CONTENT.contact.description)}
          </p>
        </div>
        <div className="map-card" data-testid="contact-map-container">
          <div className="map-card-top" data-testid="contact-location-address">
            <div className="flex items-center gap-3">
              <span className="map-pin">
                <MapPin size={ICON_SIZE.action} />
              </span>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E69D24]"
                  data-testid="contact-location-label"
                >
                  {localize(isUrdu, HOME_CONTENT.contact.locationLabel)}
                </p>
                <p
                  className="mt-1 text-sm text-white"
                  data-testid="contact-location-text"
                >
                  {localize(isUrdu, HOME_CONTENT.contact.location)}
                </p>
              </div>
            </div>
            <Globe2 className="text-white/45" size={ICON_SIZE.menu} />
          </div>
          <iframe
            src={HOME_CONTENT.links.mapEmbed}
            referrerPolicy="strict-origin-when-cross-origin"
            title={localize(isUrdu, HOME_CONTENT.contact.mapTitle)}
            className="map-iframe"
            loading="lazy"
            data-testid="contact-map-iframe"
          />
        </div>
      </div>
    </section>
  );
}
