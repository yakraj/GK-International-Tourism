import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Hotel,
  MapPin,
  Star,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Waves,
  ChevronRight,
  Calendar,
  Users,
  Search,
} from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    pricePerNight: 15000,
    rating: 4.9,
    reviews: 842,
    category: "Luxury",
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Spa",
      "Fine Dining",
      "Airport Transfer",
      "Gym",
    ],
    description:
      "A stunning white marble palace floating on Lake Pichola with breathtaking views and royal heritage.",
    badge: "5 Star",
    discount: 15,
  },
  {
    id: 2,
    name: "Kumarakom Lake Resort",
    location: "Kumarakom, Kerala",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    pricePerNight: 9500,
    rating: 4.8,
    reviews: 514,
    category: "Resort",
    amenities: [
      "Free Wi-Fi",
      "Infinity Pool",
      "Ayurvedic Spa",
      "Backwater View",
      "Restaurant",
      "Kayaking",
    ],
    description:
      "An award-winning resort set amidst the serene Kerala backwaters with traditional heritage villas.",
    badge: "Top Rated",
    discount: 10,
  },
  {
    id: 3,
    name: "Wildflower Hall",
    location: "Shimla, Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    pricePerNight: 12000,
    rating: 4.7,
    reviews: 380,
    category: "Luxury",
    amenities: [
      "Free Wi-Fi",
      "Heated Pool",
      "Mountain Spa",
      "Gourmet Dining",
      "Forest Walks",
      "Helipad",
    ],
    description:
      "A former imperial summer residence perched on the Himalayas, offering unmatched luxury and panoramic views.",
    badge: "5 Star",
    discount: 0,
  },
  {
    id: 4,
    name: "SwaSwara Resort",
    location: "Gokarna, Karnataka",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=800&q=80",
    pricePerNight: 7500,
    rating: 4.6,
    reviews: 290,
    category: "Resort",
    amenities: [
      "Free Wi-Fi",
      "Infinity Pool",
      "Yoga Center",
      "Organic Kitchen",
      "Beach Access",
      "Ayurveda",
    ],
    description:
      "A wellness retreat nestled on cliffs above the Arabian Sea, perfect for rejuvenation and mindfulness.",
    badge: "Wellness",
    discount: 20,
  },
  {
    id: 5,
    name: "Neemrana Fort Palace",
    location: "Neemrana, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&q=80",
    pricePerNight: 6000,
    rating: 4.5,
    reviews: 620,
    category: "Heritage",
    amenities: [
      "Free Wi-Fi",
      "Heritage Pool",
      "Zip-lining",
      "Rajasthani Cuisine",
      "Folk Performances",
      "Royal Suites",
    ],
    description:
      "A magnificent 15th-century fort-palace converted into a heritage hotel offering an authentic Rajasthani experience.",
    badge: "Heritage",
    discount: 5,
  },
  {
    id: 6,
    name: "Taj Exotica Maldives",
    location: "South Male Atoll, Maldives",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29d8f7cec?w=800&q=80",
    pricePerNight: 35000,
    rating: 4.9,
    reviews: 267,
    category: "International",
    amenities: [
      "Free Wi-Fi",
      "Lagoon Pool",
      "Scuba Diving",
      "Overwater Bungalows",
      "Fine Dining",
      "Spa",
    ],
    description:
      "An iconic overwater paradise with stunning lagoon villas, world-class dining, and unforgettable marine experiences.",
    badge: "5 Star",
    discount: 0,
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Free Wi-Fi": <Wifi size={12} />,
  "Airport Transfer": <Car size={12} />,
  Restaurant: <Coffee size={12} />,
  "Fine Dining": <Coffee size={12} />,
  "Organic Kitchen": <Coffee size={12} />,
  Gym: <Dumbbell size={12} />,
  "Swimming Pool": <Waves size={12} />,
  "Infinity Pool": <Waves size={12} />,
  "Heated Pool": <Waves size={12} />,
  "Heritage Pool": <Waves size={12} />,
  "Lagoon Pool": <Waves size={12} />,
};

