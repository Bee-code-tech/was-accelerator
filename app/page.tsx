import AudienceAcceleratorBlueprint from "@/components/AudienceAcceleratorBlueprint";
import BioSection from "@/components/BioSection";
import FAQSection from "@/components/FAQSection";
import Hero  from "@/components/Hero";
import MasterclassCTA from "@/components/MasterClassCTA";
import TestimonialsAndResults from "@/components/TestimonialsAndResults";
import VideoProofSection from "@/components/VideoProofSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BioSection />
      <TestimonialsAndResults />
      <AudienceAcceleratorBlueprint />
      <VideoProofSection />
      <FAQSection />
      <MasterclassCTA />
    </>
  );
}
