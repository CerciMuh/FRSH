import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel";

const Slideshow = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      image: "public/lovable-uploads/bilingual-logo-fresh.png",
      alt: "bilingual logo of FRSH"
    },
    {
      id: 2,
      image: "public/lovable-uploads/frsh-picture-landing-page.png",
      alt: "frsh-picture-landing-page.png"
    },
    {
      id: 3,
      image: "public/lovable-uploads/f997509f-7b77-4263-b584-45f44cd3e093.png",
      alt: "FRSH freshness with a twist delivery truck"
    },
    {
      id: 4,
      image: "public/lovable-uploads/deeb5480-297e-4df9-9c0f-cd6b128a7494.png",
      alt: "FRSH mission and vision"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Sync index with Embla
  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateIndex);
    updateIndex();

    return () => {
      emblaApi.off("select", updateIndex);
    };
  }, [emblaApi]);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi?.scrollTo(0); // loop
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="gallery" className="section-padding bg-frsh-cream">
      <div id="gallery-section" className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle hover:text-frsh-green-light transition-colors duration-300 cursor-default">
            Experience the freshness through our lens
          </p>
        </div>

        <div className={`md:px-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Carousel setApi={setEmblaApi}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="flex justify-center">
                  <div className="w-full h-full p-2 transition-all duration-500">
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[500px] hover:shadow-xl transition-all transform hover:scale-[1.01] duration-300" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform"/>
            <CarouselNext className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform"/>
          </Carousel>
          
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-frsh-yellow w-6' : 'bg-frsh-green/30'}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
