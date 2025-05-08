
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Browse our flexible meal plans and select what works for your lifestyle and dietary needs."
    },
    {
      number: "02",
      title: "Delivered Fresh",
      description: "We prepare your meals with fresh ingredients and deliver them right to your doorstep."
    },
    {
      number: "03",
      title: "Eat Healthy",
      description: "Heat, eat and enjoy nutritious, chef-crafted meals any day of the week."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-frsh-green text-frsh-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-frsh-cream">How It Works</h2>
          <p className="section-subtitle text-frsh-cream/80">
            Getting fresh, healthy meals delivered to your door is simple.
            Follow these easy steps to start your journey to freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative border border-frsh-cream/20 p-8 rounded-lg hover:bg-frsh-green-light transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-frsh-yellow text-frsh-gray-dark flex items-center justify-center font-playfair font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-playfair font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-frsh-cream/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="px-8 py-4 bg-frsh-yellow text-frsh-gray-dark font-medium rounded-lg hover:bg-frsh-yellow-light transition-colors">
            Start My Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
