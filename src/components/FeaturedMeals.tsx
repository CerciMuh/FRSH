
import { Button } from "@/components/ui/button";

const FeaturedMeals = () => {
  const meals = [
    {
      id: 1,
      name: "Traditional Kabsa",
      description: "Saudi's most famous dish with fragrant rice, tender meat, and special spice blend.",
      price: "SAR 55",
      image: "https://images.unsplash.com/photo-1579888944880-d98341245702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Main Course",
      prepTime: "30 min",
      calories: "650"
    },
    {
      id: 2,
      name: "Lamb Mandi",
      description: "Slow-cooked lamb with aromatic rice, garnished with nuts and fresh herbs.",
      price: "SAR 65",
      image: "https://images.unsplash.com/photo-1567529879-711b4821ee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      category: "Main Course",
      prepTime: "25 min",
      calories: "720"
    },
    {
      id: 3,
      name: "Jareesh",
      description: "Traditional Saudi dish made with crushed wheat, meat, and yogurt.",
      price: "SAR 45",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      category: "Main Course",
      prepTime: "20 min",
      calories: "490"
    },
    {
      id: 4,
      name: "Arabic Salad",
      description: "Fresh vegetables with lemon, olive oil, and herbs in traditional Arabic style.",
      price: "SAR 25",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Side Dish",
      prepTime: "10 min",
      calories: "120"
    }
  ];

  return (
    <section id="menu" className="section-padding bg-off-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Featured Meals</h2>
          <p className="section-subtitle">
            Experience the authentic taste of Saudi cuisine with our carefully crafted dishes,
            prepared with fresh ingredients and traditional spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={meal.image} 
                  alt={meal.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-saudi-green text-off-white px-3 py-1 rounded-full text-sm font-medium">
                  {meal.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-saudi-green">{meal.name}</h3>
                <p className="text-saudi-green/70 text-sm mb-4">{meal.description}</p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-saudi-green mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path>
                    </svg>
                    {meal.prepTime}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-saudi-green mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                    {meal.calories} cal
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-saudi-green font-playfair font-bold text-xl">{meal.price}</span>
                  <Button variant="ghost" className="bg-saudi-green/10 hover:bg-saudi-green hover:text-off-white text-saudi-green">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-saudi-green hover:bg-saudi-green-light text-off-white px-8 py-6 text-lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
