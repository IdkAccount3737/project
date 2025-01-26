import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Trophy, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const features = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Profesionálne Turnaje',
      description: 'Súťažte v pravidelných turnajoch s atraktívnymi cenami'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Aktívna Komunita',
      description: 'Pripojte sa k rastúcej komunite hráčov z celej Európy'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Medzinárodná Platforma',
      description: 'Stretávajte hráčov z rôznych krajín a kultúr'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#45A59D]/20 to-[#C9AD75]/20" />
          <div className="absolute inset-0 bg-[url('/src/res/pattern.png')] opacity-30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-[#C9AD75] to-[#FFA500] bg-clip-text text-transparent">
                SURGE EUROPE
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Profesionálne turnaje a komunita pre hráčov v Európe
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/tournament"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#45A59D] to-[#2C7A73] 
                         text-white rounded-lg hover:shadow-lg hover:shadow-[#45A59D]/20 transition-all duration-300"
              >
                <span>Turnaje</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Circles */}
        <motion.div
          className="absolute -bottom-40 left-0 w-96 h-96 bg-[#45A59D]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 bg-[#C9AD75]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 relative z-10"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 rounded-xl border border-white/10
                         hover:border-[#45A59D]/50 transition-all duration-300 group"
              >
                <div className="p-4 bg-[#45A59D]/10 rounded-lg w-fit mb-6 group-hover:bg-[#45A59D]/20 transition-colors">
                  {React.cloneElement(feature.icon, {
                    className: "text-[#45A59D]"
                  })}
                </div>
                <h3 className="text-xl font-bold text-[#C9AD75] mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
