import CaseDetail from "@/views/CaseDetail";

// Generate static params for all case study pages
export function generateStaticParams() {
    return [
        { id: 'brand-story-campaign' },
        { id: 'personal-branding' },
        { id: 'content-strategy' },
    ];
}

export default function CaseDetailPage() {
    return <CaseDetail />;
}
