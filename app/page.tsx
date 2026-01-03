import { Metadata } from "next";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import FeaturedEpisodesSection from "@/components/FeaturedEpisodesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialProofSection from "@/components/SocialProofSection";

export const metadata: Metadata = {
    title: "Thuần Podcast | Content Creator & Personal Branding",
    description: "Thuần - Content Creator và Personal Branding. Mình chia sẻ về hành trình tìm bản thân, công việc, tình bạn qua podcast với hơn 1 triệu người theo dõi.",
    alternates: {
        canonical: "/",
    },
};

export default function HomePage() {
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
}
