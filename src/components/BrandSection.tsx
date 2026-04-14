import { useInView } from "@/hooks/use-in-view";
import { WHATSAPP_URL } from "@/lib/constants";
import { Eye, Sparkles, Users, Camera, Award, Handshake } from "lucide-react";

const values = [
  { icon: Eye, label: "Visibilidade qualificada" },
  { icon: Sparkles, label: "Associação a um ambiente sofisticado" },
  { icon: Users, label: "Ativação elegante, não invasiva" },
  { icon: Camera, label: "Conteúdo orgânico de alto valor" },
  { icon: Award, label: "Autoridade no universo feminino premium" },
  { icon: Handshake, label: "Networking com marcas alinhadas" },
];

const BrandSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding gradient-teal">
      <div ref={ref} className="container-premium">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">Para marcas</p>
          <h2 className="heading-section text-primary-foreground mb-6">
            Para marcas que desejam estar onde a experiência acontece de verdade
          </h2>
          <p className="body-elegant text-primary-foreground/80 mb-12">
            Em um mercado saturado de exposição vazia, o al mare cria encontros onde marcas
            são vividas com elegância, contexto e conexão emocional real.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {values.map((v) => (
            <div key={v.label} className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm px-5 py-4">
              <v.icon className="w-5 h-5 text-champagne flex-shrink-0" strokeWidth={1.5} />
              <span className="body-small text-primary-foreground">{v.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-premium border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            Ative sua marca no evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
