import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="font-handwritten text-3xl text-foreground">
              Thuần <span className="text-primary">♡</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Chia sẻ về hành trình tìm bản thân, công việc, tình bạn và những điều nhỏ bé trong cuộc sống.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/podcast" className="text-muted-foreground hover:text-foreground transition-colors">
              Podcast
            </Link>
            <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/course" className="text-muted-foreground hover:text-foreground transition-colors">
              Course
            </Link>
          </div>

          {/* Platforms */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Spotify
            </a>
            <a href="https://podcasts.apple.com/us/podcast/thu%E1%BA%A7n-podcast/id1571496739" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Apple Podcasts
            </a>
            <a href="https://www.instagram.com/thepodcastofthuan/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.youtube.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              YouTube
            </a>
            <a href="https://www.tiktok.com/@thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              TikTok
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thuần Podcast. Được tạo ra bởi 1 người bạn! 
          </p>
          <p className="text-xs text-muted-foreground">
            Contact: <a href="mailto:tptnhung@gmail.com" className="hover:text-foreground transition-colors">tptnhung@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
