import { Metadata } from "next";
import Work from "@/views/Work";

export const metadata: Metadata = {
    title: "Dự án",
    description: "Các dự án content và personal branding của Thuần. Từ brand story campaign đến xây dựng thương hiệu cá nhân cho founders và creators.",
    keywords: ["content creator", "personal branding", "brand story", "content strategy"],
    openGraph: {
        title: "Dự án | Thuần Podcast",
        description: "Các dự án content và personal branding của Thuần.",
        url: "/work",
    },
    alternates: {
        canonical: "/work",
    },
};

export default function WorkPage() {
    return <Work />;
}
