import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { WHATSAPP_URL, eventDate, eventBadges } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 container-premium text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="label-caps text-champagne mb-6 tracking-[0.3em]">
            {eventDate}
          </p>

          <h1 className="heading-hero text-primary-foreground mb-8">
            Uma plataforma de experiências premium para marcas que desejam estar onde o bem-estar acontece
          </h1>

          <p className="body-elegant text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            O al mare é uma experiência exclusiva de autocuidado e celebração feminina
            a bordo do Atlantis Grand — um cenário extraordinário para ativações de marca
            com sofisticação, presença e conexão real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
              Ative sua marca no evento
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-premium border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Saiba mais
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70">
            {eventBadges.map((badge) => (
              <span key={badge} className="body-small border border-primary-foreground/20 px-4 py-2 rounded-sm">
                {badge}
              </span>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === current ? "bg-champagne w-6" : "bg-primary-foreground/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;