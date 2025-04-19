import AudienceAcceleratorBlueprint from "@/components/AudienceAcceleratorBlueprint";
import BioSection from "@/components/BioSection";
import FAQSection from "@/components/FAQSection";
import Hero  from "@/components/Hero";
import MasterclassCTA from "@/components/MasterClassCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BioSection />
      <AudienceAcceleratorBlueprint />
      <FAQSection />
      <MasterclassCTA />
    </>
  );
}
