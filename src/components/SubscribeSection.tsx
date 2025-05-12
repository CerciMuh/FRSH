
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our updates and offers.",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-frsh-cream py-16" id="subscribe">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-calvino font-bold text-frsh-green mb-4">Stay Fresh</h2>
          <p className="text-lg font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for healthy recipes, special offers, and updates on new meal plans.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 items-center"
        >
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-frsh-gray-dark/50 h-5 w-5" />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-10 py-6 bg-white border-frsh-gray-dark/20 text-frsh-gray-dark"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark font-medium px-6 py-6"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        {/* Payment Methods */}
        <div className="mt-8 text-center">
          <p className="text-sm text-frsh-gray-dark/70 mb-3 font-labil">Payment methods we accept:</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src="/lovable-uploads/visa-logo.png" alt="VISA" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/mada-logo.png" alt="MADA" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/tabby-logo.png" alt="Tabby" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/tamara-logo.png" alt="Tamara" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
