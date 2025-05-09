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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;
      navigationItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-frsh-cream/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href="#"
          className="group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/lovable-uploads/logo-bilingual.png"
            alt="FRSH Logo"
            className="w-16 sm:w-20 md:w-24 h-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 text-sm lg:text-base group ${
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

          <Button className="group bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark relative overflow-hidden text-sm lg:text-base">
            <span className="relative z-10 group-hover:text-frsh-gray-dark transition-colors">
              Start My Plan
            </span>
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
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navigationItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`py-3 px-4 hover:bg-frsh-cream-darker rounded-md flex items-center justify-between text-sm ${
                activeSection === item.id
                  ? 'text-frsh-green-light font-medium'
                  : 'text-frsh-green'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeSection === item.id ? 'rotate-180' : ''
                }`}
              />
            </a>
          ))}
          <Button className="mt-4 bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark text-sm">
            Start My Plan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
