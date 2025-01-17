import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxScroll from './animations/ParallaxScroll';
import logo from 'src/res/SURGE_logo_znak_gold.png';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      
      <ParallaxScroll>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
          >
          <img 
              src={logo}
              alt="Trophy" 
              className="mx-auto h-36 w-36 mb-8 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            />
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            SURGE EUROPE
            <motion.span
              className="block text-[#00CED1] mt-2 drop-shadow-[0_0_10px_rgba(0,206,209,0.5)]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              MLBB Tournament
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
           Pridajte sa k prvému turnaju Mobile Legends: Bang Bang v Európe.
          </motion.p>
          
          <motion.a
            href="#tournament"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <span className="relative z-10 text-white">Zaregistrujte sa</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#FFD700]"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-[#00CED1]" />
          </motion.a>
        </div>
      </ParallaxScroll>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Hero;