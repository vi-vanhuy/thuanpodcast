"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";
const thuanImage = "/images/thuan-1.jpg";

const services = [
  {
    title: "Kế hoạch xây kênh",
    outcome: "Chiến lược nội dung rõ ràng cho 3-6 tháng",
    deliverables: ["Content strategy deck", "Editorial calendar", "Brand voice guidelines", "KPIs & metrics"],
    timeline: "2-3 tuần",
  },
  {
    title: "Ý tưởng & Nội dung Campaign",
    outcome: "Concept sáng tạo và nội dung hoàn chỉnh cho chiến dịch",
    deliverables: ["Creative concept", "Key messages", "Content scripts", "Visual direction"],
    timeline: "3-4 tuần",
  },
  {
    title: "Kịch bản TVC/Show",
    outcome: "Kịch bản hoàn chỉnh sẵn sàng sản xuất",
    deliverables: ["Story outline", "Full script", "Shot list suggestions", "Direction notes"],
    timeline: "4-6 tuần",
  },
];

const cases = [
  {
    id: "brand-story-campaign",
    client: "Thương hiệu F&B",
    title: "Brand Story Campaign",
    description: "Xây dựng chiến dịch storytelling đa nền tảng, tăng 300% engagement và 150% followers trong 3 tháng.",
    tags: ["Strategy", "Content"],
  },
  {
    id: "personal-branding",
    client: "Founder Startup",
    title: "Personal Branding",
    description: "Xây dựng thương hiệu cá nhân và content strategy cho LinkedIn, đạt 50K+ impressions/tháng.",
    tags: ["Strategy", "Coaching"],
  },
  {
    id: "documentary-series",
    client: "Media Company",
    title: "Documentary Series",
    description: "Kịch bản và sản xuất nội dung cho series 6 tập về khởi nghiệp, 2M+ views trên YouTube.",
    tags: ["Script", "Production"],
  },
  {
    id: "course-content",
    client: "Education Platform",
    title: "Course Content",
    description: "Thiết kế và sản xuất nội dung cho khóa học storytelling, 500+ học viên đăng ký.",
    tags: ["Education", "Content"],
  },
];

const process = [
  { step: "01", title: "Brief", description: "Trao đổi để hiểu rõ mục tiêu và kỳ vọng của bạn." },
  { step: "02", title: "Research", description: "Nghiên cứu thị trường, đối thủ và insight khách hàng." },
  { step: "03", title: "Create", description: "Phát triển ý tưởng và sản xuất nội dung." },
  { step: "04", title: "Deliver", description: "Hoàn thiện và bàn giao sản phẩm cuối cùng." },
];

const Work = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đã gửi brief!",
      description: "Mình sẽ phản hồi trong vòng 24-48 giờ.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Header with Image */}
      <section className="section-spacing pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                Work
              </h1>
              <p className="text-body text-text-body mb-6">
                Mình giúp doanh nghiệp và cá nhân xây dựng nội dung có chiều sâu —
                từ chiến lược, ý tưởng đến sản xuất hoàn chỉnh.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Gửi brief ngay <ArrowRight size={16} />
              </a>
            </div>
            <div className="fade-in fade-in-delay-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={thuanImage}
                  alt="Thuần - Content Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing bg-card/50">
        <div className="container">
          <h2 className="text-2xl font-medium text-foreground mb-8 fade-in">Services</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`fade-in fade-in-delay-${index + 1} p-6 md:p-8 rounded-lg bg-background border border-border/50`}
              >
                <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-primary mb-4">{service.outcome}</p>

                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Timeline: {service.timeline}</p>
                  <a href="#contact" className="text-sm text-primary hover:text-primary-light transition-colors">
                    Gửi brief →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="text-2xl font-medium text-foreground mb-8 fade-in">Selected Cases</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <Link
                key={caseItem.id}
                href={`/work/case/${caseItem.id}`}
                className={`fade-in fade-in-delay-${Math.min(index + 1, 3)} group block p-6 rounded-lg bg-card border border-border/50 card-hover`}
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {caseItem.client}
                </p>
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{caseItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-card/50">
        <div className="container">
          <h2 className="text-2xl font-medium text-foreground mb-8 fade-in">Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className={`fade-in fade-in-delay-${index + 1}`}>
                <p className="font-handwritten text-3xl text-primary mb-2">{item.step}</p>
                <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-spacing">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8 fade-in">
              <h2 className="text-2xl font-medium text-foreground mb-2">Gửi brief</h2>
              <p className="text-muted-foreground">
                Chia sẻ về dự án của bạn, mình sẽ phản hồi trong 24-48 giờ.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 fade-in fade-in-delay-1">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Tên của bạn</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Công ty/Tổ chức</label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Dịch vụ quan tâm</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="strategy">Kế hoạch xây kênh</option>
                  <option value="campaign">Ý tưởng & Nội dung Campaign</option>
                  <option value="script">Kịch bản TVC/Show</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Mô tả dự án</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Mục tiêu, timeline, ngân sách dự kiến..."
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Gửi brief <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
