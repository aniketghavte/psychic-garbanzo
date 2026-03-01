export type Hotel = {
  id: string;
  name: string;
  city: string;
  location: string;
  pricePerNight: number;
  starRating: number;
  thumbnail: string;
  image: string;
  description: string;
  amenities: string[];
};

export const HOTELS: Hotel[] = [
  {
    id: "1",
    name: "Grand Plaza Hotel",
    city: "New York",
    location: "Manhattan, NY",
    pricePerNight: 189,
    starRating: 5,
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    description:
      "Experience luxury in the heart of Manhattan. Grand Plaza Hotel offers stunning city views, world-class dining, and impeccable service for both business and leisure travelers.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Restaurant", "24/7 Room Service"],
  },
  {
    id: "2",
    name: "Sunset Beach Resort",
    city: "Miami",
    location: "Miami Beach, FL",
    pricePerNight: 245,
    starRating: 5,
    thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=600&fit=crop",
    description:
      "Wake up to the sound of waves at Sunset Beach Resort. Our oceanfront property features private beach access, tropical pools, and award-winning cuisine.",
    amenities: ["Free WiFi", "AC", "Pool", "Beach Access", "Bar"],
  },
  {
    id: "3",
    name: "Mountain View Lodge",
    city: "Denver",
    location: "Rocky Mountains, CO",
    pricePerNight: 129,
    starRating: 4,
    thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
    description:
      "Escape to the mountains at our cozy lodge. Perfect for hiking, skiing, and reconnecting with nature. Enjoy rustic charm with modern comforts.",
    amenities: ["Free WiFi", "AC", "Fireplace", "Restaurant", "Parking"],
  },
  {
    id: "4",
    name: "Urban Loft Hotel",
    city: "Chicago",
    location: "Downtown Chicago, IL",
    pricePerNight: 156,
    starRating: 4,
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=600&fit=crop",
    description:
      "Stylish and central, Urban Loft Hotel blends industrial design with comfort. Steps from shopping, theaters, and the lakefront.",
    amenities: ["Free WiFi", "AC", "Gym", "Restaurant", "Rooftop Bar"],
  },
  {
    id: "5",
    name: "Riverside Inn",
    city: "San Antonio",
    location: "River Walk, TX",
    pricePerNight: 98,
    starRating: 3,
    thumbnail: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=600&fit=crop",
    description:
      "Charming inn along the famous River Walk. Enjoy Tex-Mex flavors, live music, and easy access to historic attractions.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Parking"],
  },
  {
    id: "6",
    name: "Pacific Coast Hotel",
    city: "San Diego",
    location: "La Jolla, CA",
    pricePerNight: 212,
    starRating: 5,
    thumbnail: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop",
    description:
      "Overlooking the Pacific, our hotel offers breathtaking sunsets, a spa, and direct access to one of California's best beaches.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Beach Access", "Restaurant"],
  },
  {
    id: "7",
    name: "Historic District Suites",
    city: "Boston",
    location: "Back Bay, MA",
    pricePerNight: 175,
    starRating: 4,
    thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=600&fit=crop",
    description:
      "Elegant suites in a restored Back Bay brownstone. Walk to Fenway, museums, and the best of Boston's dining scene.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Concierge", "Parking"],
  },
  {
    id: "8",
    name: "Desert Oasis Resort",
    city: "Phoenix",
    location: "Scottsdale, AZ",
    pricePerNight: 199,
    starRating: 5,
    thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=600&fit=crop",
    description:
      "Luxury in the desert. World-class golf, spa treatments, and poolside cabanas await at our award-winning resort.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Golf", "Restaurant"],
  },
  {
    id: "9",
    name: "Harbor View Hotel",
    city: "Seattle",
    location: "Waterfront, WA",
    pricePerNight: 142,
    starRating: 4,
    thumbnail: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=600&fit=crop",
    description:
      "Watch ferries and seaplanes from your room. Steps from Pike Place Market and the Seattle Aquarium.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Bar", "Parking"],
  },
  {
    id: "10",
    name: "Garden City Motel",
    city: "Portland",
    location: "Downtown, OR",
    pricePerNight: 89,
    starRating: 3,
    thumbnail: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&h=600&fit=crop",
    description:
      "Eco-friendly and budget-conscious. Bike rentals, local art, and coffee roasters right in the neighborhood.",
    amenities: ["Free WiFi", "AC", "Parking", "Bike Rental"],
  },
];

export function getHotelById(id: string): Hotel | undefined {
  return HOTELS.find((h) => h.id === id);
}

export type SortOption = "price-asc" | "price-desc" | "rating-desc" | null;

export function filterAndSortHotels(
  hotels: Hotel[],
  query: string,
  sort: SortOption
): Hotel[] {
  const q = query.trim().toLowerCase();
  let result = q
    ? hotels.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.city.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q)
      )
    : [...hotels];

  if (sort === "price-asc") {
    result = [...result].sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sort === "price-desc") {
    result = [...result].sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (sort === "rating-desc") {
    result = [...result].sort((a, b) => b.starRating - a.starRating);
  }

  return result;
}
