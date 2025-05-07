
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or special requests? We're here to help!
            Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-saudi-green">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-saudi-green font-medium mb-2">Full Name</label>
                <Input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border-saudi-green/30 focus:border-saudi-green focus:ring focus:ring-saudi-green/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-saudi-green font-medium mb-2">Email Address</label>
                <Input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border-saudi-green/30 focus:border-saudi-green focus:ring focus:ring-saudi-green/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-saudi-green font-medium mb-2">Phone Number</label>
                <Input 
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 XX XXX XXXX"
                  required
                  className="w-full border-saudi-green/30 focus:border-saudi-green focus:ring focus:ring-saudi-green/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-saudi-green font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full border-saudi-green/30 focus:border-saudi-green focus:ring focus:ring-saudi-green/20"
                />
              </div>
              <Button type="submit" className="w-full bg-saudi-green hover:bg-saudi-green-light text-off-white">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-saudi-green text-off-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-off-white/10 p-3 rounded-full mr-4">
                    <Phone className="text-off-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-off-white/80">+966 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-off-white/10 p-3 rounded-full mr-4">
                    <Mail className="text-off-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-off-white/80">info@freshbites.sa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-off-white/10 p-3 rounded-full mr-4">
                    <MapPin className="text-off-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-off-white/80">King Fahd Road, Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace with actual map integration in production */}
              <div className="w-full h-full bg-saudi-green/20 flex items-center justify-center">
                <p className="text-saudi-green font-medium">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
