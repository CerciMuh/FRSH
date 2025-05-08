
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Slideshow from '@/components/Slideshow';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-frsh-cream">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Slideshow />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
