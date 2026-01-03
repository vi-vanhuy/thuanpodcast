import CourseDetail from "@/views/CourseDetail";

// Generate static params for course detail pages
export function generateStaticParams() {
    return [
        { id: 'storytelling' },
        { id: 'personal-brand' },
    ];
}

export default function CourseDetailPage() {
    return <CourseDetail />;
}
