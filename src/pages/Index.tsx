
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-frsh-cream">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Plans />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
