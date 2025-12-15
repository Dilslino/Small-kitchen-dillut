import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProductCard } from './components/ProductCard';
import { MusicPlayer } from './components/MusicPlayer'; // Import MusicPlayer
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrder = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen relative bg-[#FDF6F6]">
      {/* Sticky Header / Navbar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 
        transition-all duration-300
        ${isScrolled ? 'bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm' : 'bg-transparent'}
      `}>
        <div className="max-w-md mx-auto flex justify-between items-center">
           <span className={`font-heading font-bold text-lg text-brand-dark transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
             Small Kitchen by Dillut
           </span>
           <button 
             className="w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center shadow-sm active:scale-90 transition-transform"
             onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
             <ShoppingBag size={18} className="text-brand-dark" />
           </button>
        </div>
      </nav>

      <main className="max-w-md mx-auto w-full relative pb-20">
        {/* Hero Section */}
        <Hero />

        {/* Announcement */}
        <div className="mb-12">
            <Marquee />
        </div>

        {/* Product Showcase */}
        <section id="products" className="px-6 relative z-10">
          <div className="flex flex-col items-center mb-10 text-center">
            <span className="text-brand-secondary font-heading font-bold uppercase tracking-widest text-xs mb-2">Menu Spesial</span>
            {/* Removed "Menu Andalan" text */}
          </div>
          
          <div className="flex flex-col gap-2">
            {PRODUCTS.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                onClick={handleOrder}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 px-6 py-10 text-center border-t border-brand-secondary/20">
          <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">
            © 2025 Small Kitchen by Dillut.
            <br />
            <span className="text-[10px] opacity-60 normal-case mt-1 block">Made with 🩷</span>
          </p>
        </footer>
      </main>

      {/* Floating Elements Container */}
      
      {/* 1. Music Player (Bottom Left) */}
      <MusicPlayer />

      {/* 2. Chat Button (Bottom Right - Visible on scroll) */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <button 
            onClick={() => handleOrder("Halo! Saya ingin cek slot untuk hari ini.")}
            className="bg-brand-dark text-white p-4 rounded-full shadow-2xl shadow-brand-secondary/50 flex items-center gap-2 pr-6 hover:scale-105 active:scale-95 transition-all"
        >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-heading font-bold text-sm">Chat</span>
        </button>
      </div>
    </div>
  );
};

export default App;