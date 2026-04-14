import { useInView } from "@/hooks/use-in-view";
import { Mic } from "lucide-react";

const timeline = [
  { time: "Início", title: "Embarque e recepção", desc: "Chegada pontual na Marina da Glória — Orla B." },
  { time: "Manhã", title: "Boas-vindas, movimento e ativação", desc: "Yoga & funcional em uma atmosfera leve, elegante e energizante." },
  { time: "Durante", title: "Recovery, conexão e contemplação", desc: "Pausas para respirar, desacelerar e viver o mar com presença." },
  { time: "Talkings", title: "Saúde feminina e espiritualidade contemporânea", desc: "Conversas inspiradoras sobre temas relevantes para a mulher contemporânea (sujeito a alteração conforme a marca convidada)." },
  { time: "Almoço", title: "Gastronomia exclusiva", desc: "Uma experiência de sabor alinhada ao universo premium do evento." },
  { time: "Encerramento", title: "Celebração e memória", desc: "Fechamento da jornada com sensação de presença, renovação e conexão." },
];

const TimelineSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="programacao" className="section-padding bg-background">
      <div ref={ref} className="container-premium">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="label-caps text-champagne mb-4">Programação</p>
          <h2 className="heading-section text-foreground">Uma jornada pensada do início ao fim</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-6 mb-10 last:mb-0 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-champagne flex-shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-2">
                <span className="label-caps text-champagne">{item.time}</span>
                <h3 className="heading-subsection text-foreground text-lg mt-1 mb-1">{item.title}</h3>
                <p className="body-small text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
