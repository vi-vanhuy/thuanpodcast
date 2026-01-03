"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
    Calendar, Clock, Users, Video, CheckCircle2, Mic,
    Sparkles, Target, BookOpen, User, ArrowRight, Instagram,
    Youtube, AlertCircle
} from "lucide-react";
import Link from "next/link";

const courseImages = [
    "/images/thanh-chat-1.png",
    "/images/thanh-chat-2.png",
    "/images/thanh-chat-3.png",
];

const modules = [
    { title: "Làm chủ giọng nói", desc: "Cách truyền tải cảm xúc" },
    { title: "Kỹ thuật thu âm", desc: "Biên tập âm thanh cơ bản" },
    { title: "Khai thác chất liệu cá nhân", desc: "Thành nội dung" },
    { title: "Kĩ năng làm video", desc: "Tạo nội dung ấn tượng" },
    { title: "Xây dựng thương hiệu cá nhân", desc: "Truyền thông hiệu quả" },
    { title: "Ứng dụng AI", desc: "Trong phát triển nội dung" },
    { title: "Định hướng cá nhân", desc: "Coaching & review cùng 2 mentor" },
];

const objectives = [
    { icon: Mic, title: "Âm thanh có hồn", desc: "Làm chủ giọng nói để truyền tải câu chuyện chân thực và giàu cảm xúc." },
    { icon: Sparkles, title: "Nội dung có chất", desc: "Khai thác và xây dựng chất liệu cá nhân để tạo nội dung sâu sắc, ý nghĩa." },
    { icon: Video, title: "Phối hợp giọng nói với video", desc: "Tăng tính thẩm mỹ và sức hút cho nội dung." },
    { icon: Target, title: "Vận hành đa nền tảng", desc: "Xây dựng nội dung và chọn định dạng phù hợp với mỗi nền tảng." },
];

const suitableFor = [
    "Muốn tạo nội dung độc đáo từ câu chuyện và trải nghiệm cá nhân",
    "Muốn cải thiện giọng nói để thể hiện tốt hơn khi làm nội dung",
    "Muốn phát triển thương hiệu cá nhân và bắt đầu hành trình sáng tạo nội dung",
];

const considerations = [
    { title: "Không chuyên sâu về luyện giọng", desc: "Tập trung vào cách tận dụng giọng nói hiện có để làm nội dung hiệu quả." },
    { title: "Khóa học đề cao tính thực hành", desc: "Yêu cầu làm bài tập đầy đủ trong thời gian quy định (deadline liên tục nên khá áp lực)." },
    { title: "Lớp học từ kinh nghiệm cá nhân", desc: "Nên tìm hiểu phong cách của mentor qua các kênh để xem có phù hợp trước khi đăng ký." },
];

