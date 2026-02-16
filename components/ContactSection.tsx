
import React from 'react';
import { PHONE, ADDRESS, SCHEDULE } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-[#FDFDFB] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 reveal">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Ubícanos</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">CONTACTO</h2>
              <p className="text-zinc-800 font-medium leading-relaxed max-w-md">
                Tu peluquería de confianza en el corazón de Santurtzi. <br />
                Estamos en la emblemática calle Santa Eulalia, listos para asesorarte.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold shadow-sm border border-zinc-200 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-bold">Dirección</p>
                  <p className="text-zinc-900 font-bold">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold shadow-sm border border-zinc-200 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-bold">Llámanos</p>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-zinc-900 font-bold hover:text-gold transition-colors">{PHONE}</a>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-zinc-200 max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold mb-4">Horario de Apertura</p>
               {SCHEDULE.map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3 last:border-0">
                   <span className="text-zinc-700 font-bold">{item.day}</span>
                   <span className="text-zinc-900 text-right">
                     {item.morning === 'Cerrado' ? (
                       <span className="text-zinc-400 uppercase text-[9px] tracking-widest font-bold">Cerrado</span>
                     ) : (
                       <div className="flex flex-col items-end">
                        <span className="block font-bold">{item.morning}</span>
                        <span className="block text-zinc-600 text-[10px] font-medium">{item.afternoon}</span>
                       </div>
                     )}
                   </span>
                 </div>
               ))}
            </div>
          </div>

          <div className="h-[600px] rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl reveal">
            <iframe 
              title="Mapa Peluquería Lagun"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.003926830588!2d-3.0336211235123983!3d43.32115147112028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5fb6513689cb%3A0xe54e5883a47895f3!2sC.%20Santa%20Eulalia%2C%2015%2C%2048980%20Santurtzi%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1715850000000!5m2!1ses!2ses" 
              className="w-full h-full"
              style={{ border: 0, filter: 'grayscale(0.1)' }}
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
