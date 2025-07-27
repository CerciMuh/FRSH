import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Button } from '../components/ui/button';

// Custom WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FAQ = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      id: 'ordering',
      title: t('faqPage.categories.ordering.title'),
      questions: [
        {
          question: t('faqPage.categories.ordering.questions.delivery.question'),
          answer: t('faqPage.categories.ordering.questions.delivery.answer')
        },
        {
          question: t('faqPage.categories.ordering.questions.areas.question'),
          answer: t('faqPage.categories.ordering.questions.areas.answer')
        },
        {
          question: t('faqPage.categories.ordering.questions.frequency.question'),
          answer: t('faqPage.categories.ordering.questions.frequency.answer')
        }
      ]
    },
    {
      id: 'mealPlans',
      title: t('faqPage.categories.mealPlans.title'),
      questions: [
        {
          question: t('faqPage.categories.mealPlans.questions.customization.question'),
          answer: t('faqPage.categories.mealPlans.questions.customization.answer')
        },
        {
          question: t('faqPage.categories.mealPlans.questions.freshness.question'),
          answer: t('faqPage.categories.mealPlans.questions.freshness.answer')
        },
        {
          question: t('faqPage.categories.mealPlans.questions.dietary.question'),
          answer: t('faqPage.categories.mealPlans.questions.dietary.answer')
        }
      ]
    },
    {
      id: 'subscription',
      title: t('faqPage.categories.subscription.title'),
      questions: [
        {
          question: t('faqPage.categories.subscription.questions.management.question'),
          answer: t('faqPage.categories.subscription.questions.management.answer')
        },
        {
          question: t('faqPage.categories.subscription.questions.payment.question'),
          answer: t('faqPage.categories.subscription.questions.payment.answer')
        },
        {
          question: t('faqPage.categories.subscription.questions.cancellation.question'),
          answer: t('faqPage.categories.subscription.questions.cancellation.answer')
        }
      ]
    },
    {
      id: 'terms',
      title: t('faqPage.categories.terms.title'),
      questions: [
        {
          question: t('faqPage.categories.terms.questions.subscribe.question'),
          answer: t('faqPage.categories.terms.questions.subscribe.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.cancellationPolicy.question'),
          answer: t('faqPage.categories.terms.questions.cancellationPolicy.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.activation.question'),
          answer: t('faqPage.categories.terms.questions.activation.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.deliveryTimes.question'),
          answer: t('faqPage.categories.terms.questions.deliveryTimes.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.promotional.question'),
          answer: t('faqPage.categories.terms.questions.promotional.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.storage.question'),
          answer: t('faqPage.categories.terms.questions.storage.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.freeze.question'),
          answer: t('faqPage.categories.terms.questions.freeze.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.renewal.question'),
          answer: t('faqPage.categories.terms.questions.renewal.answer')
        },
        {
          question: t('faqPage.categories.terms.questions.changeMeals.question'),
          answer: t('faqPage.categories.terms.questions.changeMeals.answer')
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-calvino font-bold text-frsh-green mb-4">
              {t('faqPage.title')}
            </h1>
            <p className="text-lg md:text-xl font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
              {t('faqPage.description')}
            </p>
          </div>
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-frsh-gray-dark/50 h-5 w-5" />
            <Input 
              type="text" 
              placeholder={t('faqPage.searchPlaceholder')}
              className="pl-10 py-6 bg-white border-frsh-gray-dark/20 text-frsh-gray-dark"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Legal Notice */}
          <div className="mb-10 p-4 bg-frsh-cream/50 border border-frsh-gray-dark/10 rounded-lg text-center">
            <p className="text-sm font-labil text-frsh-gray-dark/80 italic">
              {t('faqPage.legalNotice.text')}
            </p>
            <a 
              href="https://apps.apple.com/app/id6742881525" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 inline-block text-frsh-green hover:underline text-sm"
            >
              {t('faqPage.legalNotice.appLink')}
            </a>
          </div>
          
          {/* FAQ Accordions by Category */}
          {filteredCategories.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredCategories.map((category) => (
                <div key={category.id} className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={`${category.id}-${index}`} 
                      value={`${category.id}-${index}`}
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
                </div>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl font-labil text-frsh-gray-dark/80">
                {t('faqPage.noResults', { query: searchQuery })}
              </p>
            </div>
          )}
          
          <div className="mt-12 bg-frsh-cream/50 border border-frsh-gray-dark/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-calvino font-bold text-frsh-green mb-2">
              {t('faqPage.contact.title')}
            </h3>
            <p className="text-frsh-gray-dark/80 mb-4">
              {t('faqPage.contact.description')}
            </p>
            <Button 
              className="flex items-center gap-2 mx-auto"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=966500961496&text&type=phone_number&app_absent=0', '_blank')}
            >
              <WhatsAppIcon className="w-5 h-5" />
              {t('faqPage.contact.button')}
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
