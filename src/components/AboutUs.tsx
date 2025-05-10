import { Utensils, MapPin, Home, Clock, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Weekly Menu",
      description: "Fresh meals change weekly so you never get bored.",
    },
    {
      icon: <Utensils className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Chef Crafted",
      description: "Designed by nutritionists, made by professional chefs.",
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Ready in Minutes",
      description: "Pre-prepared meals ready to eat in just minutes.",
    },
    {
      icon: <Check className="h-10 w-10 mb-4 text-frsh-yellow" />,
      title: "Cancel Anytime",
      description: "No commitments. Pause or cancel whenever you want.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-frsh-cream scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Right Column - Feature Section with FRSH Green Background */}
          <motion.div 
            className="order-1 md:order-2 bg-frsh-green rounded-xl shadow-md p-4 md:p-6 flex flex-col justify-between text-frsh-cream"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-calvino font-bold text-frsh-cream mb-4">Why Choose FRSH?</h2>
              <p className="text-lg sm:text-xl font-labil text-frsh-cream/90 mb-6">
                FRSH saves you time, keeps you healthy, and makes meals something to look forward to.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 p-3 md:p-6 rounded-lg hover:bg-white/20 transition-all duration-300 text-center cursor-pointer transform hover:scale-105"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    {feature.icon}
                    <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-frsh-cream">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-frsh-cream/90">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
              <motion.a
                href="https://apps.apple.com/app/id6742881525"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 md:py-3 text-center bg-frsh-yellow text-frsh-gray-dark font-semibold rounded-lg shadow hover:bg-yellow-400 transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to FRSH
              </motion.a>
              <motion.a
                href="https://wa.me/966500961496"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 md:py-3 text-center bg-white text-frsh-green font-semibold rounded-lg shadow hover:bg-white/90 transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Left Column - Image + About */}
          <motion.div 
            className="order-2 md:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="relative mb-6 md:mb-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute w-full h-full bg-frsh-green/10 rounded-lg transform -rotate-3"></div>
              <img
                src="/lovable-uploads/d3f97128-32cd-49be-af59-31e31efc40c2.png"
                alt="FRSH food and mood"
                className="relative z-10 rounded-lg shadow-lg w-full"
              />
              <motion.div 
                className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-frsh-yellow text-frsh-gray-dark p-3 md:p-4 rounded-lg shadow-lg z-20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-playfair font-bold text-xl md:text-2xl">FRSH</p>
                <p className="text-xs md:text-sm">Light Food</p>
              </motion.div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-calvino font-bold text-frsh-green mb-4">About FRSH</h2>
            <p className="text-lg sm:text-xl font-labil text-frsh-gray mb-6">
              Fresh, healthy meals made simple — with chef-designed recipes and ingredients that nourish.
            </p>
            <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-4 text-frsh-green">Our Story</h3>
            <p className="mb-4 text-frsh-gray text-sm md:text-base">
              We started FRSH to make eating well easy and enjoyable in Saudi Arabia. No fluff — just good food, fast.
            </p>
            <p className="mb-6 text-frsh-gray text-sm md:text-base">
              Choose a flexible subscription, pick your meals, and let our chefs handle the rest. Delivered to your door, always fresh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                {
                  icon: <Utensils className="text-frsh-green w-5 h-5 md:w-6 md:h-6" />,
                  title: "Fresh Ingredients",
                  description: "Locally sourced, premium quality."
                },
                {
                  icon: <MapPin className="text-frsh-green w-5 h-5 md:w-6 md:h-6" />,
                  title: "Saudi Based",
                  description: "Proudly supporting local communities."
                },
                {
                  icon: <Home className="text-frsh-green w-5 h-5 md:w-6 md:h-6" />,
                  title: "Home Delivery",
                  description: "Fast, reliable, and convenient."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-3 md:p-4 bg-frsh-green/5 rounded-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(34, 197, 94, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 bg-frsh-yellow/30 rounded-full flex items-center justify-center mb-3 md:mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-medium mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-frsh-gray">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
