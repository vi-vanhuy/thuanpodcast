import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="font-handwritten text-3xl text-foreground">
              Thuần
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Làm nội dung — và kể những câu chuyện khiến người ta thấy nhẹ hơn.
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

          {/* Social */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="mailto:hello@thuan.com" className="hover:text-foreground transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Thuần. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
