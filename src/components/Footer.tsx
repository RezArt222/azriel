export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
          <div className="p-12 md:col-span-1 border-r border-black flex flex-col justify-between">
            <div>
              <a href="/" className="font-display font-black text-4xl tracking-tighter uppercase italic">
                KICKS<span className="text-brand-accent">LAB.</span>
              </a>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-6 leading-relaxed max-w-[180px]">
                Quality, performance, and geometric precision since 2026.
              </p>
            </div>
          </div>
          
          <div className="p-12 border-r border-black">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-gray-400">Archive</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">Featured</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">Sale</a></li>
            </ul>
          </div>
          
          <div className="p-12 border-r border-black">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-gray-400">Support</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">Delivery</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">Returns</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors italic">Privacy</a></li>
            </ul>
          </div>
          
          <div className="p-12 flex flex-col justify-between bg-brand-bg">
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 text-gray-400">Connect</h4>
              <div className="flex h-12 border border-black bg-white">
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="flex-1 px-4 text-[10px] font-bold tracking-widest uppercase outline-none"
                />
                <button className="px-6 border-l border-black font-black text-[10px] italic hover:bg-black hover:text-white transition-all uppercase">
                  JOIN
                </button>
              </div>
            </div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-8">
              Access early drops and exclusive data.
            </p>
          </div>
        </div>
        
        <div className="h-20 flex items-center justify-between px-12 bg-white font-bold text-[10px] uppercase tracking-[0.4em] text-gray-400">
          <p>© 2026 KICKSLAB CO.</p>
          <div className="flex gap-12">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Operational
            </span>
            <div className="flex gap-8 text-black">
              <a href="#" className="hover:text-brand-accent">IG</a>
              <a href="#" className="hover:text-brand-accent">TW</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
