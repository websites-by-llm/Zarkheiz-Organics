import type { JSX } from "react";
import { SectionHeading } from "@/pages/home/shared";
import {
  HOME_CONTENT,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  PILLARS,
  localize,
} from "@/pages/home/content";
import type { LanguageProps, Pillar } from "@/pages/home/content";

interface PillarCardProps extends LanguageProps {
  pillar: Pillar;
}

function PillarCard({ pillar, isUrdu }: PillarCardProps): JSX.Element {
  const Icon = pillar.icon;
  return (
    <article
      className="pillar-card reveal-up"
      data-testid={`why-us-pillar-${pillar.id}`}
    >
      <div
        className={`pillar-icon pillar-icon-${pillar.color}`}
        data-testid={`why-us-icon-${pillar.id}`}
      >
        <Icon size={ICON_SIZE.pillar} strokeWidth={ICON_STROKE_WIDTH.pillar} />
      </div>
      <h3
        className="mt-6 font-heading text-xl font-semibold text-[#133926]"
        data-testid={`why-us-title-${pillar.id}`}
      >
        {localize(isUrdu, pillar.title)}
      </h3>
      <p
        className="mt-4 text-sm leading-6 text-[#657469]"
        data-testid={`why-us-detail-${pillar.id}`}
      >
        {localize(isUrdu, pillar.detail)}
      </p>
    </article>
  );
}

export function WhyUsSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section
      id="why-us"
      className="section-shell why-section"
      data-testid="why-us-section"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeading
          id="why-us"
          align="center"
          eyebrow={localize(isUrdu, HOME_CONTENT.why.heading.eyebrow)}
          title={localize(isUrdu, HOME_CONTENT.why.heading.title)}
          copy={localize(isUrdu, HOME_CONTENT.why.heading.copy)}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} isUrdu={isUrdu} />
          ))}
        </div>
      </div>
    </section>
  );
}
