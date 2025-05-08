
import { Leaf, Star, Heart } from 'lucide-react'; 

const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-frsh-green text-frsh-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center">
                <img 
                  src="public/lovable-uploads/3304c707-00cf-444b-8964-f3c62edfc418.png" 
                  alt="FRSH Logo" 
                  className="w-8 h-8"
                />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Mission</h2>
            <p className="text-frsh-cream/80 italic text-center">
              "We are committed to transforming the way people eat by providing high-quality, 
              balanced, and flavorful meals through a seamless, subscription-based cloud kitchen, 
              by prioritizing fresh ingredients, smart nutrition, and convenience."
            </p>
          </div>

          <div className="p-8 border border-frsh-cream/20 rounded-lg hover:bg-frsh-green-light transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-frsh-cream/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-frsh-yellow" />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-center">The FRSH Vision</h2>
            <p className="text-frsh-cream/80 italic text-center">
              "To become the go-to healthy kitchen, making fresh, nutritious, and delicious
              meals easily accessible for everyone striving for a better lifestyle."
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-semibold mb-8">Our Philosophy</h2>
            <p className="text-xl italic text-frsh-cream/80 mb-12 max-w-2xl mx-auto">
              "freshness with a twist"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-frsh-green-light rounded-lg">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-frsh-gray-dark" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Quality First</h3>
              <p className="text-frsh-cream/80 text-center">
                We never compromise on the quality of our ingredients or the meals we prepare.
              </p>
            </div>
            
            <div className="p-6 bg-frsh-green-light rounded-lg">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-frsh-gray-dark" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Health Focused</h3>
              <p className="text-frsh-cream/80 text-center">
                Our meals are designed with your wellbeing in mind, balanced and nutritious.
              </p>
            </div>
            
            <div className="p-6 bg-frsh-green-light rounded-lg">
              <div className="w-12 h-12 bg-frsh-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="public/lovable-uploads/3304c707-00cf-444b-8964-f3c62edfc418.png" 
                  alt="FRSH Logo" 
                  className="w-6 h-6"
                />
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
