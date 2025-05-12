
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-calvino font-bold text-frsh-green mb-4">
              Legal Information
            </h1>
            <p className="text-lg md:text-xl font-labil text-frsh-gray-dark/80 max-w-2xl mx-auto">
              Important information about our company and operations.
            </p>
          </div>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">Company Registration</h2>
              <div className="bg-frsh-cream/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Company Name:</span>
                    <span className="text-frsh-gray-dark/80">FRSH Healthy Food Co.</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Registration Number:</span>
                    <span className="text-frsh-gray-dark/80">CR-1234567890</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Registered Office:</span>
                    <span className="text-frsh-gray-dark/80">Riyadh, Saudi Arabia</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between pb-1">
                    <span className="font-medium text-frsh-gray-dark">Year Established:</span>
                    <span className="text-frsh-gray-dark/80">2023</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">VAT Information</h2>
              <div className="bg-frsh-cream/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">VAT Registration Number:</span>
                    <span className="text-frsh-gray-dark/80">310987654321</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-frsh-gray-dark">Tax Authority:</span>
                    <span className="text-frsh-gray-dark/80">General Authority of Zakat and Tax, KSA</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">Licenses & Certifications</h2>
              <div className="bg-frsh-cream/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Food Safety Certificate:</span>
                    <span className="text-frsh-gray-dark/80">SFDA-2023-87654</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Health & Hygiene Rating:</span>
                    <span className="text-frsh-gray-dark/80">5 Stars (Excellent)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-frsh-gray-dark">Quality Management:</span>
                    <span className="text-frsh-gray-dark/80">ISO 22000:2018 Certified</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">Contact Information</h2>
              <div className="bg-frsh-cream/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Official Email:</span>
                    <a href="mailto:legal@frshfood.sa" className="text-frsh-green hover:underline">legal@frshfood.sa</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Business Inquiries:</span>
                    <a href="mailto:info@frshfood.sa" className="text-frsh-green hover:underline">info@frshfood.sa</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-frsh-gray-dark">Customer Support:</span>
                    <a 
                      href="https://wa.me/966500961496"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-frsh-green hover:underline"
                    >
                      +966 50 096 1496
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Legal;
