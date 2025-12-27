import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import thuanPortrait from "@/assets/thuan-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <p className="font-handwritten text-2xl text-primary">
                Xin chào, mình là
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight">
                Thuần
              </h1>
              <p className="text-body-lg text-text-body max-w-lg leading-relaxed">
                Mình làm nội dung — và kể những câu chuyện khiến người ta thấy nhẹ hơn.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/podcast">Nghe podcast</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">Làm việc cùng Thuần</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in fade-in-delay-2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-lg -rotate-2"></div>
              <img
                src={thuanPortrait}
                alt="Thuần - Content Creator"
                className="relative rounded-lg object-cover w-full h-full shadow-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
