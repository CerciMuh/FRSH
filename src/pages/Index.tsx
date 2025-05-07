
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import FeaturedMeals from '@/components/FeaturedMeals';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <FeaturedMeals />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
