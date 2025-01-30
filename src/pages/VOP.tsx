import React from 'react';
import FadeIn from '../components/animations/FadeIn';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const VOP = () => {
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

        <FadeIn delay={0.2}>
          <motion.div
            className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 rounded-xl p-12 
                     hover:border-[#45A59D]/50 transition-colors duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Construction className="w-16 h-16 text-[#45A59D] mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-[#C9AD75] mb-4">
              Under Development
            </h2>
            <p className="text-gray-400 text-lg">
              This page is currently under development. Please check back later.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
};

export default VOP;
