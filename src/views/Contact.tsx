"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const contactMethods = [
    {
        title: "Email",
        value: "tptnhung@gmail.com",
        link: "mailto:tptnhung@gmail.com",
        description: "Phản hồi trong vòng 24-48 giờ",
    },
    {
        title: "Instagram",
        value: "@thuan.podcast",
        link: "https://instagram.com/thuan.podcast",
        description: "DM cho những câu hỏi nhanh",
    },
];

const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/thuan.podcast" },
    { name: "TikTok", url: "https://tiktok.com/@thuan.podcast" },
    { name: "YouTube", url: "https://youtube.com/@thuanpodcast" },
    { name: "Spotify", url: "https://open.spotify.com/show/thuanpodcast" },
    { name: "Facebook", url: "https://facebook.com/thuanpodcast" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <Layout>
            {/* Hero */}
            <section className="section-spacing pb-12">
                <div className="container">
                    <ScrollReveal className="max-w-reading">
                        <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                            Liên hệ
                        </h1>
                        <p className="text-body text-text-body">
                            Mình luôn sẵn lòng lắng nghe. Dù bạn muốn hợp tác, có câu hỏi,
                            hay chỉ đơn giản là muốn nói chuyện — hãy để lại lời nhắn nhé.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <ScrollReveal>
                                <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/50">
                                    <h2 className="text-xl font-medium text-foreground mb-6">
                                        Gửi tin nhắn
                                    </h2>

                                    {submitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-foreground mb-2">
                                                Đã gửi thành công!
                                            </h3>
                                            <p className="text-muted-foreground mb-6">
                                                Mình sẽ phản hồi sớm nhất có thể nhé.
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => setSubmitted(false)}
                                            >
                                                Gửi tin nhắn khác
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-foreground mb-2">
                                                        Tên của bạn
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        placeholder="Nhập tên..."
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        required
                                                        className="bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-foreground mb-2">
                                                        Email
                                                    </label>
                                                    <Input
                                                        type="email"
                                                        placeholder="email@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        required
                                                        className="bg-background"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">
                                                    Chủ đề
                                                </label>
                                                <Input
                                                    type="text"
                                                    placeholder="Bạn muốn trao đổi về điều gì?"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    required
                                                    className="bg-background"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">
                                                    Nội dung
                                                </label>
                                                <Textarea
                                                    placeholder="Viết tin nhắn của bạn..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    required
                                                    rows={6}
                                                    className="bg-background resize-none"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full md:w-auto"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Direct Contact */}
                            <ScrollReveal delay={200}>
                                <div className="space-y-4">
                                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                                        Liên hệ trực tiếp
                                    </h3>
                                    {contactMethods.map((method) => (
                                        <a
                                            key={method.title}
                                            href={method.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                                        >
                                            <p className="text-xs text-muted-foreground mb-1">{method.title}</p>
                                            <p className="font-medium text-foreground mb-1">{method.value}</p>
                                            <p className="text-sm text-muted-foreground">{method.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </ScrollReveal>

                            {/* Social */}
                            <ScrollReveal delay={300}>
                                <div className="space-y-4">
                                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                                        Theo dõi mình
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
                                            >
                                                {social.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Note */}
                            <ScrollReveal delay={400}>
                                <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                                    <p className="font-quote text-secondary text-lg leading-relaxed">
                                        "Mình trân trọng mỗi tin nhắn nhận được.
                                        Cảm ơn bạn đã dành thời gian liên hệ nhé."
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-3">— Thuần</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-card">
                <div className="container">
                    <ScrollReveal className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-medium text-foreground mb-4">
                            Câu hỏi thường gặp
                        </h2>
                        <div className="space-y-6 text-left mt-8">
                            <div>
                                <h3 className="font-medium text-foreground mb-2">
                                    Mình có thể hợp tác với bạn như thế nào?
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Mình nhận các dự án về content creation, podcast guesting, brand collaboration,
                                    và coaching 1-1. Hãy gửi brief qua form hoặc email nhé.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-2">
                                    Thời gian phản hồi thường là bao lâu?
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Mình cố gắng phản hồi trong vòng 24-48 giờ cho email.
                                    Với DM trên Instagram, có thể nhanh hơn với những câu hỏi ngắn.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-2">
                                    Có thể booking 1-1 coaching không?
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Có! Mình có session coaching 1-1 về personal branding và content strategy.
                                    Liên hệ qua email để biết thêm chi tiết.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
