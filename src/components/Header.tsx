import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <a href="/" className="font-display font-black text-2xl tracking-tighter uppercase">
              KicksLab<span className="text-brand-accent">.</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-10">
              {['New Arrivals', 'Men', 'Women', 'Collections', 'Sale'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-black hover:underline underline-offset-8 transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <Search className="w-4 h-4" />
              Search
            </button>
            
            <div className="flex items-center gap-4 border-l border-black pl-6">
              <button 
                onClick={onOpenCart}
                className="group relative w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['New Arrivals', 'Men', 'Women', 'Collections', 'Sale'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block font-medium text-lg text-gray-900"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
