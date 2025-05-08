
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-frsh-cream shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-frsh-green flex items-center justify-center">
            <img 
              src="public/lovable-uploads/3304c707-00cf-444b-8964-f3c62edfc418.png" 
              alt="FRSH Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-frsh-green font-playfair text-xl font-semibold">FRSH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-frsh-green hover:text-frsh-green-light transition-colors">About</a>
          <a href="#how-it-works" className="text-frsh-green hover:text-frsh-green-light transition-colors">How It Works</a>
          <a href="#features" className="text-frsh-green hover:text-frsh-green-light transition-colors">Features</a>
          <a href="#plans" className="text-frsh-green hover:text-frsh-green-light transition-colors">Plans</a>
          <a href="#testimonials" className="text-frsh-green hover:text-frsh-green-light transition-colors">Testimonials</a>
          <Button className="bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark">Start My Plan</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-frsh-green" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-frsh-cream absolute w-full shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            <a href="#about" className="py-3 px-4 hover:bg-frsh-cream-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#how-it-works" className="py-3 px-4 hover:bg-frsh-cream-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="py-3 px-4 hover:bg-frsh-cream-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#plans" className="py-3 px-4 hover:bg-frsh-cream-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Plans</a>
            <a href="#testimonials" className="py-3 px-4 hover:bg-frsh-cream-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <Button className="mt-4 bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark">Start My Plan</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
