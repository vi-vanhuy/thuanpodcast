import { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
    title: "Liên hệ",
    description: "Liên hệ với Thuần để hợp tác về content creation, personal branding, hoặc tư vấn truyền thông. Email, mạng xã hội và booking.",
    keywords: ["liên hệ Thuần", "booking podcast", "hợp tác content"],
    openGraph: {
        title: "Liên hệ | Thuần Podcast",
        description: "Liên hệ với Thuần để hợp tác về content creation và personal branding.",
        url: "/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <Contact />;
}
