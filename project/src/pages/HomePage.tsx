import React from 'react';
import { Laptop, Smartphone, MapPin, Mail, Phone, Gamepad } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Decorative header spacing */}
      <div className="flex flex-col items-center mb-16 pt-8">
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-2"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-50"></div>
      </div>

      <section id="hero" className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.heroTitle}
        </h2>
        <p className="text-xl mb-8 text-gray-700">{t.heroSubtitle}</p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t.contactUs}
        </a>
      </section>

      <section id="services" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.ourServices}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Laptop className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t.computerRepair}</h3>
            <p className="text-gray-700 leading-relaxed">{t.computerRepairDesc}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Smartphone className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t.mobileRepair}</h3>
            <p className="text-gray-700 leading-relaxed">{t.mobileRepairDesc}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Gamepad className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t.consoleRepair}</h3>
            <p className="text-gray-700 leading-relaxed">{t.consoleRepairDesc}</p>
          </div>
        </div>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.aboutTitle}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">{t.aboutP1}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.aboutP2}</p>
        </div>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.contactTitle}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 ml-4">2347 rue des ormeaux, Montreal</p>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@technick.info" className="text-orange-600 hover:text-orange-700 transition-colors ml-4">
                  info@technick.info
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <a href="tel:5143534333" className="text-orange-600 hover:text-orange-700 transition-colors ml-4">
                  (514) 353-4333
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg">
            <div className="flex-grow">
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=2347+rue+des+ormeaux,Montreal"
                allowFullScreen
              />
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2347+rue+des+ormeaux,Montreal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {t.getDirections}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;