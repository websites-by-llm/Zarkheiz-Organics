import type { JSX } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/pages/home/shared";
import {
  CONTACT_LINKS,
  HOME_CONTENT,
  ICON_SIZE,
  PRODUCTS,
  PRODUCT_POSITION_DIGITS,
  PRODUCT_POSITION_OFFSET,
  localize,
} from "@/pages/home/content";
import type { LanguageProps, Product } from "@/pages/home/content";

interface ProductCardProps extends LanguageProps {
  product: Product;
  index: number;
}

function formatProductPosition(index: number): string {
  return String(index + PRODUCT_POSITION_OFFSET).padStart(
    PRODUCT_POSITION_DIGITS,
    "0",
  );
}

function ProductCard({
  product,
  index,
  isUrdu,
}: ProductCardProps): JSX.Element {
  const position = index + PRODUCT_POSITION_OFFSET;
  return (
    <article
      className={`product-card product-card-${position} reveal-up`}
      data-testid={`product-card-${product.id}`}
    >
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={localize(isUrdu, product.name)}
          loading="lazy"
          data-testid={`product-image-${product.id}`}
        />
        <span
          className={`product-index product-index-${product.tone}`}
          data-testid={`product-index-${product.id}`}
        >
          {formatProductPosition(index)}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-heading text-xl font-semibold text-[#133926]"
            data-testid={`product-name-${product.id}`}
          >
            {localize(isUrdu, product.name)}
          </h3>
          <ArrowUpRight
            className="mt-1 text-[#B0BDAF]"
            size={ICON_SIZE.medium}
            aria-hidden="true"
          />
        </div>
        <p
          className="mt-4 border-t border-[#133926]/10 pt-4 text-xs font-medium uppercase tracking-[0.1em] text-[#758376]"
          data-testid={`product-note-${product.id}`}
        >
          {localize(isUrdu, product.note)}
        </p>
      </div>
    </article>
  );
}

export function ProductsSection({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <section
      id="products"
      className="section-shell products-section"
      data-testid="products-section"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            id="products"
            eyebrow={localize(isUrdu, HOME_CONTENT.products.heading.eyebrow)}
            title={localize(isUrdu, HOME_CONTENT.products.heading.title)}
            copy={localize(isUrdu, HOME_CONTENT.products.heading.copy)}
          />
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-link shrink-0"
            data-testid="products-contact-link"
          >
            {localize(isUrdu, HOME_CONTENT.products.availability)}
            <ArrowUpRight size={ICON_SIZE.action} />
          </a>
        </div>
        <div className="products-grid mt-12">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isUrdu={isUrdu}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
