"use client";

import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

const testimonials = [
    {
        name: "Minh Anh",
        content: "Nghe Thuần kể chuyện như đang nói chuyện với bạn thân. Mỗi tập đều giúp mình thấy không đơn độc trong hành trình tìm bản thân.",
        platform: "Spotify Listener",
    },
    {
        name: "Hương Ly",
        content: "Mình nghe Thuần Podcast mỗi sáng đi làm. Câu nói 'hãy nhẹ nhàng với bản thân' đã thay đổi cách mình nhìn mọi việc.",
        platform: "Apple Podcasts",
    },
    {
        name: "Quốc Bảo",
        content: "Cảm ơn chị vì những tập podcast về công việc và kỹ năng. Mình hiểu ra là mình đang bán kỹ năng chứ không phải bán sản phẩm!",
        platform: "YouTube",
    },
    {
        name: "Thu Hà",
        content: "Thuần chia sẻ rất thật về những việc mông lung, không chắc chắn. Và điều đó làm mình thấy ổn với việc chưa biết mình muốn gì.",
        platform: "Instagram",
    },
    {
        name: "Đức Anh",
        content: "Những câu chuyện về tình bạn trong podcast khiến mình nhớ đến bạn bè mình. Cảm ơn vì đã nhắc mình giữ liên lạc với họ.",
        platform: "Spotify Listener",
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="min-w-[320px] w-[320px] p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
        <Quote size={24} className="text-primary/40 mb-4" />
        <p className="text-text-body text-sm leading-relaxed mb-4">
            "{testimonial.content}"
        </p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-medium text-sm">
                    {testimonial.name.charAt(0)}
                </span>
            </div>
            <div>
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.platform}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="section-spacing overflow-hidden">
            <div className="container mb-12">
                <ScrollReveal className="text-center max-w-reading mx-auto">

                    <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                        Cảm ơn vì đã đồng hành
                    </h2>
                    <p className="text-muted-foreground mt-3">
                        Những lời nhắn ấm áp từ cộng đồng người nghe Thuần Podcast
                    </p>
                </ScrollReveal>
            </div>

            <Marquee speed={50} pauseOnHover={true} direction="left">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Marquee>
        </section>
    );
};

export default TestimonialsSection;
