
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'vision', label: 'Vision' }
  ];

  // Handle scroll position for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigationItems]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-frsh-cream/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-frsh-green flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <img 
              src="public/lovable-uploads/3304c707-00cf-444b-8964-f3c62edfc418.png" 
              alt="FRSH Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-frsh-green font-playfair text-xl font-semibold group-hover:text-frsh-green-light transition-colors">FRSH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 group ${
                activeSection === item.id 
                  ? 'text-frsh-green-light font-medium' 
                  : 'text-frsh-green hover:text-frsh-green-light'
              } transition-colors`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              onMouseEnter={() => setHoverItem(item.id)}
              onMouseLeave={() => setHoverItem(null)}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-frsh-yellow transform origin-left transition-transform duration-300 ${
                  activeSection === item.id || hoverItem === item.id
                    ? 'scale-x-100' 
                    : 'scale-x-0'
                }`}
              ></span>
            </a>
          ))}
          
          <Button 
            className="group bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-frsh-gray-dark transition-colors">Start My Plan</span>
            <span className="absolute inset-0 bg-gradient-to-r from-frsh-yellow-light to-frsh-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-frsh-green hover:bg-frsh-green/10" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-frsh-cream shadow-lg transition-all duration-500 overflow-hidden ${
          mobileMenuOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 stagger-children">
          {navigationItems.map((item, index) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`py-3 px-4 hover:bg-frsh-cream-darker rounded-md flex items-center justify-between ${
                activeSection === item.id ? 'text-frsh-green-light font-medium' : 'text-frsh-green'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${activeSection === item.id ? 'rotate-180' : ''}`} />
            </a>
          ))}
          <Button className="mt-4 bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark">
            Start My Plan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
