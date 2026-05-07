import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display font-black text-6xl sm:text-8xl uppercase tracking-tighter leading-[0.8] mb-6 italic">
              Lab <br /> <span className="text-brand-accent">Archive.</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
              Curated precision silhouettes. 2026 Collection.
            </p>
          </div>
          
          <div className="flex gap-4 font-bold text-[10px] uppercase tracking-[0.2em]">
            <button className="px-6 py-3 bg-black text-white border border-black italic hover:bg-brand-accent transition-colors">Filter (24)</button>
            <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-all italic">Sort: Featured</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        
        <div className="mt-24 flex justify-center">
            <button className="h-16 px-16 border border-black font-black uppercase text-xs tracking-[0.3em] italic hover:bg-black hover:text-white transition-all">
                Access More
            </button>
        </div>
      </div>
    </section>
  );
}
