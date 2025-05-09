
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Slideshow from '@/components/Slideshow';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll observer to handle classes for scroll-triggered animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .reveal, .stagger-children');
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('active');
        } else if (!element.classList.contains('once')) {
          element.classList.remove('active');
        }
      });
    };
    
    // Initial check
    handleScrollAnimations();
    
    // Add event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* Clean, subtle background inspired by Blank Street */}
      <div className="fixed inset-0 -z-10 bg-white pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Slideshow />
      <Vision />
      <Footer />
      
      {/* Progress indicator inspired by Leon and Ask Italian */}
      <div className="fixed right-4 bottom-4 md:bottom-8 md:right-8 bg-white/80 backdrop-blur-sm rounded-full shadow-md p-2 z-40 hidden md:block">
        <div className="w-1 bg-frsh-green/20 rounded-full h-24 relative">
          <div 
            id="scroll-progress" 
            className="absolute top-0 left-0 bg-frsh-green w-1 rounded-full transition-all duration-300"
            style={{ height: '0%' }}
          ></div>
        </div>
      </div>
      
      {/* Scroll to top button inspired by Zambrero */}
      <div className="fixed right-4 bottom-4 z-40">
        <button 
          id="scroll-top"
          className="w-10 h-10 bg-frsh-cream rounded-full flex items-center justify-center shadow-md opacity-0 transform translate-y-4 transition-all duration-300 hover:bg-frsh-yellow"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 text-frsh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
      
      {/* Scroll behavior and progress tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('scroll', function() {
              // Calculate scroll progress
              const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
              const scrollPosition = window.pageYOffset;
              const scrollProgress = (scrollPosition / totalScroll) * 100;
              
              // Update progress bar
              const progressBar = document.getElementById('scroll-progress');
              if (progressBar) {
                progressBar.style.height = scrollProgress + '%';
              }
              
              // Show/hide scroll to top button
              const scrollTopBtn = document.getElementById('scroll-top');
              if (scrollTopBtn) {
                if (scrollPosition > 300) {
                  scrollTopBtn.style.opacity = '1';
                  scrollTopBtn.style.transform = 'translateY(0)';
                } else {
                  scrollTopBtn.style.opacity = '0';
                  scrollTopBtn.style.transform = 'translateY(4px)';
                }
              }
            });
          `,
        }}
      />
    </div>
  );
};

export default Index;
