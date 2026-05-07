import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] border-l border-black flex flex-col"
          >
            <div className="p-8 border-b border-black flex justify-between items-center bg-white">
              <h2 className="font-display font-black text-3xl uppercase italic tracking-tighter">Lab Bucket<span className="text-brand-accent">.</span></h2>
              <button onClick={onClose} className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-brand-bg">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-200" />
                  </div>
                  <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Your collection is empty</p>
                  <button 
                    onClick={onClose}
                    className="h-14 px-8 border border-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all"
                  >
                    Explore Archive
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-8 group">
                      <div className="w-28 h-28 border border-black bg-white flex-shrink-0 overflow-hidden relative p-2">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-display font-black text-lg uppercase leading-none tracking-tighter">{item.name}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-black transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">{item.brand} // {item.color}</p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                          <div className="flex items-center gap-6 border border-black h-10 px-4">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="disabled:opacity-20 translate-y-[1px]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-black italic w-4 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="translate-y-[1px]">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-black text-lg italic">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-black bg-white space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Shipping</span>
                    <span className="text-brand-accent">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-4xl font-display font-black uppercase italic pt-6 border-t border-black">
                    <span>Total</span>
                    <span>${subtotal}</span>
                  </div>
                </div>
                <button className="w-full h-16 bg-black text-white font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-colors">
                  SECURE CHECKOUT
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
