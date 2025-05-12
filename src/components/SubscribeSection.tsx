
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SubscribeSection = () => {
  return (
    <section className="bg-frsh-cream py-16" id="subscribe">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-calvino font-bold text-frsh-green mb-4">Subscribe to FRSH</h2>
          <p className="text-lg font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
            Start your healthy meal plan subscription today. Choose your package, complete your information, and enjoy fresh meals delivered to your door.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-frsh-gray-dark/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-frsh-green font-calvino text-2xl">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-labil">
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">1</span>
                </div>
                <p>Enter the application, choose your package, complete your information, and pay.</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">2</span>
                </div>
                <p>Select your meals based on your dietary preferences and needs.</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">3</span>
                </div>
                <p>Receive fresh, refrigerated meals delivered on the same day to your door.</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-frsh-yellow h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-frsh-gray-dark font-semibold">4</span>
                </div>
                <p>Enjoy nutritious meals for up to 3 days when properly refrigerated.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-frsh-gray-dark/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-frsh-green font-calvino text-2xl">Get Started</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <p className="text-frsh-gray-dark/80 mb-6 text-center">
                Ready to start your healthy meal subscription? Click below to access our subscription portal.
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
                  Start My Subscription
                </Button>
              </a>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-4">
              <p className="text-sm text-frsh-gray-dark/70 mb-2">Or download our app:</p>
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
            </CardFooter>
          </Card>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-8 text-center">
          <p className="text-sm text-frsh-gray-dark/70 mb-3 font-labil">Payment methods we accept:</p>
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
