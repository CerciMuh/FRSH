import { Clock, Hand, Heart, Leaf, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Vision = () => {
  const { t } = useTranslation();
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const togglePanel = (id: string) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  const philosophyItems = [
    {
      id: 'quality',
      icon: Star,
      title: t('vision.philosophy.items.quality.title'),
      description: t('vision.philosophy.items.quality.description'),
    },
    {
      id: 'health',
      icon: Heart,
      title: t('vision.philosophy.items.health.title'),
      description: t('vision.philosophy.items.health.description'),
    },
    {
      id: 'convenience',
      icon: Clock,
      title: t('vision.philosophy.items.convenience.title'),
      description: t('vision.philosophy.items.convenience.description'),
    }
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

  const mobileCardVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
  };

  return (
    <section id="vision" className="section-padding bg-frsh-cream text-frsh-green relative overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-5xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-lg transition-all duration-500 transform cursor-pointer relative overflow-hidden bg-frsh-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => togglePanel('vision')}
            onMouseEnter={() => setHovered('vision')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10 text-center mb-5">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Leaf className="w-8 h-8 text-frsh-yellow mx-auto" />
              </motion.div>
            </div>
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-center text-frsh-cream">{t('vision.title')}</h2>
            <Collapsible open={openPanel === 'vision'}>
              <CollapsibleTrigger className="w-full">
                <p className="text-frsh-cream italic text-center">
                  {t('vision.visionText.preview')}
                  <motion.span 
                    className="block text-frsh-yellow mt-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {openPanel === 'vision' ? t('vision.showLess') : t('vision.readMore')}
                  </motion.span>
                </p>
              </CollapsibleTrigger>
              <AnimatePresence>
                {openPanel === 'vision' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CollapsibleContent className="mt-4 bg-frsh-yellow/10 p-4 rounded-lg">
                      <p className="text-frsh-cream italic leading-relaxed">
                        {t('vision.visionText.full')}
                      </p>
                    </CollapsibleContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Collapsible>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-lg transition-all duration-500 transform cursor-pointer relative overflow-hidden bg-frsh-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => togglePanel('mission')}
            onMouseEnter={() => setHovered('mission')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10 text-center mb-5">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Hand className="w-8 h-8 text-frsh-yellow mx-auto" />
              </motion.div>
            </div>
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-center text-frsh-cream">{t('vision.mission.title')}</h2>
            <Collapsible open={openPanel === 'mission'}>
              <CollapsibleTrigger className="w-full">
                <p className="text-frsh-cream italic text-center">
                  {t('vision.mission.preview')}
                  <motion.span 
                    className="block text-frsh-yellow mt-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {openPanel === 'mission' ? t('vision.showLess') : t('vision.readMore')}
                  </motion.span>
                </p>
              </CollapsibleTrigger>
              <AnimatePresence>
                {openPanel === 'mission' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CollapsibleContent className="mt-4 bg-frsh-yellow/10 p-4 rounded-lg">
                      <p className="text-frsh-cream italic leading-relaxed">
                        {t('vision.mission.full')}
                      </p>
                    </CollapsibleContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Collapsible>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <h2 className="text-2xl font-playfair font-semibold mb-2 text-frsh-green">
                {t('vision.philosophy.title')}
              </h2>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="absolute -right-5 -top-3 text-frsh-yellow w-4 h-4" />
              </motion.div>
            </div>
            <p className="text-lg italic text-frsh-gray mb-8 max-w-2xl mx-auto">
              {t('vision.philosophy.tagline')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophyItems.map((item) => (
              <motion.div 
                key={item.id}
                className="p-5 bg-frsh-green shadow-sm border border-frsh-yellow/20 rounded-lg transition-all duration-300"
                variants={mobileCardVariants}
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ 
                  scale: 0.95
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              >
                <div className="relative text-center mb-3">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className="w-6 h-6 text-frsh-yellow mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-center text-frsh-cream">{item.title}</h3>
                <motion.p 
                  className="text-frsh-cream text-center text-sm"
                  initial={{ opacity: 0.8 }}
                  animate={{ 
                    opacity: activeCard === item.id ? 1 : 0.8,
                    y: 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;
