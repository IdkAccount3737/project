import React from 'react';

const VOP = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Všeobecné obchodné podmienky</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Všeobecné ustanovenia</h2>
          <p>
            Tieto všeobecné obchodné podmienky upravujú práva a povinnosti medzi predávajúcim
            a kupujúcim pri uzatváraní kúpnych zmlúv prostredníctvom internetového obchodu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Objednávka a uzatvorenie zmluvy</h2>
          <p>
            Objednávka kupujúceho je návrhom na uzatvorenie kúpnej zmluvy. Kúpna zmluva vzniká
            potvrdením objednávky predávajúcim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Dodacie podmienky</h2>
          <p>
            Predávajúci sa zaväzuje dodať tovar v dohodnutej lehote. Dodacia lehota je zvyčajne
            3-5 pracovných dní od potvrdenia objednávky.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Platobné podmienky</h2>
          <p>
            Kupujúci je povinný zaplatiť kúpnu cenu vrátane nákladov na doručenie tovaru
            prostredníctvom dostupných platobných metód.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VOP;
