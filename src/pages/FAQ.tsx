
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      category: "Ordering & Delivery",
      faqs: [
        {
          question: "How does meal delivery work?",
          answer: "We prepare fresh meals in our kitchen and deliver them directly to your door. You choose your meal plan, select your preferences, and we take care of the rest."
        },
        {
          question: "What areas do you deliver to?",
          answer: "We currently deliver to all major cities in Saudi Arabia. Enter your postal code in our app to check if we deliver to your specific area."
        },
        {
          question: "How often will I receive deliveries?",
          answer: "Depending on your subscription plan, you can receive deliveries daily, three times a week, or weekly. You can select your preferred delivery frequency in our app."
        }
      ]
    },
    {
      category: "Meal Plans & Customization",
      faqs: [
        {
          question: "Can I customize my meal plan?",
          answer: "Yes! You can customize your meal plan based on your dietary preferences, allergies, and calorie requirements. Our app allows you to easily make these selections."
        },
        {
          question: "How fresh are the meals?",
          answer: "Our meals are prepared fresh daily using high-quality ingredients. We ensure they reach you in perfect condition with our temperature-controlled packaging."
        },
        {
          question: "Do you accommodate dietary restrictions?",
          answer: "Yes! We offer options for various dietary needs including vegetarian, vegan, gluten-free, and more. You can customize your meal plan according to your preferences."
        }
      ]
    },
    {
      category: "Subscription & Billing",
      faqs: [
        {
          question: "How do I manage my subscription?",
          answer: "You can manage your subscription through our mobile app. There, you can pause, skip, or cancel deliveries as needed."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept VISA, MADA, Tabby, Tamara, and other major payment methods. Payment is processed securely through our platform."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "You can cancel the subscription before the arrival of the first meal or within the first two days after delivery. The subscription amount will be refunded within 14 working days after deducting a 10% cancellation fee. Bank transfer fees, electronic payment fees, and the value of received meals will also be deducted."
        }
      ]
    },
    {
      category: "Subscription Terms & Conditions",
      faqs: [
        {
          question: "How do I subscribe to FRSH meals?",
          answer: "Enter the application, choose your package, complete your information, pay the required amount, and then select your suitable meals."
        },
        {
          question: "What's the cancellation policy?",
          answer: "You can cancel the subscription before the arrival of the first meal or within the first two days after delivery. The subscription amount will be refunded within 14 working days after deducting a 10% cancellation fee. Bank transfer fees, electronic payment fees, and the value of received meals will be deducted. After two days, the financial amount cannot be refunded, but you will retain a credit for subscription days that can be transferred to another subscriber."
        },
        {
          question: "How long does subscription activation take?",
          answer: "The subscription activation period is four working days, and you will receive the first meal at the address registered on the website. In case of your absence to receive it or someone substituting for you, we apologize for any compensation (you can change the address at least 2 days in advance)."
        },
        {
          question: "What are the delivery times?",
          answer: "Choose a suitable time for you with flexibility according to the following periods: From 6 AM to 2 PM or From 3 PM to 11 PM. Delivery will be made according to the route selected for neighborhoods in the chosen period."
        },
        {
          question: "Can I cancel my subscription during promotional periods?",
          answer: "If the subscription is during promotional or discount periods, it cannot be canceled."
        },
        {
          question: "How should I store my meals?",
          answer: "Meals will be delivered to you refrigerated on the same day. Keep your meals in the refrigerator to maintain their nutritional value, and they are valid for 3 days."
        },
        {
          question: "Can I freeze my subscription?",
          answer: "You can freeze your subscription for a period of less than 90 days through the website, provided it is done 4 days before the scheduled date. If you do not freeze your subscription, do not receive your meals, and your subscription period ends, we cannot compensate you."
        },
        {
          question: "How do I renew my subscription?",
          answer: "Renew your subscription before it expires with sufficient time to ensure uninterrupted meal delivery, at most 2 days before the expiration date."
        },
        {
          question: "Can I change my meals?",
          answer: "You can change meals up to 48 hours before the delivery date."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq => 
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-calvino font-bold text-frsh-green mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
              Find answers to your questions about our meal plans, delivery service, and more.
            </p>
          </div>
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-frsh-gray-dark/50 h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Search FAQs..."
              className="pl-10 py-6 bg-white border-frsh-gray-dark/20 text-frsh-gray-dark"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Legal Notice */}
          <div className="mb-10 p-4 bg-frsh-cream/50 border border-frsh-gray-dark/10 rounded-lg text-center">
            <p className="text-sm font-labil text-frsh-gray-dark/80 italic">
              All terms and conditions are subject to modification based on the decision of "FRSH" management, and changes will be published in due course.
            </p>
            <a 
              href="https://app.techrar.com/FRSH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 inline-block text-frsh-green hover:underline text-sm"
            >
              Visit our app for more information
            </a>
          </div>
          
          {/* FAQ Accordions by Category */}
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="mb-6">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="border-b border-frsh-gray-dark/10"
                  >
                    <AccordionTrigger className="text-lg font-medium text-frsh-green py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-frsh-gray-dark/80 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl font-labil text-frsh-gray-dark/80">
                No FAQs found for "{searchQuery}". Try a different search term.
              </p>
            </div>
          )}
          
          <div className="mt-12 bg-frsh-cream/50 border border-frsh-gray-dark/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-calvino font-bold text-frsh-green mb-2">Still have questions?</h3>
            <p className="text-frsh-gray-dark/80 mb-4">
              Contact our customer support team and we'll be happy to help.
            </p>
            <a 
              href="https://wa.me/966500961496"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-frsh-green text-white rounded-md hover:bg-frsh-green-light transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
