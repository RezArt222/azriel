/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        
        {/* Marquee Stats Section */}
        <div className="bg-black py-8 border-y border-black overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-12 text-white font-display font-black italic text-xl uppercase tracking-widest opacity-90">
            {Array(10).fill("QUANTUM TECHNOLOGY — LAB EDITION 0.1 — WORLDWIDE DATA ACCESS — KICKSLAB PROTOCOL").map((text, i) => (
              <span key={i} className="flex items-center gap-12">
                {text}
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
              </span>
            ))}
          </div>
        </div>

        <ProductGrid onAddToCart={handleAddToCart} />
        
        {/* Newsletter / Feature Section */}
        <section className="bg-white border-t border-black relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-black">
                    <div className="lg:w-1/2 p-12 sm:p-20 flex flex-col justify-center">
                        <h2 className="font-display font-black text-6xl sm:text-8xl uppercase tracking-tighter italic mb-10 leading-[0.8]">
                            Join the <br /> <span className="text-brand-accent">Protocol.</span>
                        </h2>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-12 max-w-sm leading-loose">
                            Access early drops and exclusive lab data before the public release.
                        </p>
                        <div className="flex h-16 border border-black max-w-md">
                            <input 
                                type="email" 
                                placeholder="YOUR@EMAIL.COM" 
                                className="flex-1 bg-white px-6 font-bold text-[10px] uppercase tracking-widest outline-none"
                            />
                            <button className="bg-black text-white px-10 font-black italic text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors">
                                ACCESS
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative bg-brand-bg flex items-center justify-center p-20">
                        <div className="absolute inset-20 border border-black opacity-10 pointer-events-none" />
                        <img 
                            src="https://images.unsplash.com/photo-1512374382149-4332c6c75d61?auto=format&fit=crop&q=80&w=800" 
                            alt="Lifestyle"
                            className="w-full aspect-[4/5] object-cover grayscale border border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-500"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
}
