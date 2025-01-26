import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

const Rules = () => {
  const { t } = useLanguage();

  const guidelines = [
    {
      title: t.rules.sections.matchRules.title,
      items: t.rules.sections.matchRules.items
    },
    {
      title: t.rules.sections.fairPlay.title,
      items: t.rules.sections.fairPlay.items
    },
    {
      title: t.rules.sections.penalties.title,
      items: t.rules.sections.penalties.items
    }
  ];

  return (
    <section id="guidelines" className="py-20 bg-[#030303] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#C9AD75]">{t.rules.title}</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {guidelines.map((section, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="bg-[#030303] border border-white/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold text-[#C9AD75] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-1 bg-[#45A59D]/10 rounded">
                        <CheckCircle className="h-4 w-4 text-[#45A59D]" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;