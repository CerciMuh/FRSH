import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const SubscribeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-frsh-cream py-16" id="subscribe">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-calvino font-bold text-frsh-green mb-4">{t('subscribe.title')}</h2>
          <p className="text-lg font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
            {t('subscribe.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-frsh-gray-dark/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-frsh-green font-calvino text-2xl">{t('subscribe.howItWorks.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-labil">
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">1</span>
                </div>
                <p>{t('subscribe.howItWorks.steps.1')}</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">2</span>
                </div>
                <p>{t('subscribe.howItWorks.steps.2')}</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">3</span>
                </div>
                <p>{t('subscribe.howItWorks.steps.3')}</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">4</span>
                </div>
                <p>{t('subscribe.howItWorks.steps.4')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-frsh-gray-dark/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-frsh-green font-calvino text-2xl">{t('subscribe.getStarted.title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <p className="text-frsh-gray-dark/80 mb-6 text-center">
                {t('subscribe.getStarted.description')}
              </p>
              <a 
                href="https://app.techrar.com/FRSH" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="w-full bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark font-medium px-6 py-6 flex items-center gap-2 justify-center"
                >
                  <Calendar className="h-5 w-5" />
                  {t('subscribe.getStarted.button')}
                </Button>
              </a>
            </CardContent>
            <CardFooter className="flex flex-col pt-4">
  <p className="text-sm text-frsh-gray-dark/70 mb-2">{t('subscribe.getStarted.orDownload')}</p>

  <div className="flex gap-3">
    <a
      href="https://apps.apple.com/app/id6742881525"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/lovable-uploads/apple-store-badge.png"
        alt="Download on the App Store"
        className="h-10 rounded-md"
      />
    </a>

    <a
      href="https://play.google.com/store/apps/details?id=com.yumealz.frsh&hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/lovable-uploads/google-play-badge.png"
        alt="Download on Google Play"
        className="h-10 rounded-md"
      />
    </a>
  </div>
</CardFooter>


          </Card>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-8 text-center">
          <p className="text-sm text-frsh-gray-dark/70 mb-3 font-labil">{t('subscribe.paymentMethods.title')}</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src="/lovable-uploads/visa-logo.png" alt="VISA" className="h-4 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/mada-logo.png" alt="MADA" className="h-4 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/tabby-logo.png" alt="Tabby" className="h-4 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/tamara-logo.png" alt="Tamara" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
