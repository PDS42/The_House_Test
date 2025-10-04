import React from 'react';
import { Home, Users, Sparkles, Heart } from 'lucide-react';

export default function AccommodationSection() {
  const images = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/d03ad36ba_TheHouse-Chambre.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/e795be0c6_TheHouse-Chambre2.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/ea9e22838_TheHouse-salleamanger.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/d5cb3ba21_TheHouse-Salon.jpg"
  ];

  const features = [
    { icon: Home, title: 'Espace Généreux', description: 'Une villa spacieuse pensée pour votre confort' },
    { icon: Users, title: 'Accueil Chaleureux', description: 'Un cadre idéal pour vos séjours en groupe' },
    { icon: Sparkles, title: 'Décoration Soignée', description: 'Design moderne et ambiance cosy' },
    { icon: Heart, title: 'Tout Équipé', description: 'Équipements haut de gamme à disposition' }
  ];

  return (
    <section id="logement" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-[#C9A770] mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-[#2B2D5C] mb-6 tracking-wide">
            Logement
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Un havre de paix où luxe et confort se rencontrent pour créer une expérience d'hébergement unique
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group ${idx === 0 ? 'md:col-span-2 h-96' : 'h-80'}`}
            >
              <img
                src={img}
                alt={`Intérieur ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D5C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#2B2D5C]/5 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full">
                <feature.icon className="w-7 h-7 text-[#2B2D5C] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium text-[#2B2D5C] mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}