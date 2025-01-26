import React from 'react';
import FadeIn from './animations/FadeIn';
import GlowingBorder from './animations/GlowingBorder';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#C9AD75]">{t.about.title}</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <GlowingBorder>
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Esports Tournament"
                className="rounded-lg"
              />
            </GlowingBorder>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <p className="text-gray-300">
                {t.about.intro}
              </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.4}>
              <p className="text-gray-300">
                {t.about.experience}
              </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.6}>
              <p className="text-gray-300">
                {t.about.join}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;