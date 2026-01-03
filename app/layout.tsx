import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import MusicPlayer from "@/components/MusicPlayer";
import "@/index.css";

const siteUrl = "https://thuanpodcast.r2b.io.vn";

export const metadata: Metadata = {
    // Basic
    title: {
        default: "Thuần Podcast | Content Creator & Personal Branding",
        template: "%s | Thuần Podcast",
    },
    description: "Thuần - Content Creator và Personal Branding. Chia sẻ về hành trình tìm bản thân, công việc, tình bạn qua podcast và các khóa học storytelling.",
    keywords: ["Thuần Podcast", "podcast tiếng Việt", "content creator", "personal branding", "storytelling", "khóa học làm nội dung"],
    authors: [{ name: "Thuần - Trịnh Phan Thuỳ Nhung" }],
    creator: "Thuần Podcast",

    // Open Graph
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: siteUrl,
        siteName: "Thuần Podcast",
        title: "Thuần Podcast | Content Creator & Personal Branding",
        description: "Chia sẻ về hành trình tìm bản thân, công việc, tình bạn qua podcast và các khóa học storytelling.",
        images: [
            {
                url: `${siteUrl}/images/thuan-1.jpg`,
                width: 1200,
                height: 630,
                alt: "Thuần Podcast",
            },
        ],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: "Thuần Podcast | Content Creator & Personal Branding",
        description: "Chia sẻ về hành trình tìm bản thân, công việc, tình bạn qua podcast.",
        images: [`${siteUrl}/images/thuan-1.jpg`],
    },

    // Icons
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification (add your IDs when available)
    // verification: {
    //     google: "your-google-verification-id",
    // },

    // Canonical
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },
};

// JSON-LD Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thuần - Trịnh Phan Thuỳ Nhung",
    alternateName: "Thuần Podcast",
    description: "Content Creator và Personal Branding. Host Thuần Podcast với hơn 1 triệu người theo dõi.",
    url: siteUrl,
    image: `${siteUrl}/images/thuan-1.jpg`,
    sameAs: [
        "https://open.spotify.com/show/thuanpodcast",
        "https://www.tiktok.com/@thuanpodcast",
        "https://www.instagram.com/thuanpodcast",
        "https://www.youtube.com/@thuanpodcast",
    ],
    jobTitle: "Content Creator & Personal Branding Consultant",
    knowsAbout: ["Podcasting", "Storytelling", "Content Creation", "Personal Branding"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {children}
                <MusicPlayer />
                <Toaster />
                <Sonner />
            </body>
        </html>
    );
}
