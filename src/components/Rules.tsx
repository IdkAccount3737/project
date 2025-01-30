import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

const Rules = () => {
  const { t } = useLanguage();

  const guidelines = [
    {
      title: t.rules.sections.generalRules.title,
      items: t.rules.sections.generalRules.items
    },
    {
      title: t.rules.sections.technicalIssues.title,
      items: t.rules.sections.technicalIssues.items
    },
  ];

  return (
    <section id="guidelines" className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#C9AD75]">{t.rules.title}</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
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
                        <CheckCircle className="h-5 w-5 text-[#45A59D] mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;