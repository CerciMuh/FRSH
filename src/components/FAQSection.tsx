import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const { t } = useTranslation();

  // Common FAQs for the landing page
  const commonFaqs = [
    {
      question: t('faq.questions.delivery.question'),
      answer: t('faq.questions.delivery.answer')
    },
    {
      question: t('faq.questions.freshness.question'),
      answer: t('faq.questions.freshness.answer')
    },
    {
      question: t('faq.questions.dietary.question'),
      answer: t('faq.questions.dietary.answer')
    }
  ];

  return (
    <section id="faq" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-calvino font-bold text-frsh-green mb-4">{t('faq.title')}</h2>
          <p className="text-lg font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
            {t('faq.description')}
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
              {t('faq.viewAll')} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
