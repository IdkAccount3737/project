import React from 'react';
import { Trophy, Users, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

const TournamentStructure = () => {
  const { t } = useLanguage();

  return (
    <section id="tournament" className="py-20 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#C9AD75]">{t.structure.title}</h2>
            <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="inline-flex p-3 bg-[#45A59D]/10 rounded-lg mb-6">
                <Trophy className="h-8 w-8 text-[#45A59D]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-3">
                {t.structure.phases.qualification.title}
              </h3>
              <p className="text-gray-300">
                {t.structure.phases.qualification.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="inline-flex p-3 bg-[#45A59D]/10 rounded-lg mb-6">
                <Users className="h-8 w-8 text-[#45A59D]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-3">
                {t.structure.phases.groups.title}
              </h3>
              <p className="text-gray-300">
                {t.structure.phases.groups.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <div className="inline-flex p-3 bg-[#45A59D]/10 rounded-lg mb-6">
                <Calendar className="h-8 w-8 text-[#45A59D]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-3">
                {t.structure.phases.playoffs.title}
              </h3>
              <p className="text-gray-300">
                {t.structure.phases.playoffs.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <div className="inline-flex p-3 bg-[#45A59D]/10 rounded-lg mb-6">
                <Award className="h-8 w-8 text-[#45A59D]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-3">
                {t.structure.phases.finals.title}
              </h3>
              <p className="text-gray-300">
                {t.structure.phases.finals.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TournamentStructure;
