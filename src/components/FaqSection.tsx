import { useInView } from "@/hooks/use-in-view";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Onde acontece o evento?", a: "Na Marina da Glória — Orla B, com embarque para o Atlantis Grand, o maior iate catamarã da América Latina." },
  { q: "O que é o al mare?", a: "Uma plataforma de experiências premium femininas que une autocuidado, bem-estar e ativação de marcas em um cenário exclusivo." },
  { q: "O que está incluso na experiência?", a: "A experiência contempla yoga, recovery, funcional, DJ, navegação, curadoria, A&B, bombeiro e tripulação de ponta." },
  { q: "Como posso ativar minha marca no evento?", a: "Entre em contato pelo WhatsApp no número (11) 98777-4043 para conhecer as opções de ativação e patrocínio." },
  { q: "As vagas para marcas são limitadas?", a: "Sim. Trabalhamos com um número reduzido de parceiros para manter a exclusividade e qualidade da experiência." },
  { q: "Quem idealiza o evento?", a: "O al mare é uma idealização da Viitayoga em parceria com o Atlantis Grand." },
];

const FaqSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="section-padding bg-background">
      <div ref={ref} className={`container-premium max-w-3xl transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="label-caps text-champagne mb-4">Dúvidas</p>
          <h2 className="heading-section text-foreground">Perguntas frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="body-elegant text-muted-foreground pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
