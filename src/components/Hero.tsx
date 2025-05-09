
import { Button } from "@/components/ui/button";
import { ChefHat, ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  const heroSlogans = [
    { title: "Eat Smart.", subtitle: "Live Fresh." },
    { title: "Healthy Food.", subtitle: "Happy Mood." },
    { title: "Fresh Meals.", subtitle: "Fresher You." }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    // Auto-rotate slides every 5 seconds
    const slideInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlogans.length);
    }, 5000);

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive video background inspired by Blank Street */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay for readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-frsh-cream/90 via-frsh-cream/70 to-frsh-cream/90 z-10"
          style={{
            backgroundPosition: isHovering ? `calc(50% + ${mousePosition.x / 50}px) calc(50% + ${mousePosition.y / 50}px)` : '50% 50%',
          }}
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-frsh-yellow/20 blur-2xl animate-pulse-soft z-0"></div>
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-frsh-green/10 blur-3xl animate-pulse-soft z-0" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] right-[15%] w-24 h-24 rounded-full bg-frsh-yellow/30 blur-xl animate-float z-0"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6 z-20 relative">
        <div className={`flex flex-col justify-center order-2 md:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-frsh-green/10 px-4 py-2 rounded-full mb-4 transform hover:scale-110 transition-transform hover:bg-frsh-green/20">
            <div className="flex items-center gap-2">
              <ChefHat className="text-frsh-green w-5 h-5" />
              <span className="text-frsh-green font-medium text-sm">Cloud Kitchen Subscription</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden h-[160px]" ref={slidesRef}>
            {heroSlogans.map((slogan, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  activeSlide === index 
                    ? 'opacity-100 translate-y-0 transform-none' 
                    : 'opacity-0 translate-y-20 invisible'
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-frsh-green mb-6 transition-colors duration-300 cursor-default">
                  {slogan.title} <br />
                  <span className="relative inline-block">
                    <span className="text-frsh-green-light hover:text-frsh-yellow transition-colors duration-300">{slogan.subtitle}</span>
                    <Sparkles className="absolute -top-6 -right-8 text-frsh-yellow w-6 h-6 animate-pulse" />
                  </span>
                </h1>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2 mb-6">
            {heroSlogans.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'w-8 bg-frsh-yellow' 
                    : 'bg-frsh-green/30 hover:bg-frsh-green/50'
                }`}
                aria-label={`Switch to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-lg md:text-xl text-frsh-gray mb-8 max-w-md leading-relaxed">
            Healthy, chef-crafted meals delivered to your door. 
            Experience the convenience of our flexible meal subscription service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark text-lg py-6 px-8 transform transition-all hover:scale-105 hover:shadow-[0_8px_25px_-5px_rgba(255,196,0,0.5)] relative overflow-hidden">
              <span className="relative z-10">Start My Plan</span>
              <span className="absolute inset-0 bg-gradient-to-r from-frsh-yellow-light to-frsh-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button variant="outline" className="group border-frsh-green text-frsh-green hover:bg-frsh-green hover:text-frsh-cream text-lg py-6 px-8 transition-all hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">View Menu</span>
              <span className="absolute inset-0 bg-frsh-green scale-x-0 group-hover:scale-100 origin-left transition-transform duration-300"></span>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["M", "A", "S"].map((letter, index) => (
                <div 
                  key={letter}
                  className="w-10 h-10 rounded-full bg-frsh-cream-darker border-2 border-frsh-cream flex items-center justify-center text-frsh-green font-semibold hover:scale-125 transition-transform hover:z-10"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="group cursor-pointer">
              <p className="text-frsh-green font-medium">Trusted by</p>
              <p className="text-frsh-gray text-sm group-hover:text-frsh-yellow transition-colors">5000+ happy customers</p>
            </div>
          </div>
        </div>

        <div className={`relative order-1 md:order-2 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          {/* Floating circular decorative elements inspired by Jahez */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full absolute">
            <div className="w-full h-full bg-frsh-green rounded-full opacity-5 animate-pulse"></div>
            <div className="w-full h-full bg-frsh-yellow rounded-full opacity-5 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
          </div>
          
          {/* Main image with hover effects inspired by Ask Italian */}
          <div className="relative z-10 perspective-1000 group">
            <img 
              src="/lovable-uploads/Hero-frsh.png" 
              alt="Fresh, healthy meals"
              className="w-full h-auto max-w-md rounded-lg shadow-2xl hover:shadow-[0_20px_80px_-20px_rgba(8,70,60,0.3)] transition-all duration-500 transform group-hover:scale-[1.02] group-hover:rotate-y-5"
            />
            
            {/* Animated plate accent inspired by Leon */}
            <div className="hidden md:block absolute -left-6 top-1/3 w-16 h-16 rounded-full bg-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
              <div className="w-full h-full rounded-full bg-frsh-yellow flex items-center justify-center overflow-hidden">
                <div className="animate-spin-slow w-12 h-12 rounded-full border-4 border-dashed border-frsh-cream"></div>
              </div>
            </div>
            
            {/* Interactive promo tag */}
            <div className="absolute -bottom-4 right-4 md:-right-4 bg-frsh-cream shadow-lg rounded-lg p-3 z-20 transform hover:scale-110 transition-transform duration-300 hover:shadow-xl">
              <div className="bg-frsh-yellow text-frsh-gray-dark p-2 rounded-md relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs opacity-80">On your first order</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-frsh-yellow-light to-frsh-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inspired by Zambrero's scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
  <a href="#about" className="group flex items-center flex-col cursor-pointer z-40">

          <p className="text-frsh-green mb-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all">Discover More</p>
          <div className="w-10 h-10 rounded-full border-2 border-frsh-green flex items-center justify-center group-hover:bg-frsh-green transition-colors duration-300">
            <ChevronDown className="w-5 h-5 text-frsh-green group-hover:text-frsh-cream transition-colors duration-300 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
