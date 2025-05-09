
import { Clock, Hand, Heart, Leaf, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollObserver } from '@/utils/useScrollObserver';

const Vision = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  
  const missionRef = useScrollObserver();
  const visionRef = useScrollObserver();
  const philosophyRef = useScrollObserver();

  const togglePanel = (id: string) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  const philosophyItems = [
    {
      id: 'quality',
      icon: Star,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients or the meals we prepare.",
      color: "bg-frsh-yellow"
    },
    {
      id: 'health',
      icon: Heart,
      title: "Health Focused",
      description: "Our meals are designed with your wellbeing in mind, balanced and nutritious.",
      color: "bg-frsh-yellow"
    },
    {
      id: 'convenience',
      icon: Clock,
      title: "Convenience",
      description: "We bring freshness to your doorstep, making healthy eating simple and accessible.",
      color: "bg-frsh-yellow"
    }
  ];

  return (
    <section id="vision" className="section-padding bg-frsh-green text-frsh-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 bottom-20 w-40 h-40 bg-frsh-cream/5 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute right-10 top-20 w-60 h-60 bg-frsh-yellow/5 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
ref={philosophyRef.ref as React.RefObject<HTMLDivElement>}

            className={`p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-500 transform cursor-pointer relative overflow-hidden ${
              missionRef.isVisible 
                ? 'opacity-100 translate-y-0 shadow-[0_10px_30px_-10px_rgba(245,236,204,0.1)]' 
                : 'opacity-0 translate-y-10'
            }`}
            onClick={() => togglePanel('mission')}
            onMouseEnter={() => setHovered('mission')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background animation */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-frsh-green-light/40 to-transparent opacity-0 transition-opacity duration-500"
              style={{ opacity: hovered === 'mission' ? 1 : 0 }}
            ></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 relative">
                <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center">
                  <Hand className={`w-6 h-6 text-frsh-yellow transition-transform duration-300 ${hovered === 'mission' ? 'scale-125' : ''}`} />
                </div>
                {/* Animated particles */}
                <div 
                  className="absolute w-24 h-24 rounded-full border border-frsh-yellow/20 transition-all duration-700"
                  style={{ 
                    transform: hovered === 'mission' ? 'scale(1.5)' : 'scale(0.8)',
                    opacity: hovered === 'mission' ? 0.2 : 0 
                  }}
                ></div>
              </div>
              
              <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Mission</h2>
              
              <Collapsible open={openPanel === 'mission'}>
                <CollapsibleTrigger className="w-full">
                  <p className="text-frsh-cream/80 italic text-center">
                    "We are committed to transforming the way people eat..."
                    <span className={`block text-frsh-yellow mt-2 text-sm transition-colors ${hovered === 'mission' ? 'text-frsh-cream' : ''}`}>
                      {openPanel === 'mission' ? 'Show less' : 'Read more'}
                    </span>
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 bg-frsh-green-light p-4 rounded-lg animate-fade-in">
                  <p className="text-frsh-cream/90 italic leading-relaxed">
                    "We are committed to transforming the way people eat by providing high-quality, 
                    balanced, and flavorful meals through a seamless, subscription-based cloud kitchen, 
                    by prioritizing fresh ingredients, smart nutrition, and convenience."
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div 
ref={philosophyRef.ref as React.RefObject<HTMLDivElement>}

            className={`p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-500 transform cursor-pointer relative overflow-hidden ${
              visionRef.isVisible 
                ? 'opacity-100 translate-y-0 shadow-[0_10px_30px_-10px_rgba(245,236,204,0.1)]' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
            onClick={() => togglePanel('vision')}
            onMouseEnter={() => setHovered('vision')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background animation */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-frsh-green-light/40 to-transparent opacity-0 transition-opacity duration-500"
              style={{ opacity: hovered === 'vision' ? 1 : 0 }}
            ></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 relative">
                <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center">
                  <Leaf className={`w-8 h-8 text-frsh-yellow transition-transform duration-300 ${hovered === 'vision' ? 'scale-125' : ''}`} />
                </div>
                {/* Animated particles */}
                <div 
                  className="absolute w-24 h-24 rounded-full border border-frsh-yellow/20 transition-all duration-700"
                  style={{ 
                    transform: hovered === 'vision' ? 'scale(1.5)' : 'scale(0.8)',
                    opacity: hovered === 'vision' ? 0.2 : 0 
                  }}
                ></div>
              </div>
              
              <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Vision</h2>
              
              <Collapsible open={openPanel === 'vision'}>
                <CollapsibleTrigger className="w-full">
                  <p className="text-frsh-cream/80 italic text-center">
                    "To become the go-to healthy kitchen..."
                    <span className={`block text-frsh-yellow mt-2 text-sm transition-colors ${hovered === 'vision' ? 'text-frsh-cream' : ''}`}>
                      {openPanel === 'vision' ? 'Show less' : 'Read more'}
                    </span>
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 bg-frsh-green-light p-4 rounded-lg animate-fade-in">
                  <p className="text-frsh-cream/90 italic leading-relaxed">
                    "To become the go-to healthy kitchen, making fresh, nutritious, and delicious
                    meals easily accessible for everyone striving for a better lifestyle."
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        <div 
          className="mt-16"
          ref={philosophyRef.ref as React.RefObject<HTMLDivElement>}
        >
          <div 
            className={`text-center transition-all duration-700 transform ${
              philosophyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-playfair font-semibold mb-2 transform hover:scale-105 transition-transform cursor-default">
                Our Philosophy
              </h2>
              <Sparkles className="absolute -right-6 -top-4 text-frsh-yellow w-5 h-5 animate-pulse-soft" />
            </div>
            <p className="text-xl italic text-frsh-cream/80 mb-12 max-w-2xl mx-auto hover:text-frsh-yellow transition-colors duration-300">
              "freshness with a twist"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, index) => (
              <div 
                key={item.id}
                className={`p-6 bg-frsh-green-light rounded-lg transform hover:scale-105 transition-all hover:shadow-xl duration-500 group cursor-default relative overflow-hidden ${
                  philosophyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background shine effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-frsh-cream/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500"
                  style={{ 
                    backgroundSize: '200% 100%',
                    animation: hovered === item.id ? 'shimmer 2s infinite' : 'none'
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div className="relative mb-4 mx-auto">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto`}>
                      <item.icon className="w-6 h-6 text-frsh-gray-dark" />
                    </div>
                    {/* Animated circles */}
                    <div 
                      className="absolute inset-0 rounded-full border border-frsh-yellow/30 transition-all duration-500"
                      style={{ 
                        transform: hovered === item.id ? 'scale(1.5)' : 'scale(1)',
                        opacity: hovered === item.id ? 0.5 : 0 
                      }}
                    ></div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 text-center">{item.title}</h3>
                  <p className="text-frsh-cream/80 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
