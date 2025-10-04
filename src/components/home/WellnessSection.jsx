import React from 'react';
import { Waves, Sun, Wind, Flower2 } from 'lucide-react';

export default function WellnessSection() {
  const benefits = [
    { icon: Waves, text: 'Piscine privée chauffée' },
    { icon: Sun, text: 'Espaces extérieurs spacieux' },
    { icon: Wind, text: 'Cadre paisible et ressourçant' },
    { icon: Flower2, text: 'Idéal pour retraites yoga' }
  ];

  return (
    <section id="wellness" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="h-px w-16 bg-[#C9A770] mb-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-[#2B2D5C] mb-8 tracking-wide">
              Santé & Bien-être
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
              Transformez The House en votre sanctuaire de bien-être. Notre espace extérieur et notre piscine offrent 
              le cadre parfait pour des retraites de yoga, séances de méditation, ou simplement pour vous ressourcer 
              en toute sérénité.
            </p>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2B2D5C]/5 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#2B2D5C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 font-light">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#2B2D5C] text-white font-medium tracking-wider hover:bg-[#C9A770] transition-all duration-300"
            >
              Organiser une retraite
            </button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative overflow-hidden h-64 group">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/03dd3561a_TheHouse-piscinebest.jpg"
                  alt="Piscine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden h-80 group">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/4ed73eaee_TheHouse-Exterpiscine.jpg"
                  alt="Extérieur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="relative overflow-hidden h-96 group">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/03dd3561a_TheHouse-piscinebest.jpg"
                  alt="Vue piscine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}