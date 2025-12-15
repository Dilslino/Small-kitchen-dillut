import React from 'react';
import { Product } from '../types';
import { GlassCard } from './UI/GlassCard';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (message: string) => void;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, index }) => {
  return (
    <div 
      className="w-full mb-6 transform transition-all duration-700"
      style={{ 
        animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards` 
      }}
    >
      <GlassCard hoverEffect={true} className="p-2 cursor-pointer group">
        <div 
          onClick={() => onClick(product.whatsappMessage)}
          className="flex flex-col h-full"
        >
          {/* Visual Area */}
          <div className={`
            h-48 w-full rounded-[24px] 
            bg-gradient-to-br ${product.gradient}
            flex items-center justify-center
            relative overflow-hidden
          `}>
            {/* Abstract Shapes with Enhanced Hover Animation */}
            {/* Shape 1: Rotates and Scales */}
            <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-white/30 rounded-full blur-2xl transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:rotate-45" />
            
            {/* Shape 2: Moves diagonally */}
            <div className="absolute bottom-[-10%] left-[-10%] w-24 h-24 bg-brand-primary/40 rounded-full blur-xl transition-all duration-1000 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6" />
            
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark">
                {product.priceTag}
              </span>
            </div>

             {/* Action Icon */}
             <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <ArrowUpRight size={20} className="text-brand-dark" />
             </div>
          </div>

          {/* Text Content */}
          <div className="p-4 pt-5">
            <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">
              {product.title}
            </h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              {product.subtitle}
            </p>
          </div>
        </div>
      </GlassCard>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};