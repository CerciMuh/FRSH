
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
      isScrolled ? 'bg-off-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-saudi-green flex items-center justify-center">
            <span className="text-off-white text-xs font-bold">FR</span>
          </div>
          <span className="text-saudi-green font-playfair text-xl font-semibold">FRSH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-saudi-green hover:text-saudi-green-light transition-colors">About</a>
          <a href="#how-it-works" className="text-saudi-green hover:text-saudi-green-light transition-colors">How It Works</a>
          <a href="#menu" className="text-saudi-green hover:text-saudi-green-light transition-colors">Menu</a>
          <a href="#testimonials" className="text-saudi-green hover:text-saudi-green-light transition-colors">Testimonials</a>
          <a href="#contact" className="text-saudi-green hover:text-saudi-green-light transition-colors">Contact</a>
          <Button className="bg-saudi-green hover:bg-saudi-green-light text-off-white">Order Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-saudi-green" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-off-white absolute w-full shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            <a href="#about" className="py-3 px-4 hover:bg-off-white-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#how-it-works" className="py-3 px-4 hover:bg-off-white-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#menu" className="py-3 px-4 hover:bg-off-white-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#testimonials" className="py-3 px-4 hover:bg-off-white-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="py-3 px-4 hover:bg-off-white-darker rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button className="mt-4 bg-saudi-green hover:bg-saudi-green-light text-off-white">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
