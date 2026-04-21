export interface ArtiTiming {
  session: "Morning" | "Afternoon" | "Evening" | "Night";
  time: string;
  description: string;
}

export interface HighlightPlace {
  name: string;
  image: string;
  lat: number;
  lng: number;
  description?: string;
}

export interface TourPackage {
  id: number;
  name: string;
  slug: string;
  category: "spiritual" | "holiday" | "hillstation" | "international";
  description: string;
  shortDesc: string;
  totalKm: number;
  duration: string;
  nights: number;
  basePrice: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  highlights: string[];
  highlightPlaces?: HighlightPlace[];
  inclusions: string[];
  exclusions: string[];
  isReligious: boolean;
  artiTimings?: ArtiTiming[];
  isTrending: boolean;
  isMostVisited: boolean;
  isSpecial: boolean;
  location: string;
  country: string;
  badge?: string | null;
}

export interface Vehicle {
  id: number;
  name: string;
  type: string;
  capacity: number;
  pricePerKm: number;
  image: string;
  features: string[];
  ac: boolean;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  pricePerRoom: number;
  image: string;
  images: string[];
  amenities: string[];
  category: "budget" | "standard" | "luxury";
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  state: string;
  rating: number;
  review: string;
  date: string;
  packageBooked?: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  location: string;
  category: string;
}

export interface User {
  id: number;
  email: string;
  name?: string;
  phone?: string;
}

export interface Booking {
  id: number;
  packageId: number;
  vehicleId: number;
  hotelId?: number;
  travelDate: string;
  peopleCount: number;
  totalAmount: number;
  advanceAmount: number;
  specialRequests?: string;
  status: string;
  paymentStatus: string;
  createdAt: string;
}
