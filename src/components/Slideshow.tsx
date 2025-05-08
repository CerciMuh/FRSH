
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
      image: "public/lovable-uploads/37bd0d07-6f66-4041-a8ad-72b49b6daf76.png",
      alt: "FRSH color palette"
    },
    {
      id: 2,
      image: "public/lovable-uploads/d3f97128-32cd-49be-af59-31e31efc40c2.png",
      alt: "FRSH food and mood branding"
    },
    {
      id: 3,
      image: "public/lovable-uploads/f997509f-7b77-4263-b584-45f44cd3e093.png",
      alt: "FRSH freshness with a twist delivery truck"
    },
    {
      id: 4,
      image: "public/lovable-uploads/e1a652f5-35b5-41fb-9f74-c0c4629db7ac.png",
      alt: "FRSH logo variations"
    },
    {
      id: 5,
      image: "public/lovable-uploads/991b9067-fd11-45de-a25a-6317028d9dd3.png",
      alt: "FRSH color codes"
    },
    {
      id: 6,
      image: "public/lovable-uploads/deeb5480-297e-4df9-9c0f-cd6b128a7494.png",
      alt: "FRSH mission and vision"
    },
    {
      id: 7,
      image: "public/lovable-uploads/73a62bf6-e19e-4b3f-b2ba-c364e4027ff6.png", 
      alt: "FRSH light food branding"
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
