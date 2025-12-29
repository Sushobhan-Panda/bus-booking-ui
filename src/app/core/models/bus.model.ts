// Raw backend response model
export interface BackendBus {
  busId: string;
  busNumber: string;
  operatorName: string;
  source: string;
  destination: string;
  boardingTime: string;
  arrivalTime: string;
  fare: number;
}

// UI-friendly model
export interface Bus {
  id: string;
  operator: string;
  busNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
}
