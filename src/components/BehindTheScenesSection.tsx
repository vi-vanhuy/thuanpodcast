"use client";

import ScrollReveal from "@/components/ScrollReveal";
const thuanImage1 = "/images/thuan-1.jpg";
const thuanImage2 = "/images/thuan-2.jpg";
const thuanImage3 = "/images/thuan-3.jpg";

const behindScenes = [
    {
        image: thuanImage1,
        caption: "Recording session",
    },
    {
        image: thuanImage2,
        caption: "Góc làm việc",
    },
    {
        image: thuanImage3,
        caption: "Khoảnh khắc yên bình",
    },
];

const BehindTheScenesSection = () => {
    return (
        <section className="section-spacing bg-card">
            <div className="container">
                <ScrollReveal className="text-center max-w-reading mx-auto mb-12">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Góc nhỏ của Thuần</p>
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                        Behind the Scenes
                    </h2>
                    <p className="text-muted-foreground mt-3">
                        Những khoảnh khắc nhỏ trong hành trình làm nội dung
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {behindScenes.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="font-handwritten text-xl text-white text-center">
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Quote */}
                <ScrollReveal delay={500} className="mt-12">
                    <blockquote className="text-center max-w-2xl mx-auto">
                        <p className="font-quote text-2xl md:text-3xl text-secondary leading-relaxed">
                            "Mỗi tập podcast là một lá thư nhỏ mình gửi đến các bạn —
                            viết bằng tình yêu và sự chân thành."
                        </p>
                        <footer className="mt-4 text-muted-foreground text-sm">— Thuần</footer>
                    </blockquote>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BehindTheScenesSection;
