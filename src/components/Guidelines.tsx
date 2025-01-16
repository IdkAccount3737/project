import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Guidelines = () => {
  const guidelines = [
    {
      title: 'Požiadavky na Tím',
      items: [
        'Tímy musia mať 5 hlavných hráčov a 1-2 náhradníkov',
        'Všetci hráči musia byť starší ako 16 rokov',
        'Tímy musia reprezentovať európsku krajinu',
        'Vyžaduje sa platná dokumentácia pre všetkých členov tímu'
      ]
    },
    {
      title: 'Technické Požiadavky',
      items: [
        'Stabilné internetové pripojenie (minimálne 10Mbps)',
        'Aktualizovaná verzia Mobile Legends: Bang Bang',
        'Inštalácia Discord pre komunikáciu',
        'Odporúča sa záložné zariadenie'
      ]
    },
    {
      title: 'Pravidlá Správania',
      items: [
        'Profesionálne správanie počas zápasov',
        'Rešpekt voči súperom a rozhodcom',
        'Presnosť na všetky naplánované zápasy',
        'Jasná komunikácia s turnajovými administrátormi'
      ]
    }
  ];

  return (
    <section id="guidelines" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#C9AD75]">Smernice</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {guidelines.map((section, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="bg-[#1a1a1a] p-8 rounded-xl h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-[#45A59D] mb-6">
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
                      <CheckCircle className="h-6 w-6 text-[#C9AD75] flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;