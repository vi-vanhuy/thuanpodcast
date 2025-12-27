import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import thuanImage from "@/assets/thuan-1.jpg";

const HeroSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <p className="font-handwritten text-2xl md:text-3xl text-secondary">
                Xin chào mọi người, lại là mình
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight">
                Thuần <span className="text-primary">đây!</span>
              </h1>
              <p className="text-body-lg text-text-body max-w-lg leading-relaxed">
                Chào cậu – cảm ơn cậu vì đã ở đây. Mình làm podcast về lối sống tử tế, 
                chăm sóc bên trong, và những câu chuyện nhẹ nhàng giúp ta sống chậm lại một chút.
              </p>
              <p className="font-handwritten text-xl text-secondary">loveu ♡</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/podcast">Nghe podcast</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">Làm việc cùng Thuần</Link>
              </Button>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
              <span>Có trên:</span>
              <a href="#" className="hover:text-foreground transition-colors">Spotify</a>
              <span className="text-border">•</span>
              <a href="#" className="hover:text-foreground transition-colors">Apple Podcasts</a>
              <span className="text-border">•</span>
              <a href="#" className="hover:text-foreground transition-colors">YouTube</a>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in fade-in-delay-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-2xl -rotate-3"></div>
              <img
                src={thuanImage}
                alt="Thuần - Podcast Host"
                className="relative rounded-2xl object-cover w-full h-full shadow-lift"
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-handwritten text-lg shadow-glow">
                Self-Improvement 🌱
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
