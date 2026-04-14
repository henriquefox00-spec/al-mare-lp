import { useInView } from "@/hooks/use-in-view";
import { Shirt, Waves, Clock } from "lucide-react";
import aboardImage from "@/assets/aboard-experience.jpg";

const items = [
  { icon: Shirt, title: "Traje leve", desc: "Para acompanhar a proposta do encontro com conforto e elegância." },
  { icon: Waves, title: "Leve seu biquíni", desc: "Para o momento de recovery a bordo." },
  { icon: Clock, title: "Embarque pontual", desc: "Para que toda a programação aconteça com fluidez." },
];

const DressCodeSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-sand">
      <div ref={ref} className="container-premium">
        <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">Orientações</p>
          <h2 className="heading-section text-foreground">Como chegar para viver a experiência</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          <div className="grid gap-6">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`text-center md:text-left card-premium transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-8 h-8 text-champagne mx-auto md:mx-0 mb-4" strokeWidth={1.2} />
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="body-small text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={aboardImage}
                alt="Experiência a bordo do al mare"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;