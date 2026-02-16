
import React from 'react';

const SignatureSection: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1599351435612-1871f28bb198?auto=format&fit=crop&q=80&w=800', label: 'THE CLASSIC', style: 'col-span-1 row-span-2 mt-20' },
    { url: 'https://images.unsplash.com/photo-1621605815841-aa88c82b028c?auto=format&fit=crop&q=80&w=800', label: 'SHARP FADE', style: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=800', label: 'SIGNATURE BEARD', style: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="signature" className="py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-10 reveal">
            <span className="text-gold text-xs font-bold tracking-[0.5em] uppercase block">El Diferencial</span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">El Sello <br/><span className="text-gold italic">Lagun</span></h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
              No somos una peluquería más. Creamos identidades visuales que trascienden las modas. Cada corte es una obra firmada por nuestros maestros.
            </p>
            <div className="pt-10 flex gap-8 border-t border-white/5">
              <div>
                <p className="text-3xl font-serif text-white">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Años de Arte</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Satisfacción</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-6 reveal" style={{animationDelay: '0.2s'}}>
            {images.map((img, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-[2rem] border border-white/5 ${img.style}`}>
                <img 
                  src={img.url} 
                  alt={img.label}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-xl text-white italic group-hover:text-gold transition-colors">{img.label}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mt-1">SANTURTZI EXCLUSIVE</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
