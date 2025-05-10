import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    image: "/lovable-uploads/HL COVER 3.jpg",
    title: "Eat Smart.",
    subtitle: "Live Fresh.",
  },
  {
    id: 2,
    image: "/lovable-uploads/HL COVER 2.jpg",
    title: "Healthy Food.",
    subtitle: "Happy Mood.",
  },
  {
    id: 3,
    image: "/lovable-uploads/HL COVER 6.jpg",
    title: "Fresh Meals.",
    subtitle: "Fresher You.",
  },
  {
    id: 4,
    image: "/lovable-uploads/HL COVER 5.jpg",
    title: "Fresh Meals.",
    subtitle: "Fresher You.",
  },
];

const Hero = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateIndex);
    updateIndex();

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      carouselApi?.off("select", updateIndex);
      clearInterval(interval);
    };
  }, [carouselApi]);

  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">
      {/* Carousel Background */}
      <Carousel setApi={setCarouselApi} className="absolute inset-0 z-0">
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full h-[92vh] md:h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-110 md:scale-100"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 transition-all duration-700 ease-in-out">
        <h1 className="text-[clamp(1.75rem,4vw,4rem)] md:text-[clamp(2.5rem,6vw,4rem)] font-bold mb-1 md:mb-4 leading-tight drop-shadow-xl animate-fade-in-up">
          {heroSlides[activeIndex].title}
          <br />
          <span className="text-yellow-300 inline-flex items-center gap-1 md:gap-2">
            {heroSlides[activeIndex].subtitle}
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 animate-pulse" />
          </span>
        </h1>

        <p className="mt-1 md:mt-4 text-[clamp(0.75rem,1.25vw,1.25rem)] text-white/90 max-w-xl drop-shadow animate-fade-in-up">
          Chef-crafted meals, delivered fresh to your door. Designed to keep you healthy, happy, and full of flavor.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-3 md:mt-6">
          <a
            href="https://apps.apple.com/app/id6742881525"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-frsh-yellow text-frsh-gray-dark font-semibold rounded-lg shadow hover:bg-yellow-400 transition animate-fade-in-up text-sm md:text-base"
          >
            Try Us Out
          </a>
          <a
            href="https://wa.me/966500961496"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-white text-frsh-green font-semibold rounded-lg shadow hover:bg-white/90 transition animate-fade-in-up text-sm md:text-base"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-14 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-30">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => carouselApi?.scrollTo(idx)}
            className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition ${
              idx === activeIndex ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Bouncing Arrow */}
      <button
        onClick={() => {
          const el = document.getElementById("about");
          if (el) {
            const yOffset = -20; // Add a small offset
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        className="absolute bottom-12 md:bottom-6 left-1/2 -translate-x-1/2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-8 md:w-8 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
 