
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Leaf, Zap, Info } from "lucide-react";

const Slideshow = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      image: "public/lovable-uploads/bilingual-logo-fresh.png",
      alt: "bilingual logo of FRSH",
      caption: "The FRSH Brand - Bilingual Excellence",
      description: "Our bilingual logo represents our commitment to serving diverse communities with fresh, healthy meals."
    },
    {
      id: 2,
      image: "public/lovable-uploads/frsh-picture-landing-page.png",
      alt: "frsh-picture-landing-page.png",
      caption: "Fresh Ingredients, Thoughtful Preparation",
      description: "Every meal crafted with care and attention to detail, bringing restaurant quality to your doorstep."
    },
    {
      id: 3,
      image: "public/lovable-uploads/f997509f-7b77-4263-b584-45f44cd3e093.png",
      alt: "FRSH freshness with a twist delivery truck",
      caption: "Delivery You Can Count On",
      description: "Our fleet ensures your meals arrive fresh and on time, every time."
    },
    {
      id: 4,
      image: "public/lovable-uploads/deeb5480-297e-4df9-9c0f-cd6b128a7494.png",
      alt: "FRSH mission and vision",
      caption: "Our Guiding Principles",
      description: "The vision and mission that drives everything we do at FRSH."
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
    <section id="gallery" className="section-padding bg-frsh-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 -top-20 w-40 h-40 bg-frsh-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-10 w-60 h-60 bg-frsh-green/10 rounded-full blur-3xl"></div>
      
      <div id="gallery-section" className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle hover:text-frsh-green-light transition-colors duration-300 cursor-default">
            Experience the freshness through our lens
          </p>
        </div>

        <div className={`md:px-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Carousel setApi={setEmblaApi}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="flex justify-center">
                  <div className="w-full h-full p-2 transition-all duration-500 relative group">
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.alt} 
                        className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[500px] group-hover:shadow-xl transition-all transform group-hover:scale-[1.01] duration-500" 
                      />
                      
                      {/* Interactive overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-frsh-green/80 via-transparent to-transparent rounded-lg flex flex-col justify-end p-6 transition-opacity duration-500 ${isHovered === index ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="text-frsh-cream text-xl md:text-2xl font-semibold mb-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">{slide.caption}</h3>
                        <p className="text-frsh-cream/90 text-sm md:text-base transform translate-y-4 transition-transform duration-500 delay-100 group-hover:translate-y-0">{slide.description}</p>
                        
                        {index === 0 && (
                          <div className="flex gap-3 mt-4 transform translate-y-4 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                            <span className="bg-frsh-yellow/20 text-frsh-yellow text-xs py-1 px-3 rounded-full flex items-center gap-1">
                              <Leaf className="w-3 h-3" /> Organic
                            </span>
                            <span className="bg-frsh-cream/20 text-frsh-cream text-xs py-1 px-3 rounded-full flex items-center gap-1">
                              <Zap className="w-3 h-3" /> Fresh
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Info button - only shows on mobile/touch devices */}
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button className="absolute bottom-4 right-4 bg-frsh-cream rounded-full p-2 shadow-lg md:hidden">
                            <Info className="w-4 h-4 text-frsh-green" />
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-frsh-cream border-frsh-green/20">
                          <h4 className="font-medium text-frsh-green">{slide.caption}</h4>
                          <p className="text-sm text-frsh-gray">{slide.description}</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform"/>
            <CarouselNext className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform"/>
          </Carousel>
          
          {/* Interactive dot indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 flex items-center ${
                  activeIndex === index 
                    ? 'bg-frsh-yellow px-3 py-1 rounded-full' 
                    : 'bg-frsh-green/30 w-3 h-3 rounded-full hover:bg-frsh-green/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {activeIndex === index && (
                  <span className="text-xs text-frsh-gray-dark font-medium px-1 animate-fade-in">
                    {index + 1}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
