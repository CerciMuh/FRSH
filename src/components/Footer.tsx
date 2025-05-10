
import { Instagram } from 'lucide-react';

// Custom TikTok icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M173.2 32.1c9.8 8.1 21.3 14.3 33.9 17.6v28.7c-14.8-1.5-28.8-6.4-41.3-14.1v82.2c0 44.4-31.5 92.1-90.6 92.1-24 0-46.6-9.6-63.5-26.5C5.2 193.3-1.2 170.4.1 148.2 2.7 101 45.6 64.1 93.6 68.8v31.2c-23.3-2.3-45 14.6-47.4 38-2.5 23.7 15.3 44.8 39 47.3 1.6.2 3.3.3 4.9.3 20.5 0 38-16.6 38-37.3V0h44.9c.1 10.9 3.7 21.4 10.1 29.7z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-frsh-green text-frsh-cream">
      <div className="flex flex-col items-center text-center py-6 px-4 space-y-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/lovable-uploads/logo-bilingual-footer.png"
            alt="FRSH Logo"
            className="w-24 h-auto object-contain"
          />
        </a>

        <div className="flex space-x-3">
          <a
            href="https://instagram.com/frsh_ksa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@frsh_ksa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors"
          >
            <TikTokIcon className="w-4 h-4" />
          </a>
        </div>

        <a
          href="https://apps.apple.com/app/id6742881525"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/lovable-uploads/apple-store-badge.png"
            alt="Download on the App Store"
            className="h-8"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
