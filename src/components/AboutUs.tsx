import { Utensils, MapPin, Home, Clock, Calendar, Check } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Weekly Menu",
      description: "Fresh meals change weekly so you never get bored.",
    },
    {
      icon: <Utensils className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Chef Crafted",
      description: "Designed by nutritionists, made by professional chefs.",
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Ready in Minutes",
      description: "Pre-prepared meals ready to eat in just minutes.",
    },
    {
      icon: <Check className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Cancel Anytime",
      description: "No commitments. Pause or cancel whenever you want.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-frsh-cream scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Right Column - Features FIRST on mobile */}
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-frsh-green mb-4 md:hidden">Why Choose FRSH?</h3>
            <h2 className="section-title mb-4 hidden md:block">Why Choose FRSH?</h2>
            <p className="section-subtitle mb-8">
              FRSH saves you time, keeps you healthy, and makes meals something to look forward to.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2 text-frsh-green">{feature.title}</h3>
                  <p className="text-frsh-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column - Image + About */}
          <div className="order-2 md:order-1">
            <div className="relative mb-10">
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

            <h2 className="section-title mb-4">About FRSH</h2>
            <p className="section-subtitle mb-6">
              Fresh, healthy meals made simple — with chef-designed recipes and ingredients that nourish.
            </p>
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-frsh-green">Our Story</h3>
            <p className="mb-4 text-frsh-gray">
              We started FRSH to make eating well easy and enjoyable in Saudi Arabia. No fluff — just good food, fast.
            </p>
            <p className="mb-6 text-frsh-gray">
              Choose a flexible subscription, pick your meals, and let our chefs handle the rest. Delivered to your door, always fresh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Fresh Ingredients</h4>
                <p className="text-sm text-frsh-gray">Locally sourced, premium quality.</p>
              </div>
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Saudi Based</h4>
                <p className="text-sm text-frsh-gray">Proudly supporting local communities.</p>
              </div>
              <div className="p-4 bg-frsh-green/5 rounded-lg">
                <div className="w-12 h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-frsh-green w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Home Delivery</h4>
                <p className="text-sm text-frsh-gray">Fast, reliable, and convenient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
