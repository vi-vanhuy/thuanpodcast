import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const works = [
  {
    title: "Brand Story Campaign",
    client: "Thương hiệu F&B",
    description: "Chiến dịch storytelling đa nền tảng, tăng 300% engagement.",
  },
  {
    title: "Personal Branding",
    client: "Founder Startup",
    description: "Xây dựng thương hiệu cá nhân và content strategy cho LinkedIn.",
  },
  {
    title: "Documentary Series",
    client: "Media Company",
    description: "Kịch bản và sản xuất nội dung cho series 6 tập về khởi nghiệp.",
  },
];

const SelectedWorkSection = () => {
  return (
    <section className="section-spacing bg-card/50">
      <div className="container">
        <div className="flex items-end justify-between mb-12 fade-in">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-2">Một vài dự án nổi bật</p>
          </div>
          <Link
            to="/work"
            className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
          >
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-6">
          {works.map((work, index) => (
            <Link
              key={work.title}
              to="/work"
              className={`fade-in fade-in-delay-${index + 1} block p-6 md:p-8 rounded-lg bg-background border border-border/50 card-hover group`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {work.client}
                  </p>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                </div>
                <p className="text-sm text-text-body md:text-right md:max-w-xs">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/work"
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-primary"
        >
          Xem tất cả <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
