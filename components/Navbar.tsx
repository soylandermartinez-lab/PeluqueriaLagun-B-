
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 glass border-b border-zinc-200 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <a href="#inicio" className="font-serif text-2xl font-bold tracking-tighter text-zinc-900 hover:text-gold transition-all">
              LAGUN
            </a>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#inicio" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold text-zinc-800 transition-all">Inicio</a>
            <a href="#servicios" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold text-zinc-800 transition-all">Servicios</a>
            <a href="#reservas" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold text-zinc-800 transition-all">Citas</a>
            <a href="#contacto" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold text-zinc-800 transition-all">Contacto</a>
            <a href="#reservas" className="ml-6 bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] font-bold hover:bg-gold transition-all transform hover:scale-105 shadow-lg shadow-black/10">RESERVAR</a>
          </div>

          <div className="md:hidden flex items-center">
             <a href="#reservas" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-[10px] font-bold shadow-md">RESERVAR</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
