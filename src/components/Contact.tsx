import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#C9AD75]">Kontaktujte nás</h2>
          <div className="w-24 h-1 bg-[#45A59D] mx-auto mt-4"></div>
        </div>

        <div className="bg-black p-8 rounded-xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#C9AD75]">
                  Meno
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 
                           px-4 py-3 focus:ring-2 focus:ring-[#45A59D] focus:border-transparent"
                  placeholder="Vaše meno"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C9AD75]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 
                           px-4 py-3 focus:ring-2 focus:ring-[#45A59D] focus:border-transparent"
                  placeholder="vas@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#C9AD75]">
                  Správa
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 
                           px-4 py-3 focus:ring-2 focus:ring-[#45A59D] focus:border-transparent resize-none"
                  placeholder="Vaša správa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#45A59D] text-white py-3 px-6 rounded-lg font-medium 
                         hover:bg-[#3d918a] transition-colors"
              >
                Odoslať správu
              </button>
            </form>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#C9AD75]" />
                <div>
                  <h3 className="text-lg font-medium text-[#C9AD75]">Lokácia</h3>
                  <p className="text-gray-300">Európa</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#C9AD75]" />
                <div>
                  <h3 className="text-lg font-medium text-[#C9AD75]">Email</h3>
                  <p className="text-gray-300">kontakt@surgeeuropa.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#C9AD75]" />
                <div>
                  <h3 className="text-lg font-medium text-[#C9AD75]">Telefón</h3>
                  <p className="text-gray-300">+421 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;