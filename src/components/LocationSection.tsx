import atlantisImage from "@/assets/atlantis-grand.jpg";
import { useInView } from "@/hooks/use-in-view";
import { MapPin, Anchor } from "lucide-react";

const LocationSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="local" className="section-padding bg-background">
      <div ref={ref} className="container-premium">
        <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">O cenário</p>
          <h2 className="heading-section text-foreground">Um cenário à altura da experiência</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={atlantisImage} alt="Atlantis Grand — o maior iate catamarã da América Latina" className="rounded-sm w-full h-80 md:h-[480px] object-cover" loading="lazy" />
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="body-elegant text-foreground mb-6">
              A experiência acontece a bordo do <strong>Atlantis Grand</strong>, o maior iate catamarã
              da América Latina — um espaço que eleva cada momento com imponência, beleza e
              atmosfera absolutamente memorável.
            </p>
            <p className="body-elegant text-muted-foreground mb-8">
              Saída pela Marina da Glória, na Orla B, em um ambiente onde mar, design, luz natural
              e bem-estar se encontram para criar uma celebração feminina rara e sofisticada.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-champagne flex-shrink-0" strokeWidth={1.5} />
                <span className="body-small text-foreground">Marina da Glória — Orla B</span>
              </div>
              <div className="flex items-center gap-3">
                <Anchor className="w-5 h-5 text-champagne flex-shrink-0" strokeWidth={1.5} />
                <span className="body-small text-foreground">Embarque pontual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
