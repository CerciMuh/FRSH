
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-frsh-cream to-frsh-cream-darker">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="inline-block bg-frsh-green/10 px-4 py-2 rounded-full mb-4">
            <div className="flex items-center gap-2">
              <ChefHat className="text-frsh-green w-5 h-5" />
              <span className="text-frsh-green font-medium text-sm">Cloud Kitchen Subscription</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-frsh-green mb-6">
            Eat Smart. <br />
            <span className="text-frsh-green-light">Live Fresh.</span>
          </h1>
          <p className="text-lg md:text-xl text-frsh-gray mb-8 max-w-md">
            Healthy, chef-crafted meals delivered to your door. 
            Experience the convenience of our flexible meal subscription service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark text-lg py-6 px-8">
              Start My Plan
            </Button>
            <Button variant="outline" className="border-frsh-green text-frsh-green hover:bg-frsh-green hover:text-frsh-cream text-lg py-6 px-8">
              View Menu
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-frsh-cream-darker border-2 border-frsh-cream flex items-center justify-center text-frsh-green font-semibold">M</div>
              <div className="w-10 h-10 rounded-full bg-frsh-cream-darker border-2 border-frsh-cream flex items-center justify-center text-frsh-green font-semibold">A</div>
              <div className="w-10 h-10 rounded-full bg-frsh-cream-darker border-2 border-frsh-cream flex items-center justify-center text-frsh-green font-semibold">S</div>
            </div>
            <div>
              <p className="text-frsh-green font-medium">Trusted by</p>
              <p className="text-frsh-gray text-sm">5000+ happy customers</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex items-center justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-frsh-green rounded-full absolute opacity-5"></div>
          <img 
            src="public/lovable-uploads/Hero-frsh.png" 
            alt="Fresh, healthy meals"
            className="w-full h-auto max-w-md rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-4 right-4 md:-right-4 bg-frsh-cream shadow-lg rounded-lg p-3 z-20">
            <div className="bg-frsh-yellow text-frsh-gray-dark p-2 rounded-md">
              <p className="font-medium">Free Delivery</p>
              <p className="text-xs opacity-80">On your first order</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="animate-bounce">
          <div className="w-10 h-10 rounded-full border-2 border-frsh-green flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-frsh-green" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
