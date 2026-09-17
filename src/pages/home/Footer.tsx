import type { JSX } from "react";
import { Leaf, Mail, MessageCircle, Phone } from "lucide-react";
import { BrandLockup } from "@/pages/home/shared";
import {
  CONTACT_LINKS,
  HOME_CONTENT,
  ICON_SIZE,
  localize,
} from "@/pages/home/content";
import type { LanguageProps } from "@/pages/home/content";

export function SiteFooter({ isUrdu }: LanguageProps): JSX.Element {
  return (
    <footer className="footer-section" data-testid="footer-section">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <BrandLockup isUrdu={isUrdu} placement="footer" />
          <p
            className="mt-5 max-w-sm text-sm leading-6 text-white/55"
            data-testid="footer-tagline"
          >
            {localize(isUrdu, HOME_CONTENT.footer.tagline)}
          </p>
        </div>
        <div>
          <p className="footer-label" data-testid="footer-navigation-label">
            {localize(isUrdu, HOME_CONTENT.footer.navigationLabel)}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
            {HOME_CONTENT.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="footer-link"
                data-testid={`footer-link-${item.id}`}
              >
                {localize(isUrdu, item.label)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label" data-testid="footer-contact-label">
            {localize(isUrdu, HOME_CONTENT.footer.contactLabel)}
          </p>
          <div className="mt-4 space-y-3 text-sm grid">
            <a
              href={CONTACT_LINKS.email}
              className="footer-contact-link"
              data-testid="footer-email-link"
            >
              <Mail size={ICON_SIZE.small} />
              {CONTACT_LINKS.emailLabel}
            </a>
            <a
              href={CONTACT_LINKS.phone}
              className="footer-contact-link"
              data-testid="footer-phone-link"
            >
              <Phone size={ICON_SIZE.small} />
              {CONTACT_LINKS.phoneLabel}
            </a>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link"
              data-testid="footer-whatsapp-link"
            >
              <MessageCircle size={ICON_SIZE.small} />
              {localize(isUrdu, HOME_CONTENT.footer.whatsappLabel)}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-white/10 px-5 py-5 text-xs text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p data-testid="footer-copyright-text">
          © {HOME_CONTENT.footer.copyrightYear} {HOME_CONTENT.brand.name}.{" "}
          {localize(isUrdu, HOME_CONTENT.footer.copyright)}
        </p>
        <p
          className="flex items-center gap-1.5"
          data-testid="footer-origin-text"
        >
          <Leaf size={ICON_SIZE.footerLeaf} className="text-[#E69D24]" />
          {localize(isUrdu, HOME_CONTENT.footer.origin)}
        </p>
      </div>
    </footer>
  );
}
