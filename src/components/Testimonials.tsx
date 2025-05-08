
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Saud",
      role: "Regular Customer",
      quote: "FRSH has transformed my eating habits! The meal quality is exceptional, and I love having healthy options ready to go.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Rahman",
      role: "Monthly Subscriber",
      quote: "As a busy professional, their meal subscription has been a lifesaver. The food is always fresh, nutritious, and absolutely delicious.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Mohammed Qahtani",
      role: "Family Plan Customer",
      quote: "My entire family looks forward to FRSH delivery days. The variety keeps everyone happy and the quality is consistently excellent.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-frsh-yellow' : 'text-gray-300'}`}
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-frsh-cream-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied customers have to say
            about their experience with FRSH.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex items-start mb-6">
              <span className="text-frsh-green text-6xl font-playfair leading-none">"</span>
            </div>
            <p className="text-xl md:text-2xl text-frsh-gray mb-8 font-playfair">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-frsh-green">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-frsh-gray">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full p-0 border-frsh-green text-frsh-green hover:bg-frsh-green hover:text-frsh-cream"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-frsh-green' : 'bg-frsh-green/30'}`}
              ></button>
            ))}
            <Button 
              variant="outline" 
              onClick={handleNext}
              className="w-12 h-12 rounded-full p-0 border-frsh-green text-frsh-green hover:bg-frsh-green hover:text-frsh-cream"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
