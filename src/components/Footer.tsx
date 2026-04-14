import { WHATSAPP_URL } from "@/lib/constants";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo-almare.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-8 border-t border-border bg-background">
      <div className="container-premium">
        <div className="text-center mb-10">
          <img src={logo} alt="al mare" className="h-14 w-auto mx-auto mb-3" />
          <p className="body-small text-muted-foreground">
            Experiências de bem-estar, presença e celebração feminina.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {[
            { href: "#experiencia", label: "Experiência" },
            { href: "#programacao", label: "Programação" },
            { href: "#para-quem", label: "Para quem é" },
            { href: "#local", label: "Local" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="body-small text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mb-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="body-small text-muted-foreground hover:text-foreground transition-colors">
            WhatsApp
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
        </div>

        <div className="text-center mb-6">
          <p className="body-small text-muted-foreground/70">
            Idealização: <span className="text-foreground/80">Viitayoga</span> e <span className="text-foreground/80">Atlantis Grand</span>
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} al mare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;