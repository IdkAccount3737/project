import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../res/SURGE_NAVBAR_LOGO.png';
import ContactDialog from './ContactDialog';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when URL changes
    if (location.hash && location.pathname === '/home') {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const navigation = [
    { name: t.nav.tournaments, href: '/tournament' },
    { name: t.nav.structure, href: location.pathname === '/home' ? '#tournament' : '/structure' },
    { name: t.nav.rules, href: location.pathname === '/home' ? '#guidelines' : '/rules' },
    { name: t.nav.faq, href: location.pathname === '/home' ? '#faq' : '/faq' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/home') {
        // If we're not on the home page, navigate there first
        await navigate('/home');
        // Wait for navigation to complete
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    } else {
      // For non-hash URLs, just navigate normally
      navigate(href);
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sk' : 'en');
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/home" 
              className="flex-shrink-0 group"
            >
              <img 
                src={logo}
                alt="Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href) 
                    ? 'text-[#45A59D]' 
                    : 'text-gray-300 hover:text-[#45A59D]'}`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Button */}
              <button
                onClick={() => setIsContactOpen(true)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-[#45A59D]' 
                    : 'text-gray-300 hover:text-[#45A59D]'}`}
              >
                {t.nav.contact}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 text-gray-300 hover:text-[#45A59D] transition-colors duration-200"
              >
                <Globe className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-[#45A59D] bg-[#45A59D]/10'
                      : 'text-gray-300 hover:text-[#45A59D] hover:bg-[#45A59D]/10'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsOpen(false);
                  }}
                  className={`text-base font-medium ${
                    isActive('/contact')
                      ? 'text-[#45A59D] bg-[#45A59D]/10'
                      : 'text-gray-300 hover:text-[#45A59D] hover:bg-[#45A59D]/10'}`}
                >
                   {t.nav.contact}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
