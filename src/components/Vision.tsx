
import { Clock, Hand, Heart, Leaf, Star } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Vision = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (id: string) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  return (
    <section id="vision" className="section-padding bg-frsh-green text-frsh-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            className="p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            onClick={() => togglePanel('mission')}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center animate-pulse">
              <Hand className="w-6 h-6 text-frsh-yellow" />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Mission</h2>
            <Collapsible open={openPanel === 'mission'}>
              <CollapsibleTrigger className="w-full">
                <p className="text-frsh-cream/80 italic text-center">
                  "We are committed to transforming the way people eat..."
                  <span className="block text-frsh-yellow mt-2 text-sm">{openPanel === 'mission' ? 'Show less' : 'Read more'}</span>
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 bg-frsh-green-light p-4 rounded-lg animate-fade-in">
                <p className="text-frsh-cream/90 italic">
                  "We are committed to transforming the way people eat by providing high-quality, 
                  balanced, and flavorful meals through a seamless, subscription-based cloud kitchen, 
                  by prioritizing fresh ingredients, smart nutrition, and convenience."
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div 
            className="p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            onClick={() => togglePanel('vision')}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center animate-pulse">
                <Leaf className="w-8 h-8 text-frsh-yellow" />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Vision</h2>
            <Collapsible open={openPanel === 'vision'}>
              <CollapsibleTrigger className="w-full">
                <p className="text-frsh-cream/80 italic text-center">
                  "To become the go-to healthy kitchen..."
                  <span className="block text-frsh-yellow mt-2 text-sm">{openPanel === 'vision' ? 'Show less' : 'Read more'}</span>
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 bg-frsh-green-light p-4 rounded-lg animate-fade-in">
                <p className="text-frsh-cream/90 italic">
                  "To become the go-to healthy kitchen, making fresh, nutritious, and delicious
                  meals easily accessible for everyone striving for a better lifestyle."
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-semibold mb-8 transform hover:scale-105 transition-transform cursor-default">Our Philosophy</h2>
            <p className="text-xl italic text-frsh-cream/80 mb-12 max-w-2xl mx-auto hover:text-frsh-yellow transition-colors duration-300">
              "freshness with a twist"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-frsh-green-light rounded-lg transform hover:scale-105 transition-all hover:shadow-xl duration-300">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Star className="w-6 h-6 text-frsh-gray-dark" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Quality First</h3>
              <p className="text-frsh-cream/80 text-center">
                We never compromise on the quality of our ingredients or the meals we prepare.
              </p>
            </div>
            
            <div className="p-6 bg-frsh-green-light rounded-lg transform hover:scale-105 transition-all hover:shadow-xl duration-300">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Heart className="w-6 h-6 text-frsh-gray-dark" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Health Focused</h3>
              <p className="text-frsh-cream/80 text-center">
                Our meals are designed with your wellbeing in mind, balanced and nutritious.
              </p>
            </div>
            
            <div className="p-6 bg-frsh-green-light rounded-lg transform hover:scale-105 transition-all hover:shadow-xl duration-300">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Clock className="w-6 h-6 text-frsh-gray-dark" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Convenience</h3>
              <p className="text-frsh-cream/80 text-center">
                We bring freshness to your doorstep, making healthy eating simple and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
