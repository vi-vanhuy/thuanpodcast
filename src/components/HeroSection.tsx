"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypeWriter from "@/components/TypeWriter";

const thuanImage = "/images/thuan-1.jpg";

const HeroSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <p className="font-quote text-2xl md:text-3xl text-secondary">
                <TypeWriter
                  text="Xin chào mọi người, lại là mình"
                  delay={40}
                  showCursor={true}
                />
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight">
                <TypeWriter
                  text="Thuần "
                  delay={80}
                  startDelay={1500}
                />
                <span className="text-primary">
                  <TypeWriter
                    text="đây!"
                    delay={100}
                    startDelay={2000}
                    showCursor={true}
                    cursorBlinkAfterComplete={true}
                  />
                </span>
              </h1>
              <p className="text-body-lg text-text-body max-w-lg leading-relaxed">
                Mình là một Content Creator và Personal Branding.
                Các bạn có thể làm quen với mình thông qua podcast dưới đây hoặc làm việc cùng mình nhé!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link href="/podcast">Nghe podcast</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">Làm việc cùng Thuần</Link>
              </Button>
            </div>

            {/* Platform badges - Marquee animation */}
            <div className="overflow-hidden relative pt-2 max-w-sm">
              <div className="flex animate-marquee whitespace-nowrap">
                <a href="https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Spotify</a>
                <span className="text-border mx-1">•</span>
                <a href="https://podcasts.apple.com/us/podcast/thu%E1%BA%A7n-podcast/id1571496739" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Apple Podcasts</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.youtube.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">YouTube</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.tiktok.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">TikTok</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.facebook.com/thuanpodcast" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Facebook</a>
                <span className="text-border mx-1">•</span>
                {/* Duplicate for seamless loop */}
                <a href="https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Spotify</a>
                <span className="text-border mx-1">•</span>
                <a href="https://podcasts.apple.com/us/podcast/thu%E1%BA%A7n-podcast/id1571496739" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Apple Podcasts</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.youtube.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">YouTube</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.tiktok.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">TikTok</a>
                <span className="text-border mx-1">•</span>
                <a href="https://www.facebook.com/thuanpodcast" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-3">Facebook</a>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
