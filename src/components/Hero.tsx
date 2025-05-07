
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-off-white to-off-white-darker">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="inline-block bg-saudi-green/10 px-4 py-2 rounded-full mb-4">
            <div className="flex items-center gap-2">
              <ChefHat className="text-saudi-green w-5 h-5" />
              <span className="text-saudi-green font-medium text-sm">Freshly Prepared Daily</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-saudi-green mb-6">
            Fresh Saudi <br />
            <span className="text-saudi-green-light">Meals Delivered</span>
          </h1>
          <p className="text-lg md:text-xl text-saudi-green/80 mb-8 max-w-md">
            Authentic Saudi cuisine made with fresh, local ingredients
            delivered straight to your door. Experience the taste of tradition with modern convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-saudi-green hover:bg-saudi-green-light text-off-white text-lg py-6 px-8">
              Order Now
            </Button>
            <Button variant="outline" className="border-saudi-green text-saudi-green hover:bg-saudi-green hover:text-off-white text-lg py-6 px-8">
              View Menu
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-off-white-darker border-2 border-off-white flex items-center justify-center text-saudi-green font-semibold">M</div>
              <div className="w-10 h-10 rounded-full bg-off-white-darker border-2 border-off-white flex items-center justify-center text-saudi-green font-semibold">A</div>
              <div className="w-10 h-10 rounded-full bg-off-white-darker border-2 border-off-white flex items-center justify-center text-saudi-green font-semibold">S</div>
            </div>
            <div>
              <p className="text-saudi-green font-medium">Trusted by</p>
              <p className="text-saudi-green/70 text-sm">5000+ happy customers</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex items-center justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-saudi-green rounded-full absolute opacity-5"></div>
          <img 
            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Delicious Saudi cuisine"
            className="w-full h-auto max-w-md rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-4 right-4 md:-right-4 bg-off-white shadow-lg rounded-lg p-3 z-20 animate-bounce">
            <div className="bg-saudi-green text-off-white p-2 rounded-md">
              <p className="font-medium">Free Delivery</p>
              <p className="text-xs opacity-80">On your first order</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="animate-bounce">
          <div className="w-10 h-10 rounded-full border-2 border-saudi-green flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saudi-green" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
