import AudienceAcceleratorBlueprint from "@/components/AudienceAcceleratorBlueprint";
import BioSection from "@/components/BioSection";
import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import Hero  from "@/components/Hero";
import Learn from "@/components/Learn";
import MasterclassCTA from "@/components/MasterClassCTA";
import Results from "@/components/Results";
import TestimonialSection from "@/components/TestimonialSection";
import VideoProofSection from "@/components/VideoProofSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BioSection />
      <Results />
      <VideoProofSection />
      <AudienceAcceleratorBlueprint />
      <Learn />
      <TestimonialSection />
      <CountdownSection />
      <FAQSection />
      <MasterclassCTA />
    </>
  );
}
