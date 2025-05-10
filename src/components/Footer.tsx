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

// Custom WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
          <a
            href="https://wa.me/966500961496"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-frsh-cream/10 p-2 rounded-full hover:bg-frsh-cream/20 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
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
