
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isSnipping, setIsSnipping] = useState(false);

  const handleSnip = () => {
    setIsSnipping(true);
    setTimeout(() => {
      setIsSnipping(false);
      const el = document.getElementById('reservas');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 450);
  };

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFDFB]">
      {/* Cinematic Barber Shop Background (Very Light) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber Shop Interior" 
          className="w-full h-full object-cover opacity-[0.10] scale-105 animate-[pulse_12s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDFB] via-[#FDFDFB]/50 to-[#FDFDFB]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl reveal pt-32">
        <h1 className="font-serif text-7xl md:text-[10rem] font-bold tracking-tighter text-zinc-900 mb-8 leading-none">
          <span className="block text-gold text-lg md:text-2xl tracking-[0.5em] font-light italic mb-8 uppercase">Excelencia en cada corte</span>
          LAGUN
        </h1>

        <p className="text-zinc-800 text-sm md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed tracking-wide">
          El estilo que marca la diferencia en Santurtzi. <br/>
          Calidad artesanal y atención personalizada en un ambiente exclusivo.
        </p>

        {/* Social Proof Badge - Contraste mejorado */}
        <div className="mb-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex items-center gap-1.5 text-gold mb-3 scale-110">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star text-xs"></i>
            ))}
          </div>
          <p className="text-[11px] tracking-[0.4em] font-bold text-zinc-700 uppercase bg-white/80 px-6 py-2 rounded-full border border-zinc-200 shadow-sm backdrop-blur-sm">
            4.7 <span className="mx-3 text-zinc-300">/</span> 64 VALORACIONES
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <button 
            onClick={handleSnip}
            className={`group relative flex items-center justify-center w-24 h-24 rounded-full border border-zinc-200 bg-white shadow-xl transition-all duration-700 hover:border-gold gold-glow ${isSnipping ? 'animate-snip' : ''}`}
          >
            <i className={`fa-solid fa-scissors text-4xl transition-all duration-500 ${isSnipping ? 'text-gold' : 'text-zinc-800 group-hover:text-gold group-hover:scale-110'}`}></i>
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.8em] text-zinc-500 font-bold">Solicitar Cita</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
