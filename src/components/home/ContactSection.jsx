import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-[#C9A770] mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-[#2B2D5C] mb-6 tracking-wide">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Une question ? Un projet ? Nous serions ravis d'échanger avec vous
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-[#2B2D5C] mb-8">
              Informations de contact
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2B2D5C]/5 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#2B2D5C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-medium text-[#2B2D5C] mb-1">Adresse</p>
                  <p className="text-gray-600 font-light">Marseille, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2B2D5C]/5 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2B2D5C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-medium text-[#2B2D5C] mb-1">Email</p>
                  <p className="text-gray-600 font-light">contact@thehouse-marseille.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2B2D5C]/5 group-hover:bg-[#C9A770] transition-colors duration-300 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2B2D5C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-medium text-[#2B2D5C] mb-1">Téléphone</p>
                  <p className="text-gray-600 font-light">+33 (0)6 XX XX XX XX</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden h-64 rounded-lg">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a338941dce621c7450c20e/4ed73eaee_TheHouse-Exterpiscine.jpg"
                alt="The House"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-[#2B2D5C] mb-3">
                  Message envoyé !
                </h3>
                <p className="text-gray-600 font-light">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2B2D5C] mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-200 focus:border-[#C9A770] focus:ring-[#C9A770] rounded-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B2D5C] mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-200 focus:border-[#C9A770] focus:ring-[#C9A770] rounded-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2B2D5C] mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-200 focus:border-[#C9A770] focus:ring-[#C9A770] rounded-none"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2B2D5C] mb-2">
                    Votre message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-gray-200 focus:border-[#C9A770] focus:ring-[#C9A770] rounded-none resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B2D5C] hover:bg-[#C9A770] text-white py-4 rounded-none font-medium tracking-wider transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}