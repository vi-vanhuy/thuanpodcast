"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Course data
const coursesData = {
    "storytelling": {
        id: "storytelling",
        title: "Storytelling Fundamentals",
        subtitle: "Nghệ thuật kể chuyện cho content creator",
        description: "Khóa học toàn diện về storytelling, từ lý thuyết đến thực hành. Học cách biến mọi nội dung thành câu chuyện thu hút và kết nối cảm xúc với khán giả.",
        coverImage: "/images/course-storytelling.jpg",
        duration: "6 tuần",
        students: "500+",
        modules: "12 bài học",
        price: "2.500.000đ",
        highlights: [
            { title: "Thực hành ngay", desc: "Assignments hàng tuần với feedback cá nhân" },
            { title: "Community", desc: "Tham gia nhóm học viên hỗ trợ lẫn nhau" },
            { title: "Lifetime Access", desc: "Truy cập vĩnh viễn tất cả tài liệu" },
            { title: "Chứng chỉ", desc: "Nhận chứng chỉ hoàn thành khóa học" },
        ],
        outcomes: [
            "Hiểu cấu trúc của một câu chuyện hay",
            "Viết được hook thu hút trong 3 giây đầu",
            "Xây dựng narrative arc cho mọi loại content",
            "Kết nối cảm xúc với khán giả",
            "Áp dụng storytelling vào social media, podcast, video",
        ],
        forWho: [
            "Content creator muốn nâng tầm storytelling",
            "Marketer cần tạo content engagement cao",
            "Founders muốn kể câu chuyện thương hiệu",
            "Bất kỳ ai yêu thích việc kể chuyện",
        ],
        process: [
            { step: "01", title: "Đăng ký", desc: "Hoàn tất đăng ký và nhận quyền truy cập" },
            { step: "02", title: "Học lý thuyết", desc: "Xem video bài giảng theo tiến độ của bạn" },
            { step: "03", title: "Thực hành", desc: "Làm bài tập và nhận feedback từ mentor" },
            { step: "04", title: "Hoàn thành", desc: "Nộp project cuối và nhận chứng chỉ" },
        ],
        syllabus: [
            { week: "Tuần 1-2", title: "Foundations", content: "Lý thuyết storytelling, các mô hình kể chuyện cổ điển (Hero's Journey, 3-Act Structure) và hiện đại. Phân tích case studies từ các brand lớn." },
            { week: "Tuần 3-4", title: "Structure & Craft", content: "Xây dựng hook, conflict, climax và resolution. Cách sử dụng ngôn ngữ, nhịp điệu và hình ảnh để tạo impact." },
            { week: "Tuần 5-6", title: "Application", content: "Áp dụng vào các nền tảng: social media, podcast, video. Final project và feedback cá nhân từ mentor." },
        ],
        testimonials: [
            { name: "Minh Anh", role: "Content Creator", quote: "Khóa học giúp mình thay đổi hoàn toàn cách tiếp cận content. Engagement tăng 300%!" },
            { name: "Hùng", role: "Marketing Manager", quote: "Thực tế và áp dụng được ngay. Team mình đã áp dụng ngay cho chiến dịch mới." },
            { name: "Lan Chi", role: "Podcaster", quote: "Cuối cùng mình hiểu vì sao một số episode viral còn những cái khác thì không." },
        ],
        faqs: [
            { q: "Khóa học có phù hợp với người mới bắt đầu không?", a: "Có! Khóa học bắt đầu từ nền tảng và dần tiến đến nâng cao." },
            { q: "Tôi có thể học theo tiến độ riêng không?", a: "Hoàn toàn. Bạn có lifetime access và có thể học bất cứ lúc nào." },
            { q: "Có hỗ trợ sau khi học xong không?", a: "Bạn vẫn được ở lại community và nhận support từ nhóm học viên." },
        ],
    },
    "personal-brand": {
        id: "personal-brand",
        title: "Personal Branding",
        subtitle: "Xây dựng thương hiệu cá nhân bền vững",
        description: "Từ việc xác định giá trị cốt lõi đến chiến lược content dài hạn. Khóa học dành cho những ai muốn xây dựng ảnh hưởng và trở thành thought leader.",
        coverImage: "/images/course-branding.jpg",
        duration: "4 tuần",
        students: "300+",
        modules: "8 bài học",
        price: "1.800.000đ",
        highlights: [
            { title: "1-on-1 Coaching", desc: "Session coaching cá nhân với Thuần" },
            { title: "Templates", desc: "Bộ template content calendar và brand guide" },
            { title: "Lifetime Access", desc: "Truy cập vĩnh viễn tất cả tài liệu" },
            { title: "Chứng chỉ", desc: "Nhận chứng chỉ hoàn thành khóa học" },
        ],
        outcomes: [
            "Xác định được unique value proposition",
            "Xây dựng content pillars phù hợp",
            "Tạo được calendar content 3 tháng",
            "Hiểu cách đo lường và tối ưu",
            "Có chiến lược growth rõ ràng",
        ],
        forWho: [
            "Chuyên gia muốn xây dựng thought leadership",
            "Freelancer cần positioning rõ ràng",
            "Founders muốn grow personal brand",
            "Nhân viên muốn phát triển career",
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Khám phá bản thân và định vị unique" },
            { step: "02", title: "Strategy", desc: "Xây dựng chiến lược và content pillars" },
            { step: "03", title: "Execution", desc: "Tạo content và xây dựng workflow" },
            { step: "04", title: "Growth", desc: "Đo lường, tối ưu và scale" },
        ],
        syllabus: [
            { week: "Tuần 1", title: "Discovery", content: "Tìm hiểu bản thân, xác định giá trị cốt lõi và unique selling point. Workshop: Brand Identity Canvas." },
            { week: "Tuần 2", title: "Strategy", content: "Chọn nền tảng phù hợp, xây dựng content pillars và brand voice. Template: Content Strategy Document." },
            { week: "Tuần 3", title: "Execution", content: "Tạo content chất lượng, xây dựng calendar và workflow hiệu quả. Tool: Content Calendar Template." },
            { week: "Tuần 4", title: "Growth", content: "Đo lường KPIs, tối ưu performance và chiến lược phát triển dài hạn. 1-on-1 Coaching Session." },
        ],
        testimonials: [
            { name: "Lan", role: "Freelance Designer", quote: "Cuối cùng mình cũng biết mình nên nói gì và nói ở đâu. LinkedIn followers tăng 5x!" },
            { name: "Tuấn", role: "Startup Founder", quote: "Rất có hệ thống. Mình đã áp dụng ngay sau tuần đầu tiên." },
            { name: "Mai", role: "HR Manager", quote: "Khóa học giúp mình xây dựng personal brand và mở ra nhiều cơ hội mới." },
        ],
        faqs: [
            { q: "Tôi không có follower, có nên học không?", a: "Hoàn toàn! Khóa học giúp bạn xây dựng từ đầu với chiến lược đúng." },
            { q: "Nền tảng nào phù hợp nhất?", a: "Trong khóa học, bạn sẽ được hướng dẫn chọn nền tảng phù hợp với goals của mình." },
            { q: "1-on-1 coaching như thế nào?", a: "Session 45 phút qua Zoom với Thuần, focus vào brand của bạn." },
        ],
    },
};

