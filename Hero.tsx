import React from 'react';
import { BRAND_NAME } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-brand-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Logo Mark */}
        <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-lg border border-white/50 shadow-glass flex items-center justify-center transform rotate-3">
                <span className="font-heading text-2xl font-bold text-brand-dark">sk.</span>
            </div>
        </div>

        {/* Brand Typography */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-[1.2] tracking-tight mb-10">
          {BRAND_NAME}
        </h1>
        
        {/* CTA Button */}
        <button 
          onClick={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white rounded-full font-heading font-bold tracking-wide transition-transform active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Pesan Sekarang</span>
          <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-brand-secondary/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};