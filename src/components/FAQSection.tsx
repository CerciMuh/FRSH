
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const FAQSection = () => {
  // Common FAQs for the landing page
  const commonFaqs = [
    {
      question: "How does meal delivery work?",
      answer: "We prepare fresh meals in our kitchen and deliver them directly to your door. You choose your meal plan, select your preferences, and we take care of the rest."
    },
    {
      question: "How fresh are the meals?",
      answer: "Our meals are prepared fresh daily using high-quality ingredients. We ensure they reach you in perfect condition with our temperature-controlled packaging."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Yes! We offer options for various dietary needs including vegetarian, vegan, gluten-free, and more. You can customize your meal plan according to your preferences."
    }
  ];

  return (
    <section id="faq" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-calvino font-bold text-frsh-green mb-4">Frequently Asked Questions</h2>
          <p className="text-lg font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
            Get answers to the most common questions about our meal plans and delivery service.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="mb-10">
          {commonFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-frsh-gray-dark/10">
              <AccordionTrigger className="text-lg font-medium text-frsh-green py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-frsh-gray-dark/80 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center">
          <Link to="/faq">
            <Button variant="link" className="text-frsh-green hover:text-frsh-green-light font-labil flex items-center gap-2">
              View all FAQs <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