const CourseDetail = () => {
    const params = useParams();
    const id = params?.id as string | undefined;
    const course = id ? coursesData[id as keyof typeof coursesData] : null;

    if (!course) {
        return (
            <Layout>
                <section className="section-spacing">
                    <div className="container text-center">
                        <h1 className="text-3xl font-medium mb-4">Không tìm thấy khóa học</h1>
                        <p className="text-muted-foreground mb-8">Khóa học bạn tìm kiếm không tồn tại.</p>
                        <Button asChild>
                            <Link href="/course">Xem tất cả khóa học</Link>
                        </Button>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="section-spacing bg-gradient-to-b from-card to-background">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Khóa học online</p>
                            <h1 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
                                {course.title}
                            </h1>
                            <p className="text-xl text-primary mb-6">{course.subtitle}</p>
                            <p className="text-text-body max-w-2xl mx-auto mb-8">
                                {course.description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                                <div className="text-center">
                                    <p className="font-medium text-foreground">{course.duration}</p>
                                    <p className="text-muted-foreground">Thời lượng</p>
                                </div>
                                <div className="w-px bg-border" />
                                <div className="text-center">
                                    <p className="font-medium text-foreground">{course.students}</p>
                                    <p className="text-muted-foreground">Học viên</p>
                                </div>
                                <div className="w-px bg-border" />
                                <div className="text-center">
                                    <p className="font-medium text-foreground">{course.modules}</p>
                                    <p className="text-muted-foreground">Nội dung</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <Button size="lg" className="text-base px-8">
                                Đăng ký ngay — {course.price}
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 bg-card">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-6">
                        {course.highlights.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="text-center p-6">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-medium">{index + 1}</span>
                                    </div>
                                    <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Process */}
            <section className="section-spacing">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Quy trình học</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                            Hành trình của bạn
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connection line */}
                        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

                        {course.process.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 150}>
                                <div className="text-center relative">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium relative z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="section-spacing bg-card">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal className="text-center mb-12">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Kết quả</p>
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                                Sau khóa học, bạn sẽ
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-4">
                            {course.outcomes.map((outcome, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-text-body">{outcome}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="section-spacing">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal className="text-center mb-12">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Giáo trình</p>
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                                Nội dung chi tiết
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <Accordion type="single" collapsible className="space-y-3">
                                {course.syllabus.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border border-border/50 rounded-lg px-6 bg-card"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-5">
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-sm text-primary font-medium w-20">{item.week}</span>
                                                <span className="font-medium text-foreground">{item.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5 pl-24 text-text-body">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* For Who */}
            <section className="py-16 bg-secondary text-secondary-foreground">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-medium">
                                Khóa học phù hợp với
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-4">
                            {course.forWho.map((who, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary-foreground/10">
                                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>{who}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor */}
            <section className="section-spacing">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal className="text-center mb-12">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Giảng viên</p>
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                                Học cùng Thuần
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card border border-border/50">
                                <div className="w-32 h-32 rounded-full bg-primary/20 flex-shrink-0 overflow-hidden">
                                    <img
                                        src="/assets/thuan-portrait.jpg"
                                        alt="Thuần"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-foreground mb-1">Trịnh Phan Thuỳ Nhung</h3>
                                    <p className="text-primary mb-4">Host Thuần Podcast</p>
                                    <p className="text-text-body">
                                        Mình là Nhung, người đứng sau Thuần Podcast với hơn 52 tập và hàng ngàn người nghe mỗi tháng.
                                        Mình đã giúp hàng trăm học viên xây dựng storytelling và personal brand thông qua các khóa học và coaching.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-spacing bg-card">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal className="text-center mb-12">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Đánh giá</p>
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                                Học viên nói gì
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-6">
                            {course.testimonials.map((testimonial, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="p-6 rounded-lg bg-background border border-border/50 h-full">
                                        <p className="text-text-body mb-4">"{testimonial.quote}"</p>
                                        <div>
                                            <p className="font-medium text-foreground">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-spacing">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal className="text-center mb-12">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">FAQ</p>
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                                Câu hỏi thường gặp
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <Accordion type="single" collapsible className="space-y-3">
                                {course.faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`faq-${index}`}
                                        className="border border-border/50 rounded-lg px-6 bg-card"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-5 text-left">
                                            <span className="font-medium text-foreground">{faq.q}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5 text-text-body">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-spacing bg-primary text-primary-foreground">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-2xl md:text-3xl font-medium mb-4">
                                Sẵn sàng bắt đầu?
                            </h2>
                            <p className="mb-8 opacity-90">
                                Đăng ký ngay hôm nay và bắt đầu hành trình nâng tầm content của bạn.
                            </p>
                            <Button size="lg" variant="secondary" className="text-base px-8">
                                Đăng ký — {course.price}
                            </Button>
                            <p className="text-sm mt-4 opacity-75">
                                Có câu hỏi? <Link href="/work" className="underline">Liên hệ mình</Link>
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CourseDetail;
