
import { Clock, Hand, Heart, Leaf, Star, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Vision = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  
  // Using useRef properly with the correct type
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  // Observer setup for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (philosophyRef.current) observer.observe(philosophyRef.current);
    
    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (philosophyRef.current) observer.unobserve(philosophyRef.current);
    };
  }, []);

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
    <section id="vision" className="section-padding bg-white text-frsh-green relative overflow-hidden">
      {/* Subtle background effect inspired by Blank Street */}
      <div className="absolute inset-0 bg-gradient-to-b from-frsh-cream/50 to-white pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={missionRef}
            className="p-6 rounded-lg hover:bg-frsh-cream/10 transition-all duration-500 transform cursor-pointer relative overflow-hidden fade-in-on-scroll"
            onClick={() => togglePanel('mission')}
            onMouseEnter={() => setHovered('mission')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-5">
                <div className="w-14 h-14 bg-frsh-green-light/10 rounded-full flex items-center justify-center">
                  <Hand className="w-6 h-6 text-frsh-green transition-transform duration-300" />
                </div>
              </div>
              
              <h2 className="text-2xl font-playfair font-semibold mb-4 text-center">The FRSH Mission</h2>
              
              <Collapsible open={openPanel === 'mission'}>
                <CollapsibleTrigger className="w-full">
                  <p className="text-frsh-gray italic text-center">
                    "We are committed to transforming the way people eat..."
                    <span className="block text-frsh-green-light mt-2 text-sm">
                      {openPanel === 'mission' ? 'Show less' : 'Read more'}
                    </span>
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 bg-frsh-cream/20 p-4 rounded-lg animate-fade-in">
                  <p className="text-frsh-gray italic leading-relaxed">
                    "We are committed to transforming the way people eat by providing high-quality, 
                    balanced, and flavorful meals through a seamless, subscription-based cloud kitchen, 
                    by prioritizing fresh ingredients, smart nutrition, and convenience."
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div 
            ref={visionRef}
            className="p-6 rounded-lg hover:bg-frsh-cream/10 transition-all duration-500 transform cursor-pointer relative overflow-hidden fade-in-on-scroll"
            style={{ transitionDelay: '0.2s' }}
            onClick={() => togglePanel('vision')}
            onMouseEnter={() => setHovered('vision')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-5">
                <div className="w-14 h-14 bg-frsh-green-light/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-frsh-green transition-transform duration-300" />
                </div>
              </div>
              
              <h2 className="text-2xl font-playfair font-semibold mb-4 text-center">The FRSH Vision</h2>
              
              <Collapsible open={openPanel === 'vision'}>
                <CollapsibleTrigger className="w-full">
                  <p className="text-frsh-gray italic text-center">
                    "To become the go-to healthy kitchen..."
                    <span className="block text-frsh-green-light mt-2 text-sm">
                      {openPanel === 'vision' ? 'Show less' : 'Read more'}
                    </span>
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 bg-frsh-cream/20 p-4 rounded-lg animate-fade-in">
                  <p className="text-frsh-gray italic leading-relaxed">
                    "To become the go-to healthy kitchen, making fresh, nutritious, and delicious
                    meals easily accessible for everyone striving for a better lifestyle."
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        <div 
          className="mt-12"
          ref={philosophyRef}
        >
          <div className="text-center mb-8 fade-in-on-scroll">
            <div className="relative inline-block">
              <h2 className="text-2xl font-playfair font-semibold mb-2">
                Our Philosophy
              </h2>
              <Sparkles className="absolute -right-5 -top-3 text-frsh-yellow w-4 h-4 animate-pulse-soft" />
            </div>
            <p className="text-lg italic text-frsh-gray mb-8 max-w-2xl mx-auto">
              "freshness with a twist"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophyItems.map((item, index) => (
              <div 
                key={item.id}
                className="p-5 bg-white shadow-sm border border-frsh-cream/50 rounded-lg transition-all duration-300 hover:shadow-md stagger-children"
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative">
                  <div className="mb-3 mx-auto">
                    <div className="w-10 h-10 bg-frsh-cream rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-5 h-5 text-frsh-green" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2 text-center">{item.title}</h3>
                  <p className="text-frsh-gray text-center text-sm">
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
