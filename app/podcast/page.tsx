import { Metadata } from "next";
import Podcast from "@/views/Podcast";

export const metadata: Metadata = {
    title: "Podcast",
    description: "Nghe các tập podcast của Thuần về hành trình tìm bản thân, công việc, tình bạn và những câu chuyện ý nghĩa trong cuộc sống. Top BXH Spotify thường xuyên.",
    keywords: ["Thuần Podcast", "podcast tiếng Việt", "podcast tâm sự", "Spotify podcast"],
    openGraph: {
        title: "Podcast | Thuần Podcast",
        description: "Nghe các tập podcast của Thuần về hành trình tìm bản thân và những câu chuyện ý nghĩa.",
        url: "/podcast",
    },
    alternates: {
        canonical: "/podcast",
    },
};

export default function PodcastPage() {
    return <Podcast />;
}
