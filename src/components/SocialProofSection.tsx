"use client";

import { useEffect, useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Music2, Instagram, Youtube, Facebook, Star, Headphones, ArrowUpRight } from "lucide-react";

const socialChannels = [
    { name: "TikTok", icon: Music2, count: 600000, href: "https://www.tiktok.com/@thepodcastofthuan", preview: "/images/thuan-1.jpg", size: "large" },
    { name: "YouTube", icon: Youtube, count: 117000, href: "https://www.youtube.com/@thepodcastofthuan", preview: "/images/thuan-2.jpg", size: "medium" },
    { name: "Instagram", icon: Instagram, count: 102000, href: "https://www.instagram.com/thepodcastofthuan/", preview: "/images/thuan-3.jpg", size: "medium" },
    { name: "Spotify", icon: Headphones, count: 100000, label: "lượt nghe/tháng", href: "https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C", preview: "/images/thuan-1.jpg", size: "small" },
    { name: "Facebook", icon: Facebook, count: 86000, href: "https://www.facebook.com/randomnessofthuan", preview: "/images/thuan-2.jpg", size: "small" },
    { name: "Apple Podcasts", icon: Star, count: 4.9, label: "5.5K đánh giá", href: "https://podcasts.apple.com/us/podcast/thu%E1%BA%A7n-podcast/id1571496739", preview: "/images/thuan-3.jpg", size: "small", isRating: true },
];

function useCounter(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    const startTime = Date.now();
                    const step = () => {
                        const progress = Math.min((Date.now() - startTime) / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(end * easeOut));
                        if (progress < 1) requestAnimationFrame(step);
                        else setCount(end);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted, end, duration]);

    return { count, ref };
}

function formatNumber(num: number): string {
    return num.toLocaleString('vi-VN');
}

const SocialProofSection = () => {
    return (
        <section className="py-20 md:py-32 bg-card">
            <div className="container">
                {/* Header */}
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                    <p className="font-handwritten text-primary text-2xl mb-4">Kênh của Thuần ♡</p>
                    <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                        Cảm ơn hơn <span className="text-primary">1 triệu</span> người đã đồng hành
                    </h2>
                </ScrollReveal>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
                    {/* TikTok - Large (spans 6 cols, 2 rows) */}
                    <ScrollReveal className="col-span-6 row-span-2">
                        <ChannelCard channel={socialChannels[0]} index={0} className="h-full min-h-[400px]" />
                    </ScrollReveal>

                    {/* YouTube - Medium */}
                    <ScrollReveal delay={100} className="col-span-3 md:col-span-3">
                        <ChannelCard channel={socialChannels[1]} index={1} className="h-full min-h-[190px]" />
                    </ScrollReveal>

                    {/* Instagram - Medium */}
                    <ScrollReveal delay={150} className="col-span-3 md:col-span-3">
                        <ChannelCard channel={socialChannels[2]} index={2} className="h-full min-h-[190px]" />
                    </ScrollReveal>

                    {/* Spotify - Small */}
                    <ScrollReveal delay={200} className="col-span-2 md:col-span-2">
                        <ChannelCard channel={socialChannels[3]} index={3} className="h-full min-h-[190px]" compact />
                    </ScrollReveal>

                    {/* Facebook - Small */}
                    <ScrollReveal delay={250} className="col-span-2 md:col-span-2">
                        <ChannelCard channel={socialChannels[4]} index={4} className="h-full min-h-[190px]" compact />
                    </ScrollReveal>

                    {/* Apple Podcasts - Small */}
                    <ScrollReveal delay={300} className="col-span-2 md:col-span-2">
                        <ChannelCard channel={socialChannels[5]} index={5} className="h-full min-h-[190px]" compact />
                    </ScrollReveal>
                </div>

                {/* Quote */}
                <ScrollReveal delay={400} className="mt-16">
                    <p className="text-center font-quote text-xl md:text-2xl text-secondary/80 max-w-xl mx-auto">
                        "Mỗi con số là một người thật, đang lắng nghe và đồng hành cùng mình."
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

interface ChannelCardProps {
    channel: typeof socialChannels[0];
    index: number;
    className?: string;
    compact?: boolean;
}

function ChannelCard({ channel, index, className, compact }: ChannelCardProps) {
    const { count, ref } = useCounter(channel.isRating ? 49 : channel.count, 1800 + index * 200);

    const floatStyles = {
        animation: `float ${4 + index * 0.3}s ease-in-out infinite`,
        animationDelay: `${index * 0.4}s`,
    };

    return (
        <>
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
            <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative rounded-2xl overflow-hidden outline-none 
                           hover:z-10 hover:scale-[1.02] transition-transform duration-300 ${className}`}
                style={floatStyles}
            >
                {/* Background Image */}
                <img
                    src={channel.preview}
                    alt={channel.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

                {/* Content */}
                <div ref={ref} className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                    {/* Top: Icon */}
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <channel.icon className={`${compact ? 'w-4 h-4' : 'w-5 h-5 md:w-6 md:h-6'} text-primary-foreground`} />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Bottom: Stats */}
                    <div>
                        <p className={`font-bold text-white tracking-tight ${compact ? 'text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                            {channel.isRating ? `${(count / 10).toFixed(1)}★` : formatNumber(count)}
                        </p>
                        <p className="text-white/70 text-xs md:text-sm mt-1">{channel.label || 'followers'}</p>
                        <p className={`text-white font-medium mt-2 ${compact ? 'text-sm' : 'text-base md:text-lg'}`}>
                            {channel.name}
                        </p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default SocialProofSection;
