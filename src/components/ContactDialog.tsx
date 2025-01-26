import React from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#030303] rounded-2xl border border-white/10 shadow-xl 
                       overflow-y-auto max-h-[90vh]"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-[#C9AD75]">
                    {t.contact.title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#C9AD75] mb-1">
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg 
                                   text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#45A59D]"
                          placeholder={t.contact.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#C9AD75] mb-1">
                          {t.contact.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg 
                                   text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#45A59D]"
                          placeholder={t.contact.emailPlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#C9AD75] mb-1">
                          {t.contact.message}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg 
                                   text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#45A59D]
                                   resize-none"
                          placeholder={t.contact.messagePlaceholder}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 bg-[#45A59D] text-white rounded-lg font-medium 
                                 hover:bg-[#3d918a] transition-colors"
                      >
                        {t.contact.send}
                      </button>
                    </form>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-[#45A59D]/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-[#45A59D]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#C9AD75]">{t.contact.address}</h3>
                        <p className="text-gray-400 mt-1">Bratislava, Slovakia</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-[#45A59D]/10 rounded-lg">
                        <Phone className="h-6 w-6 text-[#45A59D]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#C9AD75]">{t.contact.phone}</h3>
                        <p className="text-gray-400 mt-1">+421 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-[#45A59D]/10 rounded-lg">
                        <Mail className="h-6 w-6 text-[#45A59D]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#C9AD75]">{t.contact.emailLabel}</h3>
                        <p className="text-gray-400 mt-1">info@surgeeurope.gg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;
