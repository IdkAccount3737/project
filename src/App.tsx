import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Guidelines from './components/Guidelines';
import Rules from './components/Rules';
import TournamentStructure from './components/TournamentStructure';
import Footer from './components/Footer';
import VOP from './pages/VOP';
import Tournament from './pages/Tournament';
import { Contact } from 'lucide-react';

const HomePage = () => (
  <>
    <Hero />
    <TournamentStructure />
    <About />
    <Rules />
    <FAQ />
    <Footer />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const showBackground = location.pathname === '/home';

  return (
    <>
      {showBackground && <Background />}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/terms" element={<VOP />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tournament" element={<Tournament />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;