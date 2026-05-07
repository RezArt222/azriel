import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-black bg-white"
    >
      <div className="relative aspect-square overflow-hidden border-b border-black">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[8px] font-bold uppercase tracking-[0.3em]">
          {product.brand}
        </div>

        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-0 right-0 bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-accent"
        >
          Add to Lab
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-display font-black text-xl leading-none uppercase tracking-tighter">
              {product.name}
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">{product.category}</p>
          </div>
          <p className="font-black text-xl italic">${product.price}</p>
        </div>
        <div className="w-full h-px bg-gray-100" />
        <p className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.color} // SKU-{product.id}026</p>
      </div>
    </motion.div>
  );
}
