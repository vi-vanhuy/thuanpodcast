import { Mic, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Podcast",
    description: "Những cuộc trò chuyện chậm rãi về cuộc sống, phát triển bản thân và chăm sóc tâm hồn.",
  },
  {
    icon: Heart,
    title: "Healing Content",
    description: "Nội dung chữa lành, giúp bạn thấy nhẹ nhõm hơn trong những ngày khó khăn.",
  },
  {
    icon: Sparkles,
    title: "Storytelling",
    description: "Kể những câu chuyện gần gũi, mộc mạc về những điều nhỏ bé nhưng ý nghĩa.",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="max-w-reading mx-auto mb-12 text-center fade-in">
          <h2 className="font-handwritten text-3xl md:text-4xl text-secondary mb-4">
            Mình làm gì?
          </h2>
          <p className="text-text-body">
            Ba điều mình tập trung chia sẻ qua Thuần Podcast và các nền tảng khác.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fade-in fade-in-delay-${index + 1} p-8 rounded-2xl bg-card border border-border/50 card-hover text-center`}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
