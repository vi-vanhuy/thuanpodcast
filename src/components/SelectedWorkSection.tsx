"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const works = [
  {
    title: "Brand Story Campaign",
    client: "Thương hiệu F&B",
    description: "Chiến dịch storytelling đa nền tảng, tăng 300% engagement.",
    image: "/images/thuan-1.jpg",
    tags: ["Storytelling", "Content Strategy"],
  },
  {
    title: "Personal Branding",
    client: "Founder Startup",
    description: "Xây dựng thương hiệu cá nhân và content strategy cho LinkedIn.",
    image: "/images/thuan-2.jpg",
    tags: ["Personal Brand", "LinkedIn"],
  },
  {
    title: "Documentary Series",
    client: "Media Company",
    description: "Kịch bản và sản xuất nội dung cho series 6 tập về khởi nghiệp.",
    image: "/images/thuan-3.jpg",
    tags: ["Scriptwriting", "Production"],
  },
];

const SelectedWorkSection = () => {
  return (
    <section className="section-spacing bg-card/50">
      <div className="container">
        <ScrollReveal className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-2">Một vài dự án nổi bật</p>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
          >
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <div className="space-y-6">
          {works.map((work, index) => (
            <ScrollReveal key={work.title} delay={index * 150} direction="right">
              <Link
                href="/work"
                className="group block rounded-2xl bg-background border border-border/50 overflow-hidden
                         hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-72 lg:w-80 h-48 md:h-auto md:aspect-[4/3] flex-shrink-0 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                        {work.client}
                      </p>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {work.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex gap-2 flex-wrap">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                                    group-hover:bg-primary transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <Link
          href="/work"
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-primary"
        >
          Xem tất cả <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
