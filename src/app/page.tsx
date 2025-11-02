import CallToActionSection from "@/components/sections/call-to-action";
import FeaturesSection from "@/components/sections/features";
import FooterSection from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
