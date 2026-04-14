import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import eventYogaDeck from "@/assets/event-yoga-deck.jpg";
import eventGroupYoga from "@/assets/event-group-yoga.jpg";
import eventYogaPose from "@/assets/event-yoga-pose.jpg";
import eventConnection from "@/assets/event-connection.jpg";
import eventSensorial from "@/assets/event-sensorial.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import eventJoy from "@/assets/event-joy.jpg";

/** Array de fotos do evento — edite aqui para adicionar/remover imagens */
const eventGallery = [
  { src: eventYogaDeck, alt: "Conversa e conexão entre participantes no deck" },
  { src: eventGroupYoga, alt: "Grupo de mulheres praticando yoga a bordo" },
  { src: eventConnection, alt: "Momento de carinho e conexão entre participantes" },
  { src: eventYogaPose, alt: "Prática de yoga com energia e movimento" },
  { src: eventSensorial, alt: "Celebração com taças e vista para o mar" },
  { src: eventCelebration, alt: "Detalhe sensorial com flores no cabelo" },
  { src: eventJoy, alt: "Alegria e celebração feminina a bordo" },
];

const AUTOPLAY_INTERVAL = 5000;

const EditorialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Sync selected index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={emblaRef} className="overflow-hidden rounded-sm">
        <div className="flex">
          {eventGallery.map((photo, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4 first:pl-0"
            >
              <div className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows — visible on hover (desktop) */}
      <button
        onClick={scrollPrev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        } hover:bg-background`}
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        } hover:bg-background`}
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {eventGallery.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`rounded-full transition-all duration-500 ${
              i === selectedIndex
                ? "w-5 h-1.5 bg-champagne"
                : "w-1.5 h-1.5 bg-muted-foreground/30"
            }`}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorialCarousel;
