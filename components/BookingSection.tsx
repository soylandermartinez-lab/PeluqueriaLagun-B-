
import React, { useState, useEffect } from 'react';
import { SERVICES, SCHEDULE } from '../constants';
import { TimeSlot } from '../types';

const BookingSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const generateSlots = () => {
      const dayOfWeek = new Date(selectedDate).toLocaleDateString('es-ES', { weekday: 'long' });
      const daySchedule = SCHEDULE.find(s => s.day.toLowerCase() === dayOfWeek.toLowerCase());
      if (!daySchedule || daySchedule.morning === 'Cerrado') {
        setSlots([]);
        return;
      }
      const generated: TimeSlot[] = [];
      const addSlots = (timeRange: string) => {
        if (!timeRange) return;
        const [start, end] = timeRange.split('–');
        let current = new Date(`${selectedDate}T${start.trim()}:00`);
        const endTime = new Date(`${selectedDate}T${end.trim()}:00`);
        while (current < endTime) {
          const timeStr = current.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
          generated.push({ time: timeStr, available: Math.random() > 0.2 }); 
          current = new Date(current.getTime() + 30 * 60000);
        }
      };
      addSlots(daySchedule.morning);
      addSlots(daySchedule.afternoon);
      setSlots(generated);
    };
    generateSlots();
  }, [selectedDate]);

  if (booked) {
    return (
      <section id="reservas" className="py-32 bg-[#fdfdfb] flex items-center justify-center">
        <div className="text-center space-y-6 reveal p-12 bg-white rounded-[3rem] shadow-xl border border-zinc-100 max-w-md w-full">
          <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mx-auto bg-gold/5 shadow-inner">
            <i className="fa-solid fa-check text-gold text-2xl"></i>
          </div>
          <h2 className="text-3xl font-serif font-bold text-zinc-900">Reserva Confirmada</h2>
          <p className="text-zinc-500 font-light">Gracias por confiar en Lagun, {form.name.split(' ')[0]}. Te esperamos el día {selectedDate} a las {selectedSlot}.</p>
          <button 
            onClick={() => { setBooked(false); setStep(1); setSelectedSlot(null); }} 
            className="w-full py-4 bg-gold text-white rounded-full font-bold shadow-lg shadow-gold/20 hover:scale-105 transition-all"
          >
            Realizar otra reserva
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="reservas" className="py-32 bg-[#fdfdfb]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center reveal">
          <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Agenda tu visita</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 uppercase">Reserva tu Cita</h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= i ? 'bg-gold' : 'bg-zinc-100'}`}></div>
            ))}
          </div>
          <p className="text-zinc-400 text-[10px] mt-4 uppercase tracking-widest font-bold">Paso {step} de 3</p>
        </div>

        <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 reveal">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h3 className="text-xl font-serif text-zinc-800 mb-6">Selecciona un servicio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden ${selectedService === s.id ? 'border-gold bg-gold/5 shadow-md shadow-gold/5' : 'border-zinc-100 bg-[#f9f9f7] text-zinc-600 hover:border-zinc-300'}`}
                  >
                    {selectedService === s.id && <div className="absolute top-4 right-4 text-gold"><i className="fa-solid fa-circle-check"></i></div>}
                    <p className={`font-bold text-lg ${selectedService === s.id ? 'text-zinc-900' : 'text-zinc-700'}`}>{s.name}</p>
                    <p className="text-xs mt-1 text-zinc-400 font-medium uppercase tracking-wider">{s.price} • {s.duration} min</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-6">
                <button onClick={() => setStep(2)} className="px-14 py-4 bg-gold text-white rounded-full font-bold shadow-xl shadow-gold/20 hover:scale-105 transition-all">Continuar</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Fecha de la cita</label>
                  <input 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-4 bg-[#f9f9f7] border border-zinc-100 rounded-2xl text-zinc-800 outline-none focus:border-gold transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Horas disponibles</label>
                  {slots.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                      {slots.map((slot, idx) => (
                        <button
                          key={idx}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`p-3 text-xs rounded-xl border transition-all duration-300 ${
                            !slot.available ? 'opacity-30 cursor-not-allowed bg-zinc-100 text-zinc-400' :
                            selectedSlot === slot.time ? 'bg-zinc-900 text-white border-zinc-900 shadow-md' : 'bg-[#f9f9f7] border-zinc-100 hover:border-gold text-zinc-600'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-zinc-50 rounded-2xl border border-zinc-100">
                      <p className="text-zinc-400 text-sm">No hay citas disponibles para este día.</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-zinc-100">
                <button onClick={() => setStep(1)} className="text-zinc-400 hover:text-zinc-900 font-bold transition-all flex items-center gap-2 group">
                  <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Anterior
                </button>
                <button disabled={!selectedSlot} onClick={() => setStep(3)} className="px-14 py-4 bg-gold text-white rounded-full font-bold shadow-xl shadow-gold/20 disabled:opacity-30 disabled:shadow-none hover:scale-105 transition-all">Siguiente</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} className="space-y-8 animate-in fade-in duration-500">
              <div className="bg-gold/5 p-6 rounded-2xl border border-gold/10 mb-8">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-2">Resumen de tu cita</h4>
                <p className="text-zinc-900 font-serif text-lg">
                  {SERVICES.find(s => s.id === selectedService)?.name} <span className="mx-2 text-zinc-300">|</span> {selectedDate} a las {selectedSlot}
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                   <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300"><i className="fa-solid fa-user"></i></span>
                   <input 
                    required
                    type="text" 
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full p-5 pl-12 bg-[#f9f9f7] border border-zinc-100 rounded-2xl text-zinc-800 outline-none focus:border-gold transition-all shadow-sm"
                  />
                </div>
                <div className="relative">
                   <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300"><i className="fa-solid fa-phone"></i></span>
                   <input 
                    required
                    type="tel" 
                    placeholder="Tu número de teléfono"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    className="w-full p-5 pl-12 bg-[#f9f9f7] border border-zinc-100 rounded-2xl text-zinc-800 outline-none focus:border-gold transition-all shadow-sm"
                  />
                </div>
              </div>

              <p className="text-center text-[10px] text-zinc-400 px-10">Al confirmar, aceptas recibir un recordatorio de cita vía WhatsApp o SMS.</p>

              <div className="flex justify-between items-center pt-4">
                <button type="button" onClick={() => setStep(2)} className="text-zinc-400 hover:text-zinc-900 font-bold transition-all flex items-center gap-2 group">
                  <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Anterior
                </button>
                <button type="submit" className="px-14 py-4 bg-zinc-900 text-white rounded-full font-bold shadow-xl shadow-zinc-200 hover:bg-gold transition-all transform hover:scale-105">Confirmar Reserva</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
