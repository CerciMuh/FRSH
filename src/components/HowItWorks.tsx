
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Meals",
      description: "Browse our weekly menu of fresh, Saudi-inspired meals and select your favorites."
    },
    {
      number: "02",
      title: "We Prepare Your Order",
      description: "Our chefs prepare your meals with fresh, locally-sourced ingredients on the day of delivery."
    },
    {
      number: "03",
      title: "Fast Delivery",
      description: "We deliver your meals right to your doorstep in temperature-controlled packaging."
    },
    {
      number: "04",
      title: "Heat & Enjoy",
      description: "Heat up your meal in minutes and enjoy a restaurant-quality Saudi dining experience at home."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-saudi-green text-off-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-off-white">How It Works</h2>
          <p className="section-subtitle text-off-white/80">
            Getting fresh, authentic Saudi meals delivered to your door is easy.
            Follow these simple steps to enjoy our delicious cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative border border-off-white/20 p-6 rounded-lg hover:bg-saudi-green-light transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-off-white text-saudi-green flex items-center justify-center font-playfair font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-playfair font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-off-white/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-off-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h4 className="text-2xl font-playfair font-semibold mb-2">Weekly Meal Plans Available</h4>
            <p className="text-off-white/80">Subscribe to our weekly meal plans and save up to 20%.</p>
          </div>
          <button className="px-8 py-4 bg-off-white text-saudi-green font-medium rounded-lg hover:bg-off-white-darker transition-colors">
            View Meal Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
