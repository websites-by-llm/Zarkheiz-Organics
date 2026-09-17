import { useState } from "react";
import type { JSX } from "react";
import { AboutSection } from "@/pages/home/AboutSection";
import { BuyersSection } from "@/pages/home/BuyersSection";
import { ContactSection } from "@/pages/home/ContactSection";
import { SiteFooter } from "@/pages/home/Footer";
import { SiteHeader } from "@/pages/home/Header";
import { HeroSection } from "@/pages/home/HeroSection";
import { ProductsSection } from "@/pages/home/ProductsSection";
import { WhyUsSection } from "@/pages/home/WhyUsSection";
import type { Language } from "@/pages/home/content";

export default function Home(): JSX.Element {
  const [language, setLanguage] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isUrdu = language === "ur";

  const changeLanguage = (nextLanguage: Language): void => {
    setLanguage(nextLanguage);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = (): void => setMobileMenuOpen(false);

  return (
    <main className={isUrdu ? "font-urdu" : "font-sans"} dir={isUrdu ? "rtl" : "ltr"} lang={language}>
      <SiteHeader language={language} mobileMenuOpen={mobileMenuOpen} onLanguageChange={changeLanguage} onToggleMobileMenu={toggleMobileMenu} onCloseMobileMenu={closeMobileMenu} />
      <HeroSection isUrdu={isUrdu} />
      <AboutSection isUrdu={isUrdu} />
      <WhyUsSection isUrdu={isUrdu} />
      <ProductsSection isUrdu={isUrdu} />
      <BuyersSection isUrdu={isUrdu} />
      <ContactSection isUrdu={isUrdu} />
      <SiteFooter isUrdu={isUrdu} />
    </main>
  );
}
