
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slideshow = () => {
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

  return (
    <section id="gallery" className="section-padding bg-frsh-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Experience the freshness through our lens
          </p>
        </div>

        <div className="md:px-20">
          <Carousel className="relative">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id} className="flex justify-center">
                  <div className="w-full h-full p-2">
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[500px]" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light"/>
            <CarouselNext className="-right-4 md:-right-12 bg-frsh-yellow text-frsh-gray-dark hover:bg-frsh-yellow-light"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
