import React from 'react';
import { Camera, Film, Image, Lightbulb } from 'lucide-react';

export default function FilmingSection() {
  const capabilities = [
    { icon: Camera, title: 'Shootings Photo', description: 'Décors variés intérieurs & extérieurs' },
    { icon: Film, title: 'Tournages Vidéo', description: 'Clips, publicités, courts-métrages' },
    { icon: Image, title: 'Contenus Réseaux', description: 'Cadre Instagram-friendly unique' },
    { icon: Lightbulb, title: 'Lumière Naturelle', description: 'Luminosité exceptionnelle toute la journée' }
  ];

  return (
    <section id="tournage" className="py-24 md:py-32 bg-[#2B2D5C] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A770]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A770]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-[#C9A770] mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            Location de Tournage
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Un espace modulable et photogénique, parfait pour donner vie à vos projets créatifs
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Showcase */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden h-48 group">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/d5cb3ba21_TheHouse-Salon.jpg"
                    alt="Salon"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative overflow-hidden h-64 group">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/ea9e22838_TheHouse-salleamanger.jpg"
                    alt="Salle à manger"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="relative overflow-hidden h-64 group">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/4ed73eaee_TheHouse-Exterpiscine.jpg"
                    alt="Extérieur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative overflow-hidden h-48 group">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/d03ad36ba_TheHouse-Chambre.jpg"
                    alt="Chambre"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-[#C9A770]">
              Votre décor sur mesure
            </h3>
            <p className="text-lg text-white/80 mb-12 font-light leading-relaxed">
              The House offre une palette de décors exceptionnels : salon design avec double hauteur, 
              chambres épurées, salle à manger baignée de lumière, et un extérieur méditerranéen avec piscine. 
              Chaque espace a été pensé pour sublimer vos créations visuelles.
            </p>

            <div className="space-y-8">
              {capabilities.slice(0, 2).map((cap, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A770]/20 rounded-full flex items-center justify-center">
                    <cap.icon className="w-6 h-6 text-[#C9A770]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{cap.title}</h4>
                    <p className="text-white/70 font-light">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full">
                <cap.icon className="w-7 h-7 text-[#C9A770] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">
                {cap.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}