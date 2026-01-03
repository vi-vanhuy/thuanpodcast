import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import FeaturedEpisodesSection from "@/components/FeaturedEpisodesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialProofSection from "@/components/SocialProofSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BioSection />
      <WhatIDoSection />
      <FeaturedEpisodesSection />
      <TestimonialsSection />
      <SocialProofSection />
      <SelectedWorkSection />
    </Layout>
  );
};

export default Index;
