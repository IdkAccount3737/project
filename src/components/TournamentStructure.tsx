import React from 'react';

const TournamentStructure = () => {
  return (
    <section id="tournament" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#C9AD75]">Štruktúra Turnaja</h2>
          <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-4">Skupinová Fáza</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 16 tímov rozdelených do 4 skupín</li>
                <li>• Formát každý s každým</li>
                <li>• Najlepšie z 3 zápasov</li>
                <li>• Top 2 tímy z každej skupiny postupujú</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-4">Playoff</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Vyraďovací systém</li>
                <li>• Štvrťfinále: Najlepšie z 3</li>
                <li>• Semifinále: Najlepšie z 5</li>
                <li>• Finále: Najlepšie z 5</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-4">Harmonogram</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Skupinová fáza: 1.-3. týždeň</li>
                <li>• Štvrťfinále: 4. týždeň</li>
                <li>• Semifinále: 5. týždeň</li>
                <li>• Finále: 6. týždeň</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#C9AD75] mb-4">Výherné Ceny</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 1. miesto: €10,000</li>
                <li>• 2. miesto: €5,000</li>
                <li>• 3. miesto: €2,500</li>
                <li>• 4. miesto: €1,500</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentStructure;