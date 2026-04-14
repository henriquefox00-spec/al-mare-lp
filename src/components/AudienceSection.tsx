import { useInView } from "@/hooks/use-in-view";

const AudienceSection = () => {
  const { ref, isInView } = useInView();

  const traits = [
    "Autocuidado com sofisticação",
    "Yoga, movimento e saúde feminina",
    "Experiências imersivas e bem curadas",
    "Estética refinada e lifestyle à beira-mar",
    "Conexão verdadeira, presença e pausa com propósito",
  ];

  return (
    <section id="para-quem" className="section-padding bg-background">
      <div ref={ref} className={`container-premium max-w-3xl text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="label-caps text-champagne mb-4">Para quem é</p>
        <h2 className="heading-section text-foreground mb-8">
          Para mulheres que desejam viver o wellness com profundidade e beleza
        </h2>

        <p className="body-elegant text-muted-foreground mb-10">
          Este encontro foi pensado para quem se identifica com:
        </p>

        <div className="space-y-4 mb-12">
          {traits.map((t) => (
            <div key={t} className="flex items-center gap-4 justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
              <span className="body-elegant text-foreground">{t}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="font-serif text-lg text-muted-foreground italic">
            Se você busca mais do que agenda cheia, ruído digital e convites comuns,
            talvez este seja o seu lugar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
