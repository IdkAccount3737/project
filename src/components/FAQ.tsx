import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 bg-black overflow-hidden">
      <div className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#C9AD75]">
              {t.faq.title}
            </h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="overflow-hidden rounded-xl border border-white/10"
                initial={false}
                animate={{ 
                  borderColor: activeIndex === index ? 'rgba(69, 165, 157, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeIndex === index ? 'rgba(26, 26, 26, 0.8)' : 'rgba(26, 26, 26, 0.4)'
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="w-full p-6 text-left focus:outline-none"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-6 h-6 text-[#45A59D]" />
                    </motion.div>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeInOut",
                          opacity: { duration: 0.2 }
                        }}
                      >
                        <p className="mt-4 text-white leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;