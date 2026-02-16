
import { Service, BusinessHours } from './types';

export const BUSINESS_NAME = "PELUQUERÍA LAGUN";
export const PHONE = "677 11 12 28";
export const ADDRESS = "Santa Eulalia Kalea, 15, 48980 Santurtzi, Bizkaia";

export const SERVICES: Service[] = [
  { id: '1', name: 'Corte', description: 'Corte de pelo a tu gusto.', price: '10€', duration: 30 },
  { id: '2', name: 'Corte + Barba', description: 'Arreglo completo de pelo y barba.', price: '15€', duration: 30 },
  { id: '3', name: 'Barba', description: 'Perfilado y arreglo de barba.', price: '6€', duration: 30 },
  { id: '4', name: 'Jubilados Corte', description: 'Precio especial para nuestros mayores.', price: '8€', duration: 30 },
];

export const SCHEDULE: BusinessHours[] = [
  { day: 'Lunes', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Martes', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Miércoles', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Jueves', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Viernes', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Sábado', morning: '9:30–14:00', afternoon: '16:00–21:00' },
  { day: 'Domingo', morning: 'Cerrado', afternoon: '' },
];
