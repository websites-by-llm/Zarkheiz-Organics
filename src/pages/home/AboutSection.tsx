import type { JSX } from "react";
import { MapPin } from "lucide-react";
import { BilingualCopy, SectionHeading } from "@/pages/home/shared";
import { HOME_CONTENT, ICON_SIZE, localize } from "@/pages/home/content";
import type { LanguageProps } from "@/pages/home/content";

export function AboutSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section
      id="about"
      className="section-shell about-section"
      data-testid="about-section"
    >
      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-10">
        <div className="relative reveal-up" data-testid="about-image-panel">
          <div className="image-frame">
            <img
              src={HOME_CONTENT.about.image}
              alt={localize(isUrdu, HOME_CONTENT.about.imageAlt)}
              loading="lazy"
              data-testid="about-harvest-image"
            />
            <div className="image-caption" data-testid="about-image-caption">
              <MapPin size={ICON_SIZE.compact} />
              <span>{localize(isUrdu, HOME_CONTENT.about.imageCaption)}</span>
            </div>
          </div>
          <div className="origin-stamp" data-testid="about-origin-stamp">
            <span className="font-heading text-2xl font-bold">
              {HOME_CONTENT.about.stamp.value}
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em]">
              {localize(isUrdu, HOME_CONTENT.about.stamp.label)}
            </span>
          </div>
        </div>
        <div
          className="reveal-up [animation-delay:120ms]"
          data-testid="about-copy-panel"
        >
          <SectionHeading
            id="about"
            eyebrow={localize(isUrdu, HOME_CONTENT.about.heading.eyebrow)}
            title={localize(isUrdu, HOME_CONTENT.about.heading.title)}
            copy={localize(isUrdu, HOME_CONTENT.about.heading.copy)}
          />
          <BilingualCopy
            className="mt-7"
            en={HOME_CONTENT.about.body.en}
            ur={HOME_CONTENT.about.body.ur}
            isUrdu={isUrdu}
          />
        </div>
      </div>
    </section>
  );
}
