import React, { useState } from 'react';
import { Mail, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `Contact Form: ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:vexzure@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
              className="w-full max-w-2xl bg-[#111111] rounded-2xl border border-white/10 shadow-xl 
                       overflow-y-auto max-h-[90vh]"
              onClick={e => e.stopPropagation()}
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
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#C9AD75] mb-1">
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
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
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg 
                                   text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#45A59D]
                                   resize-none"
                          placeholder={t.contact.messagePlaceholder}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 bg-[#45A59D] text-white rounded-lg font-medium 
                                 hover:bg-[#3d918a] transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : t.contact.send}
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
                        <Mail className="h-6 w-6 text-[#45A59D]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#C9AD75]">{t.contact.emailLabel}</h3>
                        <p className="text-gray-400 mt-1">vexzure@proton.me</p>
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
