import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="font-handwritten text-3xl text-foreground">
              Thuần <span className="text-primary">♡</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Podcast về lối sống tử tế, chăm sóc bên trong và phát triển bản thân.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/podcast" className="text-muted-foreground hover:text-foreground transition-colors">
              Podcast
            </Link>
            <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link to="/course" className="text-muted-foreground hover:text-foreground transition-colors">
              Course
            </Link>
          </div>

          {/* Platforms */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Spotify
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Apple Podcasts
            </a>
            <a href="https://instagram.com/thepodcastofthuan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thuần Podcast. Made with 💛
          </p>
          <p className="font-handwritten text-lg text-secondary">
            loveu ♡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
