import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import FeaturedEpisodesSection from "@/components/FeaturedEpisodesSection";
import ContactStrip from "@/components/ContactStrip";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BioSection />
      <WhatIDoSection />
      <SelectedWorkSection />
      <FeaturedEpisodesSection />
      <ContactStrip />
    </Layout>
  );
};

export default Index;
