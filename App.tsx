
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import { BUSINESS_NAME } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-zinc-900 selection:bg-gold selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ServicesSection />
        <BookingSection />
        <ContactSection />
      </main>

      <footer className="py-32 bg-[#F4F4F2] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-24">
             <div className="text-center md:text-left space-y-4">
                <h2 className="font-serif text-4xl font-bold tracking-tighter text-zinc-900 uppercase">{BUSINESS_NAME}</h2>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-gold">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-[11px]"></i>)}
                  <span className="text-zinc-600 text-[10px] font-bold ml-4 tracking-[0.3em] uppercase">Excelencia Garantizada</span>
                </div>
             </div>
             
             <div className="flex gap-12">
               <a href="#" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-gold text-zinc-800 group-hover:text-gold transition-all duration-500 transform group-hover:-translate-y-2 bg-white shadow-sm">
                   <i className="fa-brands fa-instagram text-2xl"></i>
                 </div>
                 <span className="text-[8px] uppercase tracking-widest text-zinc-700 font-bold group-hover:text-gold transition-all">Instagram</span>
               </a>
               <a href="#" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-gold text-zinc-800 group-hover:text-gold transition-all duration-500 transform group-hover:-translate-y-2 bg-white shadow-sm">
                   <i className="fa-brands fa-whatsapp text-2xl"></i>
                 </div>
                 <span className="text-[8px] uppercase tracking-widest text-zinc-700 font-bold group-hover:text-gold transition-all">WhatsApp</span>
               </a>
             </div>
          </div>
          
          <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-bold">
              © {new Date().getFullYear()} {BUSINESS_NAME}. SANTURTZI. DONDE NACE EL ESTILO.
            </p>
            <div className="flex gap-10">
               <a href="#" className="text-[9px] uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-all underline decoration-gold/0 hover:decoration-gold/100 underline-offset-4">Privacidad</a>
               <a href="#" className="text-[9px] uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-all underline decoration-gold/0 hover:decoration-gold/100 underline-offset-4">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
