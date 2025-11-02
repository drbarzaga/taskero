import CallToActionSection from "@/components/call-to-action";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CallToActionSection />
    </>
  );
}
