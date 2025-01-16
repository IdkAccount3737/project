import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in the tournament?',
      answer: 'The tournament is open to all European teams that meet our eligibility criteria. Players must be at least 16 years old and reside in Europe.'
    },
    {
      question: 'What is the prize pool?',
      answer: 'The total prize pool will be announced before the tournament begins. Prizes will be distributed among top-performing teams.'
    },
    {
      question: 'How do I register my team?',
      answer: 'Registration can be completed through our tournament portal. Make sure to have all team members\' information ready before registering.'
    },
    {
      question: 'What is the tournament format?',
      answer: 'The tournament follows a group stage followed by single elimination playoffs. Detailed format information can be found in the Tournament Structure section.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0a0a0a] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#C9AD75]">FaQ</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="relative overflow-hidden"
                initial={false}
              >
                <motion.button
                  className="w-full p-6 text-left bg-[#1a1a1a] rounded-xl border border-white/10 focus:outline-none group"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#F9CB28] transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-[#F9CB28]" />
                    </motion.div>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-4 text-gray-400">{faq.answer}</p>
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