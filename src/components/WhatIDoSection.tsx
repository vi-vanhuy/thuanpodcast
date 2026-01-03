"use client";

import { GraduationCap, Briefcase, Mic, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const profileItems = [
  {
    icon: GraduationCap,
    title: "Học vấn",
    description: "Cử nhân ngành Marketing, Đại học Kinh tế Quốc dân (NEU), Khóa 61",
  },
  {
    icon: Briefcase,
    title: "Kỹ năng",
    description: "Xây dựng kịch bản, Storytelling, Content Strategy, Personal Branding, Podcast Production",
  },
  {
    icon: Mic,
    title: "Công việc",
    description: "Content Creator, Podcaster, Scriptwriter — Hợp tác với các doanh nghiệp trong dự án truyền thông",
  },
  {
    icon: Target,
    title: "Triết lý",
    description: "Mọi thứ xảy ra đều có lý do của nó. Cứ đi, mọi thứ sẽ dần trở nên rõ ràng",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <ScrollReveal className="max-w-reading mx-auto mb-12 text-center">
          <h2 className="font-handwritten text-3xl md:text-4xl text-secondary mb-4">
            Về mình
          </h2>
          <p className="text-text-body">
            Một chút về Nhung — con người đứng sau Thuần Podcast
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 card-hover h-full">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
