import { useInView } from "@/hooks/use-in-view";
import EditorialCarousel from "@/components/EditorialCarousel";

const EditorialSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-premium transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        
        <div className="text-center mb-16">
          <p className="label-caps text-champagne mb-4">al mare</p>
          <h2 className="heading-section text-foreground mb-6">
            Mais do que um evento.<br />Uma experiência para ser sentida.
          </h2>
          <div className="divider-champagne my-8" />
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
            O al mare nasce do encontro entre autocuidado, estética refinada e experiências
            com significado. Cada detalhe é pensado para transformar presença em memória,
            conexão em sentimento e bem-estar em algo que permanece mesmo depois do desembarque.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <EditorialCarousel />

          <div className="space-y-8">
            {[
            { title: "Curadoria impecável", desc: "Cada elemento é escolhido com intenção, do movimento à gastronomia." },
            { title: "Estética e sensorialidade", desc: "Uma atmosfera criada para envolver todos os sentidos com beleza e significado." },
            { title: "Presença feminina premium", desc: "Um encontro de mulheres que valorizam autocuidado com profundidade." },
            { title: "Conexão real além do digital", desc: "Experiências que criam vínculos genuínos, não apenas conteúdo." }].
            map((item) =>
            <div key={item.title} className="border-l-2 border-champagne pl-6">
                <h3 className="heading-subsection text-foreground mb-2 text-xl">{item.title}</h3>
                <p className="body-small text-muted-foreground">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default EditorialSection;