import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyVatsalya from "@/components/WhyVatsalya";
import ServicesGrid from "@/components/ServicesGrid";
import BenefitsBand from "@/components/BenefitsBand";
import AboutPreview from "@/components/AboutPreview";
import FAQAccordion from "@/components/FAQAccordion";
import LocationSection from "@/components/LocationSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <WhyVatsalya />
      <BenefitsBand />
      <ServicesGrid />
      <AboutPreview />
      <FAQAccordion />
      <LocationSection />
      <WhatsAppCTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
