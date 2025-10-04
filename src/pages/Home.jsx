import React, { useEffect } from 'react';
import Navigation from '../components/home/Navigation';
import HeroSection from '../components/home/HeroSection';
import AccommodationSection from '../components/home/AccommodationSection';
import WellnessSection from '../components/home/WellnessSection';
import FilmingSection from '../components/home/FilmingSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navigation />
      <HeroSection />
      <AccommodationSection />
      <WellnessSection />
      <FilmingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}