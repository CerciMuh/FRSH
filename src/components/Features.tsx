
import { Clock, UtensilsCrossed, Calendar, Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Weekly Menu",
      description: "New chef-crafted options every week to keep your meals exciting and varied."
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 mb-4 text-frsh-yellow" />,
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
    <section id="features" className="section-padding bg-frsh-cream">
      <div className="container mx-auto">
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

export default Features;
