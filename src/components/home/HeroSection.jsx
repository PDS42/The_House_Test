import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('logement')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/03dd3561a_TheHouse-piscinebest.jpg"
          alt="The House Marseille"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B2D5C]/70 via-[#2B2D5C]/50 to-[#2B2D5C]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/185010f5a_LOGO-TheHouse.jpg"
            alt="The House Logo"
            className="h-32 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider">
          Un lieu d'exception
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-12">
          Au cœur de Marseille, découvrez un espace unique alliant luxe, confort et polyvalence
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById('logement')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-white text-[#2B2D5C] font-medium tracking-wider hover:bg-[#C9A770] hover:text-white transition-all duration-300 shadow-2xl"
          >
            Découvrir
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border-2 border-white text-white font-medium tracking-wider hover:bg-white hover:text-[#2B2D5C] transition-all duration-300"
          >
            Nous contacter
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </button>
    </section>
  );
}