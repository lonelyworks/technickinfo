import React, { useState } from 'react';
import { Cpu, Monitor, Wrench, DollarSign, Shield, Clock, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function BuildPcPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section 
        className="relative text-center py-24 mb-16 rounded-3xl overflow-hidden"
        style={{ 
          backgroundImage: 'url("/images/gaming-desk-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        />
        
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t.buildPcHero}
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            {t.buildPcSubtitle}
          </p>
          
          {/* Coming Soon Notice */}
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6">{t.buildPcComingSoon}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.enterEmail}
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-400 flex-grow max-w-md"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {t.notifyMe}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Shield className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Garantie Étendue</h3>
            <p className="text-gray-700">Tous nos composants sont couverts par une garantie minimale d'un an, pouvant aller jusqu'à 5 ans selon les pièces sélectionnées.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Assemblage Rapide</h3>
            <p className="text-gray-700">Votre PC personnalisé sera assemblé et prêt en seulement 2 à 3 jours ouvrables après réception de tous les composants.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Award className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Composants Fiables</h3>
            <p className="text-gray-700">Nous sélectionnons méticuleusement des composants de marques réputées, testés et approuvés pour leur fiabilité et leurs performances.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Heart className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Expertise Technique</h3>
            <p className="text-gray-700">Notre équipe de techniciens expérimentés possède de nombreuses années d'expérience dans l'assemblage de PC sur mesure et la sélection de composants.</p>
          </div>
        </div>
      </section>

      {/* Why Build Custom Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.whyBuildPc}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start mb-6">
              <Cpu className="w-12 h-12 text-orange-500 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.reason1Title}</h3>
                <p className="text-gray-700">{t.reason1Desc}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <Monitor className="w-12 h-12 text-orange-500 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.reason2Title}</h3>
                <p className="text-gray-700">{t.reason2Desc}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start mb-6">
              <Wrench className="w-12 h-12 text-orange-500 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.reason3Title}</h3>
                <p className="text-gray-700">{t.reason3Desc}</p>
              </div>
            </div>
            <div className="flex items-start">
              <DollarSign className="w-12 h-12 text-orange-500 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.reason4Title}</h3>
                <p className="text-gray-700">{t.reason4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuildPcPage;