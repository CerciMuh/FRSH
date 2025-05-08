
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-frsh-green text-frsh-cream">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-6">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-frsh-cream flex items-center justify-center">
                <img 
                  src="public/lovable-uploads/3304c707-00cf-444b-8964-f3c62edfc418.png" 
                  alt="FRSH Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-frsh-cream font-playfair text-2xl font-semibold">FRSH</span>
            </div>
            <p className="mb-6 text-frsh-cream/80">
              Delivering fresh, nutritious, and delicious meals through our
              subscription-based cloud kitchen service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Why Choose Us</a></li>
              <li><a href="#plans" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Plans & Pricing</a></li>
              <li><a href="#testimonials" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">Delivery Information</a></li>
              <li><a href="#" className="text-frsh-cream/80 hover:text-frsh-cream transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Subscribe to Our Newsletter</h4>
            <p className="mb-4 text-frsh-cream/80">Stay updated with our newest meals and exclusive offers.</p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-frsh-cream/10 px-4 py-2 rounded-l-lg focus:outline-none focus:bg-frsh-cream/20 flex-grow"
              />
              <button type="submit" className="bg-frsh-yellow text-frsh-gray-dark px-4 py-2 rounded-r-lg font-medium hover:bg-frsh-yellow-light transition-colors">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-frsh-cream/60">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="border-t border-frsh-cream/20 pt-8 mt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <p className="text-frsh-cream/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} FRSH. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-frsh-cream/60 text-sm hover:text-frsh-cream">Privacy Policy</a>
              <a href="#" className="text-frsh-cream/60 text-sm hover:text-frsh-cream">Terms of Service</a>
              <a href="#" className="text-frsh-cream/60 text-sm hover:text-frsh-cream">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
