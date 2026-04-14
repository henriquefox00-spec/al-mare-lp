import { useInView } from "@/hooks/use-in-view";

const PartnersSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-sand">
      <div ref={ref} className={`container-premium text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="label-caps text-champagne mb-4">Credibilidade</p>
        <h2 className="heading-section text-foreground mb-6">
          Uma experiência assinada por encontros de excelência
        </h2>
        <div className="divider-champagne my-8" />
        <p className="body-elegant text-muted-foreground max-w-2xl mx-auto mb-12">
          O al mare reúne marcas, estéticas e experiências que compartilham o mesmo compromisso
          com bem-estar, sofisticação e presença.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="label-caps text-foreground mb-2">Idealização</p>
            <p className="font-serif text-2xl text-foreground">Viitayoga</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="label-caps text-foreground mb-2">Parceiro</p>
            <p className="font-serif text-2xl text-foreground">Atlantis Grand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;