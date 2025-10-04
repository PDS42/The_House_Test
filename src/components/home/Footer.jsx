import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2B2D5C] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/185010f5a_LOGO-TheHouse.jpg"
              alt="The House"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/70 font-light leading-relaxed">
              Un lieu d'exception à Marseille pour vos séjours, retraites bien-être et projets créatifs.
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-[#C9A770]">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#C9A770] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#C9A770] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@thehouse-marseille.com" 
                className="w-10 h-10 bg-white/10 hover:bg-[#C9A770] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 font-light">
              contact@thehouse-marseille.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm font-light">
            © 2024 The House Marseille. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-white/50 hover:text-[#C9A770] transition-colors font-light">
              Mentions légales
            </button>
            <button className="text-white/50 hover:text-[#C9A770] transition-colors font-light">
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}