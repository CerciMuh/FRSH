
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-saudi-green text-off-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-6">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center">
                <span className="text-saudi-green text-sm font-bold">FR</span>
              </div>
              <span className="text-off-white font-playfair text-2xl font-semibold">FRSH</span>
            </div>
            <p className="mb-6 text-off-white/80">
              Delivering authentic Saudi cuisine made with fresh, locally sourced ingredients 
              straight to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-off-white/10 p-2 rounded-full hover:bg-off-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-off-white/10 p-2 rounded-full hover:bg-off-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-off-white/10 p-2 rounded-full hover:bg-off-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-off-white/80 hover:text-off-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-off-white/80 hover:text-off-white transition-colors">Menu</a></li>
              <li><a href="#how-it-works" className="text-off-white/80 hover:text-off-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-off-white/80 hover:text-off-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-off-white/80 hover:text-off-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Our Policies</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-off-white/80 hover:text-off-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-off-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-off-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-off-white transition-colors">Delivery Information</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-off-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Subscribe to Our Newsletter</h4>
            <p className="mb-4 text-off-white/80">Stay updated with our newest dishes and exclusive offers.</p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-off-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:bg-off-white/20 flex-grow"
              />
              <button type="submit" className="bg-off-white text-saudi-green px-4 py-2 rounded-r-lg font-medium hover:bg-off-white-darker transition-colors">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-off-white/60">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="border-t border-off-white/20 pt-8 mt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <p className="text-off-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} FRSH. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-off-white/60 text-sm hover:text-off-white">Privacy Policy</a>
              <a href="#" className="text-off-white/60 text-sm hover:text-off-white">Terms of Service</a>
              <a href="#" className="text-off-white/60 text-sm hover:text-off-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
