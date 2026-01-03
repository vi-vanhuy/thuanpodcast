"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
const thuanImage = "/images/thuan-1.jpg";

// Case studies data
const casesData = {
    "brand-story-campaign": {
        id: "brand-story-campaign",
        client: "Thương hiệu F&B",
        title: "Brand Story Campaign",
        subtitle: "Xây dựng chiến dịch storytelling đa nền tảng",
        coverImage: thuanImage,
        tags: ["Strategy", "Content"],
        timeline: "3 tháng",
        year: "2024",
        overview: {
            challenge: "Thương hiệu mới gia nhập thị trường, cần xây dựng nhận diện thương hiệu và kết nối với khách hàng mục tiêu Gen Z.",
            goal: "Tạo dựng câu chuyện thương hiệu authentic, tăng nhận diện và engagement trên các nền tảng social media.",
            approach: "Phát triển brand narrative dựa trên insight khách hàng, triển khai content series đa nền tảng.",
        },
        process: [
            { step: "01", title: "Research & Discovery", desc: "Nghiên cứu thị trường, phân tích đối thủ, khảo sát insight khách hàng mục tiêu." },
            { step: "02", title: "Strategy Development", desc: "Xây dựng brand story framework, định hình tone of voice và content pillars." },
            { step: "03", title: "Content Creation", desc: "Sản xuất content series: video, carousel, stories với storytelling approach." },
            { step: "04", title: "Launch & Optimize", desc: "Triển khai chiến dịch, theo dõi performance và tối ưu liên tục." },
        ],
        results: [
            { metric: "300%", label: "Tăng Engagement" },
            { metric: "150%", label: "Tăng Followers" },
            { metric: "2M+", label: "Total Reach" },
            { metric: "45%", label: "Brand Awareness" },
        ],
        testimonial: {
            quote: "Thuần hiểu rất sâu về storytelling và cách áp dụng vào thương hiệu. Kết quả vượt xa kỳ vọng của team mình.",
            author: "Marketing Director",
            company: "Thương hiệu F&B",
        },
        nextCase: "personal-branding",
    },
    "personal-branding": {
        id: "personal-branding",
        client: "Founder Startup",
        title: "Personal Branding",
        subtitle: "Xây dựng thương hiệu cá nhân cho founder",
        coverImage: thuanImage,
        tags: ["Strategy", "Coaching"],
        timeline: "6 tháng",
        year: "2024",
        overview: {
            challenge: "Founder có expertise sâu nhưng chưa có presence trên social media, cần xây dựng thought leadership.",
            goal: "Positioning founder như thought leader trong ngành, thu hút talent và investor.",
            approach: "Personal brand audit, xây dựng content strategy cho LinkedIn, coaching 1-1 hàng tuần.",
        },
        process: [
            { step: "01", title: "Brand Audit", desc: "Đánh giá hiện trạng, xác định unique value proposition và differentiators." },
            { step: "02", title: "Content Strategy", desc: "Xây dựng content pillars, editorial calendar và posting framework." },
            { step: "03", title: "Coaching Sessions", desc: "Hướng dẫn viết content, xây dựng authentic voice, feedback hàng tuần." },
            { step: "04", title: "Growth & Scale", desc: "Phân tích data, tối ưu strategy, mở rộng sang các platform khác." },
        ],
        results: [
            { metric: "50K+", label: "Monthly Impressions" },
            { metric: "10K", label: "LinkedIn Followers" },
            { metric: "Top 1%", label: "Industry Voice" },
            { metric: "15+", label: "Speaking Invites" },
        ],
        testimonial: {
            quote: "Làm việc với Thuần giúp mình hiểu rõ mình muốn truyền tải điều gì và cách làm hiệu quả. Highly recommend!",
            author: "CEO & Founder",
            company: "Tech Startup",
        },
        nextCase: "documentary-series",
    },
    "documentary-series": {
        id: "documentary-series",
        client: "Media Company",
        title: "Documentary Series",
        subtitle: "Kịch bản và sản xuất series về khởi nghiệp",
        coverImage: thuanImage,
        tags: ["Script", "Production"],
        timeline: "4 tháng",
        year: "2023",
        overview: {
            challenge: "Tạo content series về startup ecosystem Việt Nam thu hút cả founders và general audience.",
            goal: "Sản xuất documentary series 6 tập chất lượng cao, đạt viral trên YouTube.",
            approach: "Deep research, storytelling framework cho documentary, script writing và creative direction.",
        },
        process: [
            { step: "01", title: "Research & Casting", desc: "Tìm hiểu startup ecosystem, casting founders và experts phù hợp." },
            { step: "02", title: "Script Development", desc: "Phát triển narrative arc, viết script chi tiết cho từng episode." },
            { step: "03", title: "Production", desc: "Hỗ trợ creative direction trong quá trình quay và hậu kỳ." },
            { step: "04", title: "Distribution", desc: "Chiến lược phát hành, tối ưu SEO YouTube và cross-platform promotion." },
        ],
        results: [
            { metric: "2M+", label: "Total Views" },
            { metric: "95%", label: "Positive Feedback" },
            { metric: "6", label: "Episodes" },
            { metric: "#1", label: "Trending VN" },
        ],
        testimonial: {
            quote: "Thuần có khả năng biến những câu chuyện phức tạp thành content hấp dẫn và dễ tiếp cận.",
            author: "Head of Content",
            company: "Media Company",
        },
        nextCase: "course-content",
    },
    "course-content": {
        id: "course-content",
        client: "Education Platform",
        title: "Course Content",
        subtitle: "Thiết kế và sản xuất khóa học storytelling",
        coverImage: thuanImage,
        tags: ["Education", "Content"],
        timeline: "2 tháng",
        year: "2023",
        overview: {
            challenge: "Platform cần khóa học về storytelling chất lượng cao để thu hút học viên mới.",
            goal: "Tạo khóa học comprehensive về storytelling với high completion rate.",
            approach: "Curriculum design, video script writing, interactive exercises và community building.",
        },
        process: [
            { step: "01", title: "Curriculum Design", desc: "Nghiên cứu learning outcomes, thiết kế syllabus và module structure." },
            { step: "02", title: "Content Creation", desc: "Viết script bài giảng, phát triển slides và materials hỗ trợ." },
            { step: "03", title: "Recording & Production", desc: "Ghi hình, edit video, tạo resources và assignments." },
            { step: "04", title: "Launch & Iterate", desc: "Ra mắt khóa học, thu thập feedback, cải tiến liên tục." },
        ],
        results: [
            { metric: "500+", label: "Học viên đăng ký" },
            { metric: "4.8/5", label: "Rating" },
            { metric: "85%", label: "Completion Rate" },
            { metric: "12", label: "Modules" },
        ],
        testimonial: {
            quote: "Khóa học được thiết kế rất logic và dễ áp dụng. Chất lượng content tuyệt vời.",
            author: "Head of Learning",
            company: "Education Platform",
        },
        nextCase: "brand-story-campaign",
    },
};

