import { Utensils, MapPin, Home, Clock, Calendar, Check } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Weekly Menu",
      description: "New chef-crafted options every week to keep your meals exciting and varied."
    },
    {
      icon: <Utensils className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Chef Crafted",
      description: "All meals are designed by nutritionists and prepared by professional chefs."
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Ready in Minutes",
      description: "Our pre-prepared meals are ready to eat in just minutes, saving you valuable time."
    },
    {
      icon: <Check className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Cancel Anytime",
      description: "No long-term commitments. Pause or cancel your subscription whenever you need."
    }
  ];

  return (
    <section id="about" className="section-padding bg-frsh-cream scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About FRSH</h2>
          <p className="section-subtitle">
            We're on a mission to bring fresh, healthy meals to your table with
            the finest ingredients and innovative recipes designed for your wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute w-full h-full bg-frsh-green/10 rounded-lg transform -rotate-3"></div>
            <img
              src="/lovable-uploads/d3f97128-32cd-49be-af59-31e31efc40c2.png"
              alt="FRSH food and mood"
              className="relative z-10 rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-frsh-yellow text-frsh-gray-dark p-4 rounded-lg shadow-lg z-20">
              <p className="font-playfair font-bold text-2xl">FRSH</p>
              <p className="text-sm">Light Food</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-frsh-green">Our Story</h3>
            <p className="mb-6 text-frsh-gray">
              FRSH began as a simple idea: to make healthy eating accessible and enjoyable for everyone in Saudi Arabia. 
              We believe that nutritious food shouldn't be a luxury, but a daily essential that's convenient to incorporate into busy lives.
            </p>
            <p className="mb-8 text-frsh-gray">
              Our cloud kitchen subscription model was designed with modern lifestyles in mind, offering flexible meal plans 
              that can be tailored to your preferences and nutritional needs. Every dish is crafted by our team of culinary experts 
              who combine traditional flavors with contemporary techniques.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Fresh Ingredients</h4>
                <p className="text-sm text-frsh-gray">Locally sourced, premium quality</p>
              </div>
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Saudi Based</h4>
                <p className="text-sm text-frsh-gray">Supporting local communities</p>
              </div>
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Home Delivery</h4>
                <p className="text-sm text-frsh-gray">Fast, reliable and convenient</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose FRSH?</h2>
          <p className="section-subtitle">
            We're committed to providing high-quality, balanced, and flavorful meals through our 
            subscription-based cloud kitchen, prioritizing fresh ingredients and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 text-frsh-green">{feature.title}</h3>
                <p className="text-frsh-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
