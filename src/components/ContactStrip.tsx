import { Mail, Instagram, Youtube, Facebook, Music2, Headphones } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:tptnhung@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thepodcastofthuan/",
    icon: Instagram,
    external: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@thepodcastofthuan",
    icon: Music2,
    external: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@thepodcastofthuan",
    icon: Youtube,
    external: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/randomnessofthuan",
    icon: Facebook,
    external: true,
  },
];

const podcastLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C?si=6ffabd31d1224d71",
    icon: Headphones,
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/thu%E1%BA%A7n-podcast/id1571496739",
    icon: Headphones,
  },
];

const ContactStrip = () => {
  return (
    <section className="section-spacing bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8 fade-in">
          <div className="space-y-4">
            <p className="font-handwritten text-2xl text-primary-light">
              Cảm ơn mọi người đã ở đây ♡
            </p>
            <h2 className="text-2xl md:text-3xl font-medium">
              Kết nối với Thuần
            </h2>
            <p className="text-secondary-foreground/80 max-w-lg mx-auto">
              Mọi người có thể tìm thấy mình ở những nơi này.
              Nếu muốn hợp tác hoặc chỉ đơn giản là tâm sự,
              mình luôn sẵn lòng lắng nghe nha.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-wider text-secondary-foreground/60">Mạng xã hội</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon size={20} />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Podcast Platforms */}
          <div className="space-y-6 pt-4">
            <h3 className="text-sm uppercase tracking-wider text-secondary-foreground/60">Nghe Podcast</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {podcastLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon size={20} />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <div className="pt-6 border-t border-secondary-foreground/10">
            <p className="text-sm text-secondary-foreground/70">
              Liên hệ hợp tác: <a href="mailto:tptnhung@gmail.com" className="text-primary hover:underline">tptnhung@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
