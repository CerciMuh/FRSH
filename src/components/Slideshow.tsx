
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
import { Leaf, Zap, Info, ChevronDown } from "lucide-react";

const Slideshow = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Track mouse position for parallax effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
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
    <section 
      id="gallery" 
      className="section-padding bg-frsh-cream relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background decorative elements */}
      <div 
        className="absolute -left-20 -top-20 w-40 h-40 bg-frsh-yellow/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute right-10 bottom-10 w-60 h-60 bg-frsh-green/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x / 80}px, ${-mousePosition.y / 80}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-frsh-cream-darker rounded-full blur-2xl opacity-60 animate-float"></div>
      
      <div id="gallery-section" className="container mx-auto relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4 relative">
            <h2 className="section-title mb-0 relative z-10">Our Gallery</h2>
            <div 
              className="absolute bottom-0 left-0 h-3 bg-frsh-yellow/30 w-full -z-10 transform origin-left"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 1s ease-out 0.5s'
              }}
            ></div>
          </div>
          <p className="section-subtitle hover:text-frsh-green-light transition-colors duration-300 cursor-default">
            Experience the freshness through our lens
          </p>
        </div>

        <div 
          className={`md:px-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Carousel setApi={setEmblaApi} className="overflow-visible">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="flex justify-center">
                  <div 
                    className="w-full h-full p-2 transition-all duration-500 relative group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isHovered === index ? 'perspective(1000px) rotateY(3deg)' : 'perspective(1000px) rotateY(0deg)',
                    }}
                  >
                    <div 
                      className="relative cursor-pointer overflow-hidden rounded-lg"
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      {/* Main image with parallax effect */}
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={slide.image} 
                          alt={slide.alt} 
                          className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[500px] transition-transform duration-700" 
                          style={{
                            transform: isHovered === index ? 'scale(1.05)' : 'scale(1)',
                          }}
                        />
                      </div>
                      
                      {/* Interactive overlay */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-t from-frsh-green/90 via-frsh-green/40 to-transparent rounded-lg flex flex-col justify-end p-6 transition-all duration-500 ${
                          isHovered === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <h3 
                            className="text-frsh-cream text-xl md:text-2xl font-semibold mb-2 transform transition-transform duration-500"
                            style={{
                              transform: isHovered === index ? 'translateY(0)' : 'translateY(100%)',
                              transitionDelay: '0.1s'
                            }}
                          >
                            {slide.caption}
                          </h3>
                        </div>
                        
                        <div className="overflow-hidden">
                          <p 
                            className="text-frsh-cream/90 text-sm md:text-base transform transition-transform duration-500"
                            style={{
                              transform: isHovered === index ? 'translateY(0)' : 'translateY(100%)',
                              transitionDelay: '0.2s'
                            }}
                          >
                            {slide.description}
                          </p>
                        </div>
                        
                        {index === 0 && (
                          <div 
                            className="flex gap-3 mt-4 transform transition-all duration-500"
                            style={{
                              opacity: isHovered === index ? 1 : 0,
                              transform: isHovered === index ? 'translateY(0)' : 'translateY(20px)',
                              transitionDelay: '0.3s'
                            }}
                          >
                            <span className="bg-frsh-yellow/20 text-frsh-yellow text-xs py-1 px-3 rounded-full flex items-center gap-1 hover:bg-frsh-yellow hover:text-frsh-gray-dark transition-colors">
                              <Leaf className="w-3 h-3" /> Organic
                            </span>
                            <span className="bg-frsh-cream/20 text-frsh-cream text-xs py-1 px-3 rounded-full flex items-center gap-1 hover:bg-frsh-cream hover:text-frsh-gray-dark transition-colors">
                              <Zap className="w-3 h-3" /> Fresh
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Floating active indicator */}
                      {activeIndex === index && (
                        <div className="absolute top-4 right-4 bg-frsh-yellow rounded-full p-1 shadow-lg animate-pulse-soft">
                          <div className="w-1.5 h-1.5 rounded-full bg-frsh-gray-dark"></div>
                        </div>
                      )}

                      {/* Info button - only shows on mobile/touch devices */}
                      <HoverCard openDelay={0} closeDelay={0}>
                        <HoverCardTrigger asChild>
                          <button className="absolute bottom-4 right-4 bg-frsh-cream rounded-full p-2 shadow-lg md:hidden hover:bg-frsh-yellow transition-colors group">
                            <Info className="w-4 h-4 text-frsh-green group-hover:text-frsh-gray-dark transition-colors" />
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
            
            {/* Enhanced control buttons */}
            <CarouselPrevious className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform -left-4 md:-left-6 hover:shadow-[0_0_15px_rgba(255,196,0,0.4)]"/>
            <CarouselNext className="bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light transform hover:scale-110 transition-transform -right-4 md:-right-6 hover:shadow-[0_0_15px_rgba(255,196,0,0.4)]"/>
          </Carousel>
          
          {/* Interactive dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-500 flex items-center group ${
                  activeIndex === index 
                    ? 'bg-frsh-yellow px-3 py-1 rounded-full shadow-md' 
                    : 'bg-frsh-green/30 w-3 h-3 rounded-full hover:bg-frsh-green/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {activeIndex === index ? (
                  <div className="flex items-center">
                    <span className="text-xs text-frsh-gray-dark font-medium px-1 animate-fade-in">
                      {index + 1}
                    </span>
                    <ChevronDown className="w-3 h-3 text-frsh-gray-dark animate-bounce-soft" />
                  </div>
                ) : (
                  <span className="absolute opacity-0 group-hover:opacity-100 text-xs text-frsh-cream -mt-6 left-1/2 -translate-x-1/2 transition-opacity whitespace-nowrap bg-frsh-green/70 px-1 rounded">{index + 1}</span>
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
