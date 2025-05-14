import HeroSection from "@/components/sections/hero-section";
import FeatureGrid from "@/components/sections/feature-grid";
import LogoCloud from "@/components/sections/logo-cloud";
import PricingTiers from "@/components/sections/pricing-tiers";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import FAQAccordion from "@/components/sections/faq-accordion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <LogoCloud />
      <PricingTiers />
      <TestimonialsCarousel />
      <FAQAccordion />
    </>
  );
}