const CaseDetail = () => {
    const params = useParams();
    const id = params?.id as string | undefined;
    const caseStudy = id ? casesData[id as keyof typeof casesData] : null;

    if (!caseStudy) {
        return (
            <Layout>
                <section className="section-spacing">
                    <div className="container text-center">
                        <h1 className="text-3xl font-medium mb-4">Không tìm thấy case study</h1>
                        <p className="text-muted-foreground mb-8">Case study bạn tìm kiếm không tồn tại.</p>
                        <Button asChild>
                            <Link href="/work">Xem tất cả dự án</Link>
                        </Button>
                    </div>
                </section>
            </Layout>
        );
    }

    const nextCase = casesData[caseStudy.nextCase as keyof typeof casesData];

    return (
        <Layout>
            {/* Hero */}
            <section className="section-spacing pb-12">
                <div className="container">
                    <ScrollReveal>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="text-sm uppercase tracking-wider text-muted-foreground">
                                {caseStudy.client}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{caseStudy.year}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
                            {caseStudy.title}
                        </h1>
                        <p className="text-xl text-primary mb-6">{caseStudy.subtitle}</p>
                        <div className="flex flex-wrap gap-2">
                            {caseStudy.tags.map((tag) => (
                                <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Cover Image */}
            <section className="pb-16">
                <div className="container">
                    <ScrollReveal delay={200}>
                        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-card">
                            <img
                                src={caseStudy.coverImage}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 bg-card">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        <ScrollReveal>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Thử thách</p>
                            <p className="text-text-body">{caseStudy.overview.challenge}</p>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Mục tiêu</p>
                            <p className="text-text-body">{caseStudy.overview.goal}</p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Approach</p>
                            <p className="text-text-body">{caseStudy.overview.approach}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-spacing">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Quy trình</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                            Cách mình tiếp cận
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 gap-8">
                        {caseStudy.process.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="text-center">
                                    <p className="font-handwritten text-4xl text-primary mb-3">{item.step}</p>
                                    <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-16 bg-secondary text-secondary-foreground">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <p className="text-sm uppercase tracking-wider opacity-75 mb-2">Kết quả</p>
                        <h2 className="text-2xl md:text-3xl font-medium">
                            Impact đạt được
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {caseStudy.results.map((result, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="text-center">
                                    <p className="text-4xl md:text-5xl font-medium mb-2">{result.metric}</p>
                                    <p className="text-sm opacity-75">{result.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-spacing">
                <div className="container">
                    <ScrollReveal className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-xl md:text-2xl font-quote text-foreground mb-6 leading-relaxed">
                            "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div>
                            <p className="font-medium text-foreground">{caseStudy.testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{caseStudy.testimonial.company}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-card">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-2xl font-medium text-foreground mb-4">
                                Muốn có kết quả tương tự?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Hãy chia sẻ về dự án của bạn, mình sẽ phản hồi trong 24-48 giờ.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/work#contact">Gửi brief →</Link>
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Next Case */}
            {nextCase && (
                <section className="section-spacing border-t border-border">
                    <div className="container">
                        <ScrollReveal>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                                Case tiếp theo
                            </p>
                            <Link
                                href={`/work/case/${nextCase.id}`}
                                className="group flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">{nextCase.client}</p>
                                    <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                                        {nextCase.title}
                                    </h3>
                                </div>
                                <span className="text-4xl text-primary group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default CaseDetail;
