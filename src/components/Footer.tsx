import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactDialog from './ContactDialog';

const Footer = () => {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' }
  ];

  const links = [
    { name: t.footer.about, href: '#about' },
    { name: t.nav.tournaments, href: '#tournament' },
    { name: t.nav.faq, href: '#faq' },
    { 
      name: t.nav.contact, 
      href: '#',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setIsContactOpen(true);
      }
    },
    { name: t.footer.termsOfService, href: '/terms' }
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: 'kontakt@surgeeuropa.com' },
    { icon: <Phone className="h-5 w-5" />, text: '+421 123 456 789' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Európa' }
  ];

  return (
    <>
      <footer className="relative">
        {/* Upper Section */}
        <div className="bg-[#030303] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-16">
              {/* Logo and Description */}
              <div className="space-y-8">
                <div>
                  <Link 
                    to="/" 
                    className="inline-block group"
                  >
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#C9AD75] to-[#FFA500] bg-clip-text text-transparent
                                 group-hover:from-[#E5C992] group-hover:to-[#FFB52E] transition-all duration-300">
                      SURGE EUROPE
                    </h3>
                    <div className="w-16 h-1 bg-[#45A59D] mt-4 group-hover:bg-[#5DBEB5] transition-colors"></div>
                  </Link>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {t.footer.description}
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#45A59D]/10 rounded-lg text-[#45A59D] hover:bg-[#45A59D]/20 
                             transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-[#C9AD75]">{t.footer.quickLinks}</h4>
                  <div className="w-12 h-1 bg-[#45A59D] mt-4"></div>
                </div>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        onClick={link.onClick}
                        className="text-gray-400 hover:text-[#45A59D] transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-[#45A59D] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-[#C9AD75]">{t.nav.contact}</h4>
                  <div className="w-12 h-1 bg-[#45A59D] mt-4"></div>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-[#45A59D]/10 rounded-lg">
                        {React.cloneElement(info.icon, {
                          className: "text-[#45A59D]"
                        })}
                      </div>
                      <p className="text-gray-400">{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="bg-black py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                {t.footer.copyright} SURGE EUROPE. {t.footer.allRightsReserved}
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-500 hover:text-[#45A59D] text-sm transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-[#45A59D] text-sm transition-colors">
                  {t.footer.termsOfService}
                </Link>
                <Link to="/cookies" className="text-gray-500 hover:text-[#45A59D] text-sm transition-colors">
                  {t.footer.cookies}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Footer;