import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'about', label: t('navbar.navigation.about'), type: 'anchor' },
    { id: 'lifestyle', label: t('navbar.navigation.lifestyle'), type: 'anchor' },
    { id: 'vision', label: t('navbar.navigation.vision'), type: 'anchor' },
    { id: 'subscribe', label: t('navbar.navigation.subscribe'), type: 'anchor' },
    { id: 'faq', label: t('navbar.navigation.faq'), path: '/faq', type: 'route' }
  ];

  // 1) Track scroll to set sticky navbar and update activeSection on landing
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (location.pathname === '/') {
        const pos = window.scrollY + 100;
        navigationItems.forEach(item => {
          if (item.type !== 'anchor') return;
          const el = document.getElementById(item.id);
          if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
            setActiveSection(item.id);
          }
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // 2) When coming back to " / " with a pendingSection, scroll immediately (before paint)
  useLayoutEffect(() => {
    if (location.pathname === '/' && pendingSection) {
      const el = document.getElementById(pendingSection);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
      setPendingSection(null);
      setMobileMenuOpen(false);
    }
  }, [location.pathname, pendingSection]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const isActive = (item: typeof navigationItems[number]) => {
    return item.type === 'route'
      ? location.pathname === item.path
      : location.pathname === '/' && activeSection === item.id;
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
    } else {
      // route link
      setMobileMenuOpen(false);
    }
  };

  const baseClasses =
    'relative py-2 px-3 text-sm lg:text-base rounded-md transition-all duration-300';
  const anchorClasses =
    'text-frsh-green hover:text-frsh-green-light hover:bg-white active:bg-white focus:bg-white';

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
          {navigationItems.map(item => {
            if (item.type === 'anchor') {
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${baseClasses} ${anchorClasses}`}
                  onClick={e => handleNavItemClick(e, item)}
                >
                  {item.label}
                </button>
              );
            }

            const linkActive = isActive(item)
              ? 'text-frsh-green-light font-medium bg-white'
              : 'text-frsh-green hover:text-frsh-green-light hover:bg-white';

            return (
              <Link
                key={item.id}
                to={item.path!}
                className={`${baseClasses} ${linkActive}`}
                onClick={e => handleNavItemClick(e, item)}
              >
                {item.label}
              </Link>
            );
          })}

          <LanguageSwitcher />

          <Button
            onClick={scrollToFooter}
            className="group bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark relative overflow-hidden text-sm lg:text-base"
          >
            <span className="relative z-10 group-hover:text-frsh-gray-dark transition-colors">
              {t('navbar.reachUs')}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-frsh-yellow-light to-frsh-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-frsh-green hover:bg-frsh-green/10"
          onClick={() => setMobileMenuOpen(o => !o)}
        >
          <Menu
            className={`transition-transform duration-300 ${
              mobileMenuOpen ? 'rotate-90' : ''
            }`}
          />
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
            if (item.type === 'anchor') {
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`py-3 px-4 hover:bg-white rounded-md flex items-center justify-between text-sm ${anchorClasses}`}
                  onClick={e => handleNavItemClick(e, item)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              );
            }

            const linkActive = isActive(item)
              ? 'text-frsh-green-light font-medium bg-white'
              : 'text-frsh-green';

            return (
              <Link
                key={item.id}
                to={item.path!}
                className={`py-3 px-4 hover:bg-white rounded-md flex items-center justify-between text-sm ${linkActive}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isActive(item) ? 'rotate-180' : ''
                  }`}
                />
              </Link>
            );
          })}
          
          <div className="py-3 px-4">
            <LanguageSwitcher />
          </div>

          <Button
            onClick={scrollToFooter}
            className="mt-4 bg-frsh-yellow hover:bg-frsh-yellow-light text-frsh-gray-dark text-sm"
          >
            {t('navbar.reachUs')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
