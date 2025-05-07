
import { Utensils, MapPin, Home } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-off-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Fresh Bites</h2>
          <p className="section-subtitle">
            We're on a mission to bring authentic Saudi flavors to your table with
            the freshest ingredients and traditional recipes passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute w-full h-full bg-saudi-green/10 rounded-lg transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1583608205776-babe6e76d63a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Fresh ingredients"
              className="relative z-10 rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-saudi-green text-off-white p-4 rounded-lg shadow-lg z-20">
              <p className="font-playfair font-bold text-2xl">20+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-saudi-green">Our Story</h3>
            <p className="mb-6 text-saudi-green/80">
              Founded in 2005, Fresh Bites began as a small family kitchen with a dream to share the rich culinary heritage of Saudi Arabia. 
              Today, we've grown into one of the region's most beloved meal delivery services, 
              bringing the authentic taste of Saudi cuisine directly to homes across the country.
            </p>
            <p className="mb-8 text-saudi-green/80">
              Every dish is carefully prepared by our team of expert Saudi chefs who combine traditional recipes with modern 
              cooking techniques to ensure each meal delivers an exceptional dining experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-saudi-green/5 rounded-lg">
                <div className="w-12 h-12 bg-saudi-green/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-saudi-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Fresh Ingredients</h4>
                <p className="text-sm text-saudi-green/70">Locally sourced, premium quality</p>
              </div>
              <div className="p-4 bg-saudi-green/5 rounded-lg">
                <div className="w-12 h-12 bg-saudi-green/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-saudi-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Saudi Authentic</h4>
                <p className="text-sm text-saudi-green/70">Traditional recipes and flavors</p>
              </div>
              <div className="p-4 bg-saudi-green/5 rounded-lg">
                <div className="w-12 h-12 bg-saudi-green/10 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-saudi-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Home Delivery</h4>
                <p className="text-sm text-saudi-green/70">Fast, reliable and convenient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
