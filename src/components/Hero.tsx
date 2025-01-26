import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxScroll from './animations/ParallaxScroll';
import logo from '../res/SURGE_logo_znak_gold.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

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
              GAMING ORGANIZATION
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center mt-12"
          >
            <Link
              to="/tournament"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#45A59D] to-[#2C7A73] 
                       text-white rounded-lg font-medium text-lg overflow-hidden
                       hover:shadow-[0_0_20px_rgba(69,165,157,0.4)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#45A59D] to-[#2C7A73] opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative flex items-center gap-3">
                <span>{t.hero.joinTournament}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </ParallaxScroll>
    </div>
  );
};

export default Hero;