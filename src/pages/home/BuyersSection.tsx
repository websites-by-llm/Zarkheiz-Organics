import type { JSX } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/pages/home/shared";
import {
  HOME_CONTENT,
  ICON_SIZE,
  PRODUCT_POSITION_OFFSET,
  localize,
} from "@/pages/home/content";
import type { LanguageProps, BuyerSegment } from "@/pages/home/content";

function BuyerCard({
  segment,
  isUrdu,
}: {
  segment: BuyerSegment;
  isUrdu: boolean;
}): JSX.Element {
  const Icon = segment.icon;
  const isRetail = segment.id === "retail";
  const highlights = isUrdu ? segment.highlights.ur : segment.highlights.en;
  return (
    <article
      className={`buyer-card ${isRetail ? "buyer-card-dark" : ""}`}
      data-testid={`buyer-card-${segment.id}`}
    >
      <div className="buyer-card-top">
        <Icon size={ICON_SIZE.card} />
        <span data-testid={`buyer-type-${segment.id}`}>
          {localize(isUrdu, segment.type)}
        </span>
      </div>
      <h3
        className={`mt-9 font-heading text-2xl font-semibold ${isRetail ? "text-white" : "text-[#133926]"}`}
        data-testid={`buyer-title-${segment.id}`}
      >
        {localize(isUrdu, segment.title)}
      </h3>
      <p
        className={`mt-5 text-sm leading-6 ${isRetail ? "text-white/65" : "text-[#607063]"}`}
        data-testid={`buyer-description-${segment.id}`}
      >
        {localize(isUrdu, segment.description)}
      </p>
      <ul
        className={`mt-6 space-y-3 border-t pt-5 text-xs font-medium ${isRetail ? "border-white/15 text-white/75" : "border-[#133926]/10 text-[#3E5042]"}`}
        data-testid={`buyer-highlights-${segment.id}`}
      >
        {highlights.map((item, index) => (
          <li
            key={item}
            data-testid={`buyer-highlight-${segment.id}-${index + PRODUCT_POSITION_OFFSET}`}
          >
            <Check size={ICON_SIZE.small} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BuyersSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section
      id="buyers"
      className="section-shell buyers-section"
      data-testid="buyers-section"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            id="buyers"
            eyebrow={localize(isUrdu, HOME_CONTENT.buyers.heading.eyebrow)}
            title={localize(isUrdu, HOME_CONTENT.buyers.heading.title)}
            copy={localize(isUrdu, HOME_CONTENT.buyers.heading.copy)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {HOME_CONTENT.buyers.segments.map((segment) => (
              <BuyerCard key={segment.id} segment={segment} isUrdu={isUrdu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
