import { useInView } from "@/hooks/use-in-view";
import { Waves, Sun, Utensils, Heart, Camera, Dumbbell } from "lucide-react";

const experiences = [
  { icon: Dumbbell, title: "Yoga & Funcional", desc: "Movimento consciente para despertar o corpo, ativar a energia e iniciar o dia em presença." },
  { icon: Waves, title: "Recovery Experience", desc: "Um momento pensado para regenerar, desacelerar e devolver equilíbrio ao corpo com sofisticação." },
  { icon: Sun, title: "Sol, mar e conexão", desc: "Uma atmosfera criada para respirar fundo, se reconectar e viver o bem-estar em um cenário extraordinário." },
  { icon: Utensils, title: "Gastronomia exclusiva", desc: "Sabores selecionados para complementar a experiência com leveza, prazer e refinamento." },
  { icon: Heart, title: "Celebração feminina", desc: "Um encontro que honra a potência, a delicadeza e a presença da mulher contemporânea." },
  { icon: Camera, title: "Conteúdo, estética e memória", desc: "Cada momento é pensado para ser vivido intensamente e também lembrado como algo especial." },
];

const ExperienceCards = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="experiencia" className="section-padding bg-sand">
      <div ref={ref} className="container-premium">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">A bordo do Atlantis Grand</p>
          <h2 className="heading-section text-foreground">O que espera por você a bordo</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`card-premium transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <exp.icon className="w-6 h-6 text-champagne mb-6" strokeWidth={1.5} />
              <h3 className="heading-subsection text-foreground mb-3 text-lg">{exp.title}</h3>
              <p className="body-small text-muted-foreground">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;
