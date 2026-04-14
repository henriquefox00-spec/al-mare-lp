import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-almare.png";

const navLinks = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#programacao", label: "Programação" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#local", label: "Local" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between h-16 md:h-20">
        <a href="#">
          <img
            src={logo}
            alt="al mare"
            className={`h-10 md:h-12 w-auto transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`body-small transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium text-xs py-3 px-6">
            Ative sua marca
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container-premium py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="body-small text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium text-xs py-3 mt-2 text-center">
              Ative sua marca
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;