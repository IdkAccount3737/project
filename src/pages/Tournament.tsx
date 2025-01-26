import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Play, Trophy, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Tournament {
  id: string;
  name: string;
  country: string;
  registrationEnd: string;
  streamUrl: string;
  teams: string[];
  maxTeams: number;
  startTime: string;
  status: 'open' | 'closed' | 'live';
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Surge Winter Cup',
    country: 'Slovensko',
    registrationEnd: '2024-02-10',
    streamUrl: 'https://twitch.tv/surgeeurope',
    teams: ['Team A', 'Team B', 'Team C'],
    maxTeams: 8,
    startTime: '2024-02-15T18:00:00',
    status: 'open'
  },
  {
    id: '2',
    name: 'Prague Gaming Masters',
    country: 'Česko',
    registrationEnd: '2024-02-15',
    streamUrl: 'https://twitch.tv/praguemasters',
    teams: ['Team X', 'Team Y'],
    maxTeams: 8,
    startTime: '2024-02-20T19:00:00',
    status: 'open'
  },
  {
    id: '3',
    name: 'Warsaw League',
    country: 'Poľsko',
    registrationEnd: '2024-02-20',
    streamUrl: 'https://twitch.tv/warsawleague',
    teams: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
    maxTeams: 8,
    startTime: '2024-02-10T20:00:00',
    status: 'live'
  }
];

const countries = ['Všetky', 'Slovensko', 'Česko', 'Poľsko'];

const Tournament = () => {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState('Všetky');

  const filteredTournaments = tournaments.filter(tournament => 
    selectedCountry === 'Všetky' ? true : tournament.country === selectedCountry
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sk-SK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('sk-SK', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Filter Section */}
      <section className="pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#C9AD75] text-center mb-8">
            {t.tournament.filterByCountry}
          </h2>
          <div className="flex justify-center space-x-4">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300
                  ${selectedCountry === country 
                    ? 'bg-gradient-to-r from-[#45A59D] to-[#2C7A73] text-white shadow-lg shadow-[#45A59D]/20' 
                    : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#45A59D]/20'}`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredTournaments.map((tournament) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group bg-gradient-to-r from-[#0a0a0a] to-[#111] rounded-xl border border-white/10 
                         hover:border-[#45A59D]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col md:flex-row items-center gap-8">
                  {/* Left Section - Tournament Info */}
                  <div className="flex-1 min-w-[200px] space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-[#45A59D] mb-2">
                      {tournament.status === 'live' && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          {t.tournament.live}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#C9AD75] group-hover:text-[#E5C992] transition-colors">
                      {tournament.name}
                    </h3>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-5 w-5 mr-2 text-[#45A59D]" />
                      <span>{tournament.country}</span>
                    </div>
                  </div>

                  {/* Middle Section - Time and Teams */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-5 w-5 mr-2 text-[#45A59D]" />
                        <span>{t.tournament.registration}: {formatDate(tournament.registrationEnd)}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-5 w-5 mr-2 text-[#45A59D]" />
                        <span>{t.tournament.startTime}: {formatTime(tournament.startTime)}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-5 w-5 mr-2 text-[#45A59D]" />
                        <span>{tournament.teams.length}/{tournament.maxTeams} {t.tournament.teams}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Teams and Buttons */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {tournament.teams.map((team, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-[#45A59D]/10 text-[#45A59D] rounded-full text-sm
                                   hover:bg-[#45A59D]/20 transition-colors cursor-default"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    {tournament.status === 'live' ? (
                      <a
                        href={tournament.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 
                                 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/20"
                      >
                        <Play className="h-5 w-5" />
                        {t.tournament.watchStream}
                      </a>
                    ) : (
                      <button 
                        className="px-6 py-3 bg-gradient-to-r from-[#45A59D] to-[#2C7A73] text-white rounded-lg
                                 hover:shadow-lg hover:shadow-[#45A59D]/20 transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
                                 flex items-center justify-center gap-2"
                        disabled={tournament.status === 'closed'}
                      >
                        <Trophy className="h-5 w-5" />
                        {t.tournament.register}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;