
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
                    <span className="text-frsh-gray-dark/80">مؤسسة موثقة لتقديم الوجبات</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Registration Number:</span>
                    <span className="text-frsh-gray-dark/80">1010739046</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Registered Office:</span>
                    <span className="text-frsh-gray-dark/80">الرياض، الرياض - المملكة 12541</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between pb-1">
                    <span className="font-medium text-frsh-gray-dark">Certificate Date:</span>
                    <span className="text-frsh-gray-dark/80">17/04/2022</span>
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
                    <span className="text-frsh-gray-dark/80">310307678000003</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Effective Registration Date:</span>
                    <span className="text-frsh-gray-dark/80">2022/05/01</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">Tax Period:</span>
                    <span className="text-frsh-gray-dark/80">Quarterly - ربع سنوي</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-frsh-gray-dark">Certificate Number:</span>
                    <span className="text-frsh-gray-dark/80">3110026748</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-calvino font-bold text-frsh-green mb-4">License Information</h2>
              <div className="bg-frsh-cream/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-frsh-gray-dark/10 pb-3">
                    <span className="font-medium text-frsh-gray-dark">CR / License / Contract Number:</span>
                    <span className="text-frsh-gray-dark/80">1010845504</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-frsh-gray-dark">Branch Name:</span>
                    <span className="text-frsh-gray-dark/80">مؤسسة موثقة لتقديم الوجبات</span>
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
