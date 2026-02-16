
import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-40 bg-[#F4F4F2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-24 text-center reveal">
          <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Nuestras Tarifas</span>
          <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 tracking-tight">Servicios</h2>
        </div>

        <div className="grid grid-cols-1 gap-y-2 reveal">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative flex flex-col md:flex-row justify-between md:items-center py-10 border-b border-zinc-200 hover:border-gold/20 transition-all duration-500">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-1 h-0 bg-gold group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-zinc-900 group-hover:text-gold transition-colors">{service.name}</h3>
                  <span className="h-[1px] w-6 bg-zinc-300 group-hover:bg-gold/40 transition-colors"></span>
                </div>
                <p className="text-zinc-700 text-sm font-medium max-w-lg leading-relaxed">{service.description}</p>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center gap-8">
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Inversión</span>
                  <span className="text-4xl font-serif text-zinc-900 group-hover:text-gold transition-colors">{service.price}</span>
                </div>
                <a href="#reservas" className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-800 group-hover:border-gold group-hover:text-gold transition-all transform group-hover:rotate-45 bg-white shadow-sm">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