const HotelBooking: React.FC = () => {
  const [selected, setSelected] = useState<(typeof hotels)[0] | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    roomType: "deluxe",
  });
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Luxury", "Resort", "Heritage", "International"];

  const filtered = hotels.filter((h) => {
    const matchCat = filter === "All" || h.category === filter;
    const matchSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const getNights = () => {
    if (!form.checkin || !form.checkout) return 1;
    const d1 = new Date(form.checkin).getTime();
    const d2 = new Date(form.checkout).getTime();
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("gk_bookings") || "[]");
    bookings.push({
      type: "hotel",
      hotel: selected?.name,
      location: selected?.location,
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
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
          alt="Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-amber-900/60 flex items-center">
          <div className="px-6 md:px-16 text-white">
            <div className="flex items-center gap-2 text-amber-300 mb-3 text-sm font-medium">
              <Hotel size={16} /> Hotel Booking
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
              Stay in Luxury
            </h1>
            <p className="text-amber-100 text-base md:text-lg max-w-xl">
              Handpicked luxury hotels, heritage resorts & wellness retreats
              across India and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by hotel name or location..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${filter === cat ? "bg-amber-500 text-white border-amber-500" : "bg-white text-gray-600 border-gray-200 hover:border-amber-400"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {hotel.badge}
                </span>
                {hotel.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{hotel.discount}%
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-gray-800 mb-0.5">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                  <MapPin size={11} /> {hotel.location}
                </div>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {hotel.amenities.slice(0, 4).map((a) => (
                    <span
                      key={a}
                      className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full"
                    >
                      {amenityIcons[a] || null} {a}
                    </span>
                  ))}
                  {hotel.amenities.length > 4 && (
                    <span className="text-xs text-gray-400 px-2 py-0.5">
                      +{hotel.amenities.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star
                      size={13}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-sm font-semibold text-gray-800">
                      {hotel.rating}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({hotel.reviews})
                    </span>
                  </div>
                  <div className="text-right">
                    {hotel.discount > 0 && (
                      <div className="text-xs text-gray-400 line-through">
                        ₹{hotel.pricePerNight.toLocaleString()}
                      </div>
                    )}
                    <div className="text-lg font-bold text-amber-600">
                      ₹
                      {Math.round(
                        hotel.pricePerNight * (1 - hotel.discount / 100),
                      ).toLocaleString()}
                      <span className="text-xs text-gray-400 font-normal">
                        /night
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelected(hotel);
                    setSubmitted(false);
                    setTimeout(
                      () =>
                        document
                          .getElementById("hotel-booking-form")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  }}
                  className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Book Now <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selected && (
          <div
            id="hotel-booking-form"
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border border-amber-100"
          >
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Hotel size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-xl text-gray-800">
                      Book: {selected.name}
                    </h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin size={11} /> {selected.location}
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
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) =>
                          setForm({ ...form, guests: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in Date *
                      </label>
                      <input
                        required
                        type="date"
                        value={form.checkin}
                        onChange={(e) =>
                          setForm({ ...form, checkin: e.target.value })
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out Date *
                      </label>
                      <input
                        required
                        type="date"
                        value={form.checkout}
                        onChange={(e) =>
                          setForm({ ...form, checkout: e.target.value })
                        }
                        min={
                          form.checkin || new Date().toISOString().split("T")[0]
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Type
                    </label>
                    <select
                      value={form.roomType}
                      onChange={(e) =>
                        setForm({ ...form, roomType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="standard">Standard Room</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="suite">Suite</option>
                      <option value="villa">Private Villa</option>
                    </select>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
                    <strong>
                      {getNights()} Night{getNights() !== 1 ? "s" : ""} × ₹
                      {Math.round(
                        selected.pricePerNight * (1 - selected.discount / 100),
                      ).toLocaleString()}
                    </strong>
                    {" = "}
                    <span className="text-lg font-bold">
                      ₹
                      {(
                        Math.round(
                          selected.pricePerNight *
                            (1 - selected.discount / 100),
                        ) * getNights()
                      ).toLocaleString()}
                    </span>
                    {selected.discount > 0 && (
                      <span className="ml-2 text-green-600 text-xs font-medium">
                        ({selected.discount}% off applied)
                      </span>
                    )}
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
                      className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-all"
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
                  Your reservation at <strong>{selected.name}</strong> has been
                  submitted.
                </p>
                <p className="text-gray-500 mb-6 text-sm">
                  Our team will reach out to <strong>{form.phone}</strong>{" "}
                  within 24 hours to finalize your stay.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSelected(null);
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 text-sm"
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

export default HotelBooking;
