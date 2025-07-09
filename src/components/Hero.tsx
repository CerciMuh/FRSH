import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
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
    translationKey: "slide1"
  },
  {
    id: 2,
    image: "/lovable-uploads/HL COVER 2.jpg",
    translationKey: "slide2"
  },
  {
    id: 3,
    image: "/lovable-uploads/HL COVER 6.jpg",
    translationKey: "slide3"
  },
  {
    id: 4,
    image: "/lovable-uploads/HL COVER 5.jpg",
    translationKey: "slide4"
  },
];

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    if (!carouselApi) return;

    const updateIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateIndex);
    updateIndex();

    const interval = setInterval(() => {
      if (isRTL) {
        if (carouselApi.canScrollPrev()) {
          carouselApi.scrollPrev();
        } else {
          carouselApi.scrollTo(heroSlides.length - 1);
        }
      } else {
        if (carouselApi.canScrollNext()) {
          carouselApi.scrollNext();
        } else {
          carouselApi.scrollTo(0);
        }
      }
    }, 5000);

    return () => {
      carouselApi?.off("select", updateIndex);
      clearInterval(interval);
    };
  }, [carouselApi, isRTL]);

  // Update scroll direction when language changes
  useEffect(() => {
    if (carouselApi) {
      if (isRTL) {
        carouselApi.scrollTo(heroSlides.length - 1);
      } else {
        carouselApi.scrollTo(0);
      }
    }
  }, [isRTL, carouselApi]);

  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">
      {/* Carousel Background */}
      <Carousel 
        setApi={setCarouselApi} 
        className="absolute inset-0 z-0"
        opts={{
          direction: isRTL ? 'rtl' : 'ltr'
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full h-[92vh] md:h-screen">
              <img
                src={slide.image}
                alt={t(`hero.slides.${slide.translationKey}.title`)}
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
          {t(`hero.slides.${heroSlides[activeIndex].translationKey}.title`)}
          <br />
          <span className="text-yellow-300 inline-flex items-center gap-1 md:gap-2">
            {t(`hero.slides.${heroSlides[activeIndex].translationKey}.subtitle`)}
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 animate-pulse" />
          </span>
        </h1>

        <p className="mt-1 md:mt-4 text-[clamp(0.75rem,1.25vw,1.25rem)] text-white/90 max-w-xl drop-shadow animate-fade-in-up">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3 mt-3 md:mt-6">
  <a
    href="https://apps.apple.com/app/id6742881525"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition animate-fade-in-up text-sm md:text-base"
  >
    {t('hero.downloadOnAppStore') || "Download on App Store"}
  </a>

  <a
  href="https://play.google.com/store/apps/details?id=com.yumealz.frsh&hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 md:px-6 py-2 md:py-3 bg-frsh-green text-white font-semibold rounded-lg shadow hover:bg-frsh-green-light transition animate-fade-in-up text-sm md:text-base"
>
  {t('hero.downloadOnGooglePlay') || "Download on Google Play"}
</a>



  <a
    href="https://wa.me/966500961496"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 md:px-6 py-2 md:py-3 bg-white text-frsh-green font-semibold rounded-lg shadow hover:bg-white/90 transition animate-fade-in-up text-sm md:text-base"
  >
    {t('hero.whatsappUs')}
  </a>
</div>

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
          strokeWidth={6}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
