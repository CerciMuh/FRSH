import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'about', label: 'About', type: 'anchor' },
    { id: 'lifestyle', label: 'Lifestyle', type: 'anchor' },
    { id: 'vision', label: 'Vision', type: 'anchor' },
    { id: 'subscribe', label: 'Subscribe', type: 'anchor' },
    { id: 'faq', label: 'FAQ', path: '/faq', type: 'route' },
    { id: 'legal', label: 'Legal', path: '/legal', type: 'route' }
  ];

  // Handle scroll and active section detection on landing page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 100;
        navigationItems.forEach((item) => {
          if (item.type !== 'anchor') return;
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.id);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // After navigating back to landing page for anchor, perform scroll
  useEffect(() => {
    if (location.pathname === '/' && pendingSection) {
      const section = document.getElementById(pendingSection);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
      }
      setPendingSection(null);
      setMobileMenuOpen(false);
    }
  }, [location.pathname, pendingSection]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const isActive = (item: typeof navigationItems[number]) => {
    if (item.type === 'anchor') {
      return location.pathname === '/' && activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  const handleNavItemClick = (
    e: React.MouseEvent,
    item: typeof navigationItems[number]
  ) => {
    if (item.type === 'anchor') {
      e.preventDefault();
      if (location.pathname !== '/') {
        setPendingSection(item.id);
        navigate('/');
      } else {
        scrollToSection(item.id);
      }
    } else if (item.type === 'route') {
      // for route links, closing mobile menu suffices
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-frsh-cream/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="group">
          <img
            src="/lovable-uploads/logo-arabic-green.png"
            alt="FRSH Logo"
            className="w-16 sm:w-20 md:w-24 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigationItems.map((item) => {
            const base = 'relative py-2 px-3 text-sm lg:text-base rounded-md transition-all duration-300';
            const activeClass = isActive(item)
              ? 'text-frsh-green-light font-medium bg-white'
              : 'text-frsh-green hover:text-frsh-green-light hover:bg-white';

            if (item.type === 'anchor') {
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`${base} ${activeClass}`}
                  onClick={(e) => handleNavItemClick(e, item)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.path!}
                className={`${base} ${activeClass}`}
                onClick={(e) => handleNavItemClick(e, item)}
              >
                {item.label}
              </Link>
            );
          })}

          <Button
            onClick={scrollToFooter}
            className="group bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark relative overflow-hidden text-sm lg:text-base"
          >
            <span className="relative z-10 group-hover:text-frsh-gray-dark transition-colors">
              Reach Us
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
          {navigationItems.map((item, idx) => {
            const mobileActive = isActive(item)
              ? 'text-frsh-green-light font-medium bg-white'
              : 'text-frsh-green';

            if (item.type === 'anchor') {
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`py-3 px-4 hover:bg-white rounded-md flex items-center justify-between text-sm ${mobileActive}`}
                  onClick={(e) => handleNavItemClick(e, item)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isActive(item) ? 'rotate-180' : ''}`} />
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.path!}
                className={`py-3 px-4 hover:bg-white rounded-md flex items-center justify-between text-sm ${mobileActive}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isActive(item) ? 'rotate-180' : ''}`} />
              </Link>
            );
          })}
          <Button
            onClick={scrollToFooter}
            className="mt-4 bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark text-sm"
          >
            Reach Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;