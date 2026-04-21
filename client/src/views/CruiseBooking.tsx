import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Anchor,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronRight,
  Ship,
  Clock,
  Utensils,
  Wifi,
} from "lucide-react";

const cruises = [
  {
    id: 1,
    name: "Lakshadweep Island Cruise",
    ship: "MV Kavaratti",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
    route: "Kochi → Lakshadweep → Kochi",
    duration: "5 Nights / 6 Days",
    price: 28500,
    rating: 4.7,
    reviews: 142,
    category: "Island",
    amenities: [
      "All Meals Included",
      "Wi-Fi Onboard",
      "Entertainment",
      "AC Cabins",
    ],
    highlights: [
      "Snorkeling & Scuba",
      "Coral Reef Exploration",
      "Beach Bonfire",
      "Water Sports",
    ],
    departure: "Every Friday from Kochi",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Andaman Sea Voyage",
    ship: "MV Nicobar",
    image:
      "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80",
    route: "Chennai → Port Blair → Havelock → Chennai",
    duration: "7 Nights / 8 Days",
    price: 45000,
    rating: 4.9,
    reviews: 98,
    category: "Island",
    amenities: [
      "All Meals Included",
      "Wi-Fi Onboard",
      "Spa & Wellness",
      "Luxury Cabins",
    ],
    highlights: [
      "Radhanagar Beach",
      "Elephant Beach Snorkeling",
      "Cellular Jail Visit",
      "Sunset Cruise",
    ],
    departure: "Every Tuesday from Chennai",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Kerala Backwater Houseboat Cruise",
    ship: "Traditional Kettuvallam",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    route: "Alleppey → Kumarakom → Alleppey",
    duration: "2 Nights / 3 Days",
    price: 12000,
    rating: 4.8,
    reviews: 320,
    category: "Backwater",
    amenities: [
      "All Meals Included",
      "AC Bedrooms",
      "Sun Deck",
      "Traditional Cooking",
    ],
    highlights: [
      "Sunset View",
      "Village Tours",
      "Fishing Experience",
      "Bird Watching",
    ],
    departure: "Daily from Alleppey",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Goa Coastal Cruise",
    ship: "MV Mandovi Explorer",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    route: "Panaji → Dudhsagar → Mandovi River → Panaji",
    duration: "1 Night / 2 Days",
    price: 8500,
    rating: 4.5,
    reviews: 210,
    category: "Coastal",
    amenities: ["Dinner Included", "Live Music", "Bar Onboard", "Open Deck"],
    highlights: [
      "Dudhsagar Waterfall View",
      "Casino Night Option",
      "Dolphin Spotting",
      "Sunset Party",
    ],
    departure: "Friday & Saturday evenings",
    badge: null,
  },
];

const CruiseBooking: React.FC = () => {
  const [selected, setSelected] = useState<(typeof cruises)[0] | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    passengers: "2",
    cabinType: "standard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Island", "Backwater", "Coastal"];
  const filtered =
    filter === "All" ? cruises : cruises.filter((c) => c.category === filter);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem("gk_bookings") || "[]");
    bookings.push({
      type: "cruise",
      cruise: selected?.name,
      ...form,
      bookedAt: new Date().toISOString(),
    });
    localStorage.setItem("gk_bookings", JSON.stringify(bookings));
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="relative h-72 md:h-96 mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=80"
          alt="Cruise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/60 flex items-center">
          <div className="px-6 md:px-16 text-white">
            <div className="flex items-center gap-2 text-cyan-300 mb-3 text-sm font-medium">
              <Anchor size={16} /> Cruise Booking
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
              Sail Into Paradise
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-xl">
              Discover breathtaking voyages along India's stunning coastlines
              and island destinations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Category Filter */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="text-gray-500 text-sm font-medium">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${filter === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filtered.map((cruise) => (
            <div
              key={cruise.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cruise.image}
                  alt={cruise.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {cruise.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {cruise.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                  {cruise.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-gray-800">
                      {cruise.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mt-0.5">
                      <Ship size={13} /> {cruise.ship}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{cruise.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">per person</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-orange-400" />
                    {cruise.route.split("→")[0].trim()} → …
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-orange-400" />
                    {cruise.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-orange-400" />
                    {cruise.departure}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={13}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    {cruise.rating} ({cruise.reviews} reviews)
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cruise.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelected(cruise);
                    setSubmitted(false);
                    window.scrollTo({ top: 9999, behavior: "smooth" });
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Book This Cruise <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selected && (
          <div
            id="booking-form"
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border border-blue-100"
          >
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Anchor size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-xl text-gray-800">
                      Book: {selected.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selected.route} · {selected.duration}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleBook} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Travel Date *
                      </label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Passengers
                      </label>
                      <select
                        value={form.passengers}
                        onChange={(e) =>
                          setForm({ ...form, passengers: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Person" : "People"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cabin Type
                      </label>
                      <select
                        value={form.cabinType}
                        onChange={(e) =>
                          setForm({ ...form, cabinType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="standard">Standard Cabin</option>
                        <option value="deluxe">Deluxe Cabin</option>
                        <option value="suite">Suite</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
                    <strong>Estimated Total:</strong> ₹
                    {(
                      selected.price * parseInt(form.passengers)
                    ).toLocaleString()}{" "}
                    <span className="text-blue-500">
                      ({form.passengers} × ₹{selected.price.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-800 mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-gray-500 mb-2">
                  Your cruise booking request for{" "}
                  <strong>{selected.name}</strong> has been received.
                </p>
                <p className="text-gray-500 mb-6 text-sm">
                  Our team will contact you at <strong>{form.phone}</strong>{" "}
                  within 24 hours to confirm your reservation.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSelected(null);
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 text-sm"
                  >
                    Book Another
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CruiseBooking;
