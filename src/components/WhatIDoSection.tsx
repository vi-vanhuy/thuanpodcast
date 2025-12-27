import { Lightbulb, PenLine, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Xây dựng chiến lược nội dung và định vị thương hiệu cá nhân.",
  },
  {
    icon: PenLine,
    title: "Creative",
    description: "Ý tưởng sáng tạo, kịch bản và storytelling cho các dự án truyền thông.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Đào tạo và chia sẻ kiến thức về content marketing và storytelling.",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="max-w-reading mx-auto mb-12 fade-in">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            What I do
          </h2>
          <p className="text-text-body">
            Ba lĩnh vực chính mình tập trung phát triển và đồng hành cùng khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fade-in fade-in-delay-${index + 1} p-6 rounded-lg bg-card border border-border/50 card-hover`}
            >
              <service.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
