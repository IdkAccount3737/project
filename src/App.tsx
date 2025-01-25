import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import VOP from './pages/VOP';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <TournamentStructure />
    <FAQ />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/vop" element={<VOP />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;