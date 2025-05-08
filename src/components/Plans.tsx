
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Weekly",
      price: "$59.99",
      period: "per week",
      description: "Perfect for individuals looking to try our service",
      features: [
        "5 meals per week",
        "Free delivery",
        "Weekly menu rotation",
        "Pause anytime"
      ],
      highlighted: false
    },
    {
      name: "Monthly",
      price: "$199.99",
      period: "per month",
      description: "Our most popular plan with the best value",
      features: [
        "20 meals per month",
        "Free delivery",
        "Priority menu selection",
        "10% discount on additional orders",
        "Nutritionist consultation"
      ],
      highlighted: true
    },
    {
      name: "Family",
      price: "$299.99",
      period: "per month",
      description: "Designed for families or sharing with others",
      features: [
        "30 meals per month",
        "Free priority delivery",
        "Family-sized portions",
        "Customizable meal plans",
        "15% discount on additional orders"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="plans" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Flexible subscription options to fit your lifestyle. No long-term commitments and you can cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-frsh-yellow shadow-xl relative' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-frsh-yellow text-frsh-gray-dark text-center py-1 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-center text-frsh-green">{plan.name}</h3>
                <div className="text-center my-6">
                  <span className="text-4xl font-bold text-frsh-green">{plan.price}</span>
                  <span className="text-frsh-gray ml-1">{plan.period}</span>
                </div>
                <p className="text-center text-frsh-gray mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-frsh-gray">
                      <Check className="h-5 w-5 text-frsh-yellow mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-2 ${
                    plan.highlighted 
                      ? 'bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark' 
                      : 'bg-frsh-green hover:bg-frsh-green-light text-frsh-cream'
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
