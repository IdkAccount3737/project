import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: 'https://facebook.com' },
    { icon: <Twitter className="h-6 w-6" />, href: 'https://twitter.com' },
    { icon: <Instagram className="h-6 w-6" />, href: 'https://instagram.com' },
    { icon: <Youtube className="h-6 w-6" />, href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#45A59D] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              {new Date().getFullYear()} Surge Europe. All rights reserved.
            </p>
            <Link to="/vop" className="text-gray-400 hover:text-[#45A59D] transition-colors">
              Všeobecné obchodné podmienky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;