import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex border-b border-black">
      {/* Side Vertical Text */}
      <div className="hidden lg:flex w-24 border-r border-black items-center justify-center bg-white">
        <span className="-rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">
          SUMMER RELEASE 2026 / EDITION 0.1
        </span>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        {/* Main Product Display */}
        <div className="lg:col-span-8 p-6 sm:p-12 lg:p-20 flex flex-col justify-center bg-brand-bg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[60px] sm:text-[100px] lg:text-[140px] leading-[0.85] font-black tracking-tighter uppercase italic mb-8">
              Quantum<br/><span className="text-brand-accent">Lab</span>
            </h1>
            <p className="max-w-md text-base text-gray-600 leading-relaxed font-medium mb-12">
              Designed for maximum performance with geometric precision. 
              Our 'Kicks-Logic' technology provides unparalleled comfort in every step.
            </p>

            <div className="flex flex-wrap items-end gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase text-gray-400 mb-4 tracking-widest">Available Sizes</span>
                <div className="flex gap-2">
                  {['40', '41', '42', '43'].map((size) => (
                    <div key={size} className={`w-12 h-12 flex items-center justify-center text-xs font-bold transition-colors ${size === '41' ? 'bg-black text-white' : 'border border-black hover:bg-black hover:text-white cursor-pointer'}`}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <button className="h-16 px-12 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors">
                SHOP COLLECTION — $199
              </button>
            </div>
          </motion.div>
        </div>

        {/* Product Visual Side */}
        <div className="hidden lg:flex lg:col-span-4 border-l border-black bg-white flex-col">
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-80 h-80 border-4 border-dashed border-gray-100 rounded-full animate-[spin_20s_linear_infinite]" />
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: -15 }}
              transition={{ duration: 1, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-full h-auto drop-shadow-2xl translate-x-12"
              alt="Feature Sneaker"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="h-48 border-t border-black grid grid-cols-2">
            <div className="border-r border-black p-8 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Mass</span>
              <span className="text-3xl font-black italic">240g</span>
            </div>
            <div className="p-8 flex flex-col justify-between bg-brand-accent text-white">
              <span className="text-[10px] font-bold uppercase text-blue-200 tracking-widest">Material</span>
              <span className="text-3xl font-black italic">Lab-Mesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