const ThanhChatCoursePage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        socialLink: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with backend/email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <Layout>
            {/* Registration Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowForm(false)}
                    />
                    <div className="relative bg-background rounded-2xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        >
                            ✕
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Đăng ký khóa học
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    Thanh Chất Collective - 4.000.000đ
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="0901234567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Link mạng xã hội (Facebook/Instagram)</label>
                                        <input
                                            type="url"
                                            value={formData.socialLink}
                                            onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="https://instagram.com/username"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Lý do bạn muốn tham gia?</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                            placeholder="Chia sẻ một chút về bản thân và mong muốn của bạn..."
                                        />
                                    </div>

                                    <Button type="submit" variant="hero" size="lg" className="w-full">
                                        Gửi đăng ký
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center">
                                        Sau khi gửi form, mentor sẽ liên hệ xác nhận và hướng dẫn thanh toán.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Đăng ký thành công!
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    Cảm ơn bạn đã đăng ký. Mentor sẽ liên hệ với bạn trong 24-48h tới.
                                </p>
                                <Button onClick={() => setShowForm(false)} variant="outline">
                                    Đóng
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-8 pb-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <ScrollReveal>
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                                    <span className="text-primary font-medium text-sm">Khóa học mới 2026</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                                    THANH CHẤT
                                    <span className="text-primary block">COLLECTIVE</span>
                                </h1>

                                <p className="font-quote text-xl md:text-2xl text-secondary">
                                    "Âm thanh có Hồn - Nội dung có Chất"
                                </p>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Hướng dẫn mọi người kể chuyện (storytelling) bằng âm thanh,
                                    biến câu chuyện thành những nội dung giàu cảm xúc.
                                </p>

                                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>08/01 - 26/02/2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>20h00, Thứ 5 hằng tuần</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span>Giới hạn 20 học viên</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button size="lg" variant="hero" onClick={() => setShowForm(true)}>
                                        Đăng ký ngay - 4.000.000đ
                                    </Button>
                                    <Button size="lg" variant="outline" onClick={() => setShowForm(true)}>
                                        Tư vấn thêm
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Image Gallery */}
                        <ScrollReveal delay={200}>
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lift">
                                    {courseImages.map((img, idx) => (
                                        <img
                                            key={img}
                                            src={img}
                                            alt={`Thanh Chất Collective ${idx + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
                                 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 mt-4">
                                    {courseImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-20 bg-card">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-foreground">Mục tiêu khóa học</h2>
                        <p className="text-muted-foreground mt-2">Bạn sẽ đạt được gì sau khóa học?</p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {objectives.map((obj, idx) => (
                            <ScrollReveal key={obj.title} delay={idx * 100}>
                                <div className="p-6 bg-background rounded-2xl border border-border/50 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <obj.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-medium text-foreground mb-2">{obj.title}</h3>
                                    <p className="text-sm text-muted-foreground">{obj.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Suitable For */}
            <section className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <h2 className="text-3xl font-medium text-foreground mb-6">
                                Khóa học phù hợp với ai?
                            </h2>
                            <div className="space-y-4">
                                {suitableFor.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <img
                                src="/images/thanh-chat-2.png"
                                alt="Học viên Thanh Chất"
                                className="rounded-2xl shadow-lift"
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="py-20 bg-card">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-foreground">Nội dung khóa học</h2>
                        <p className="text-muted-foreground mt-2">7 modules thực hành chuyên sâu</p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {modules.map((mod, idx) => (
                            <ScrollReveal key={mod.title} delay={idx * 80}>
                                <div className="p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                                            {idx + 1}
                                        </span>
                                        <h3 className="font-medium text-foreground">{mod.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground pl-11">{mod.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentors */}
            <section className="py-20">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-foreground">Đội ngũ Mentor</h2>
                        <p className="text-muted-foreground mt-2">Đồng hành cùng bạn trong suốt khóa học</p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Dế Mèn */}
                        <ScrollReveal>
                            <div className="p-6 bg-card rounded-2xl border border-border/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground text-lg">Đào Minh Tiến</h3>
                                        <p className="text-primary text-sm">Dế Mèn Du Ký</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                    <li>• Host series podcast Dế Mèn Du Ký</li>
                                    <li>• Quán quân Vietnam Creator Bootcamp (Intel)</li>
                                    <li>• Quán quân Castcamp 2021 (Vietcetera)</li>
                                    <li>• Content Creator đa nền tảng</li>
                                </ul>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/demen.duky/" target="_blank" rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a href="https://www.tiktok.com/@demendukyhttps" target="_blank" rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                                        <Mic className="w-4 h-4" />
                                    </a>
                                    <a href="https://www.youtube.com/@demenduky" target="_blank" rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                                        <Youtube className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Thuần */}
                        <ScrollReveal delay={150}>
                            <div className="p-6 bg-card rounded-2xl border border-border/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src="/images/thuan-1.jpg" alt="Thuần" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground text-lg">Thuần Podcast</h3>
                                        <p className="text-primary text-sm">Trịnh Phan Thuỳ Nhung</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                    <li>• Top BXH podcast Spotify thường xuyên</li>
                                    <li>• Hơn 5 năm kinh nghiệm</li>
                                    <li>• Hơn 1 triệu người theo dõi</li>
                                    <li>• Tư vấn truyền thông cho doanh nghiệp</li>
                                </ul>
                                <div className="flex gap-3">
                                    <Link href="/" className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Format */}
            <section className="py-20 bg-card">
                <div className="container">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-foreground">Hình thức khóa học</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-medium text-foreground mb-2">Thời gian</h3>
                                <p className="text-sm text-muted-foreground">20h00, Thứ 5 hằng tuần<br />08/01/2026 – 26/02/2026</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Video className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-medium text-foreground mb-2">Học online</h3>
                                <p className="text-sm text-muted-foreground">Qua Google Meet<br />Tương tác trực tiếp với mentor</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-medium text-foreground mb-2">Quy trình</h3>
                                <p className="text-sm text-muted-foreground">Mentor chia sẻ → Thực hành<br />→ Nộp bài → Feedback</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Considerations */}
            <section className="py-20">
                <div className="container max-w-3xl">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-foreground">Điều bạn cần cân nhắc</h2>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {considerations.map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className="p-5 bg-card rounded-xl border border-border/50">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/5">
                <div className="container text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                            Sẵn sàng bắt đầu hành trình?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Giới hạn chỉ 20 học viên. Đăng ký ngay để không bỏ lỡ!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="hero" className="text-lg px-8" onClick={() => setShowForm(true)}>
                                Đăng ký ngay - 4.000.000đ
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => setShowForm(true)}>
                                Liên hệ tư vấn
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </Layout>
    );
};

export default ThanhChatCoursePage;
