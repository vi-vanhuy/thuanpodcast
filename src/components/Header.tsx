"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "/" },
  { name: "Podcast", href: "/podcast" },
  { name: "Work", href: "/work" },
  { name: "Course", href: "/course" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add scrolled state for styling
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Floating Pill Header */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
          }`}
      >
        <nav
          className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-border shadow-lift"
            : "bg-background/60 backdrop-blur-md border-border/50"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-handwritten text-xl text-foreground hover:text-primary transition-colors px-3 py-1"
          >
            Thuần <span className="text-primary">♡</span>
          </Link>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border/50" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm rounded-full transition-all duration-200 ${pathname === item.href
                  ? "text-foreground bg-card"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border/50" />

          {/* CTA Button */}
          <Button
            size="sm"
            className="hidden md:inline-flex rounded-full px-5 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-card/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-lift-lg">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base transition-colors ${pathname === item.href
                    ? "text-foreground bg-card font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border/50">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full rounded-xl"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
