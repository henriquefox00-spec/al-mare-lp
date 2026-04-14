import { useInView } from "@/hooks/use-in-view";
import { WHATSAPP_URL, eventDate } from "@/lib/constants";

const FinalCtaSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding gradient-teal">
      <div ref={ref} className={`container-premium max-w-3xl text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="label-caps text-champagne mb-6">{eventDate}</p>
        <h2 className="heading-section text-primary-foreground mb-6">
          Ative sua marca em uma experiência premium feminina
        </h2>
        <p className="body-elegant text-primary-foreground/80 mb-10">
          O al mare é uma plataforma de ativação de marcas em um cenário de bem-estar,
          sofisticação e conexão real com o público feminino premium.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 mb-10">
          {[
            eventDate,
            "Local: Marina da Glória — Orla B",
            "Embarque: pontual",
          ].map((info) => (
            <span key={info} className="body-small">{info}</span>
          ))}
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium bg-champagne text-foreground hover:opacity-90 mb-6 inline-block">
          Ative sua marca no evento
        </a>

        <p className="body-small text-primary-foreground/50 mt-4">
          Vagas para marcas limitadas. Entre em contato para mais informações.
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;