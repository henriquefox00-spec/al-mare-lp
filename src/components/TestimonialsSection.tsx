import { useInView } from "@/hooks/use-in-view";

const quotes = [
  "Você sai diferente de como entrou.",
  "O corpo desacelera, a mente clareia e o momento permanece.",
  "Não é apenas presença física. É reconexão.",
  "Uma memória que continua ecoando depois do mar.",
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-sand">
      <div ref={ref} className="container-premium">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">O que permanece</p>
          <h2 className="heading-section text-foreground">O que permanece depois da experiência</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`text-center py-10 px-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-5xl text-champagne leading-none">"</span>
              <p className="font-serif text-xl text-foreground italic mt-2">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
