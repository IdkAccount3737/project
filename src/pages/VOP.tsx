import React from 'react';
import FadeIn from '../components/animations/FadeIn';
import { motion } from 'framer-motion';

const VOP = () => {
  const sections = [
    {
      title: '1. Všeobecné ustanovenia',
      content: `Tieto všeobecné obchodné podmienky upravujú práva a povinnosti medzi predávajúcim
        a kupujúcim pri uzatváraní kúpnych zmlúv prostredníctvom internetového obchodu.`
    },
    {
      title: '2. Objednávka a uzatvorenie zmluvy',
      content: `Objednávka kupujúceho je návrhom na uzatvorenie kúpnej zmluvy. Kúpna zmluva vzniká
        potvrdením objednávky predávajúcim.`
    },
    {
      title: '3. Dodacie podmienky',
      content: `Predávajúci sa zaväzuje dodať tovar v dohodnutej lehote. Dodacia lehota je zvyčajne
        3-5 pracovných dní od potvrdenia objednávky.`
    },
    {
      title: '4. Platobné podmienky',
      content: `Kupujúci je povinný zaplatiť kúpnu cenu vrátane nákladov na doručenie tovaru
        prostredníctvom dostupných platobných metód.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#C9AD75] mb-4">
              Všeobecné obchodné podmienky
            </h1>
            <div className="w-32 h-1 bg-[#45A59D] mx-auto"></div>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.1}>
              <motion.div
                className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#45A59D]/50 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-semibold text-[#C9AD75] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 p-6 bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#C9AD75] mb-4">
              Kontaktné informácie
            </h2>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@surgeeurope.com</p>
              <p>Telefón: +421 XXX XXX XXX</p>
              <p>Adresa: Bratislava, Slovenská republika</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default VOP;
