import { Metadata } from "next";
import ThanhChatCoursePage from "@/views/ThanhChatCourse";

export const metadata: Metadata = {
    title: "Thanh Chất Collective - Khóa học Storytelling & Content",
    description: "Khóa học Thanh Chất Collective 2026: Âm thanh có Hồn, Nội dung có Chất. Học storytelling bằng âm thanh cùng Dế Mèn Du Ký và Thuần Podcast. 4.000.000đ, 20 học viên.",
    keywords: ["Thanh Chất Collective", "khóa học storytelling", "Dế Mèn Du Ký", "Thuần Podcast", "học làm podcast"],
    openGraph: {
        title: "Thanh Chất Collective - Khóa học Storytelling",
        description: "Âm thanh có Hồn - Nội dung có Chất. Học storytelling cùng 2 mentor: Dế Mèn Du Ký & Thuần Podcast.",
        url: "/courses/thanh-chat",
        images: [
            {
                url: "https://thuanpodcast.r2b.io.vn/images/thanh-chat-1.png",
                width: 1200,
                height: 630,
                alt: "Thanh Chất Collective - Khóa học Storytelling",
            },
        ],
    },
    alternates: {
        canonical: "/courses/thanh-chat",
    },
};

export default function ThanhChatCourseRoute() {
    return <ThanhChatCoursePage />;
}
