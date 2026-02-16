
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: number; // in minutes
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
}

export interface BusinessHours {
  day: string;
  morning: string;
  afternoon: string;
}
