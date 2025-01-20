import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Guidelines from './components/Guidelines';
import Rules from './components/Rules';
import TournamentStructure from './components/TournamentStructure';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
        <TournamentStructure />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;