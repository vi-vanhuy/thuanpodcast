import { Metadata } from "next";
import Course from "@/views/Course";

export const metadata: Metadata = {
    title: "Khóa học",
    description: "Khóa học về content creation và personal branding từ Thuần Podcast. Học storytelling, làm nội dung, và xây dựng thương hiệu cá nhân.",
    keywords: ["khóa học content", "học storytelling", "personal branding", "Thanh Chất Collective"],
    openGraph: {
        title: "Khóa học | Thuần Podcast",
        description: "Khóa học về content creation và personal branding từ Thuần Podcast.",
        url: "/course",
    },
    alternates: {
        canonical: "/course",
    },
};

export default function CoursePage() {
    return <Course />;
}
