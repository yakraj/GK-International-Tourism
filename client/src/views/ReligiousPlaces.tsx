import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sunrise, Sun, Sunset, Moon, MapPin, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const places = [
  {
    id: 1,
    name: "Shirdi – Sai Baba Temple",
    location: "Shirdi, Maharashtra",
    slug: "shirdi-darshan",
    img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=700&q=80",
    description:
      "The most sacred temple of Sai Baba, visited by millions of devotees every year from all over the world. Experience spiritual bliss at this divine abode.",
    artiTimings: [
      {
        session: "Morning",
        time: "4:30 AM",
        description:
          "Kakad Aarti – The first and most auspicious aarti of the day",
      },
      {
        session: "Afternoon",
        time: "12:00 PM",
        description:
          "Madhyanha Aarti – Mid-day aarti with full ritualistic devotion",
      },
      {
        session: "Evening",
        time: "6:00 PM",
        description:
          "Dhoop Aarti – Spiritual evening prayer with fragrant incense",
      },
      {
        session: "Night",
        time: "10:30 PM",
        description:
          "Shej Aarti – Final aarti of the day, Sai Baba's 'goodnight'",
      },
    ],
    facilities: [
      "Free Darshan",
      "Online Queue Booking",
      "VIP Darshan Pass",
      "Prasad Available",
    ],
    bestTime: "Early morning for Kakad Aarti or weekdays to avoid crowds",
    dressCode: "Modest clothing. No shorts or sleeveless for entry.",
  },
  {
    id: 2,
    name: "Trimbakeshwar Jyotirlinga",
    location: "Trimbakeshwar, Nashik",
    slug: "trimbakeshwar-jyotirlinga",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=80",
    description:
      "One of the 12 Jyotirlingas of Lord Shiva, the Trimbakeshwar temple is a marvel of ancient architecture. The Godavari river originates from nearby Brahmagiri Mountain.",
    artiTimings: [
      {
        session: "Morning",
        time: "5:30 AM",
        description: "Pratah Aarti – Morning prayer at sunrise",
      },
      {
        session: "Afternoon",
        time: "12:00 PM",
        description: "Madhyanha Puja – Mid-day offerings and prayers",
      },
      {
        session: "Evening",
        time: "7:00 PM",
        description: "Sandhya Aarti – Evening prayer with lamps",
      },
      {
        session: "Night",
        time: "9:00 PM",
        description: "Shej Aarti – Last aarti before closing",
      },
    ],
    facilities: [
      "Morning Bath at Kushavart",
      "Rudrabhishek Puja",
      "Brahmagiri Trek",
      "Godavari Ghat",
    ],
    bestTime: "Shravana month (July-August) or Mahashivratri",
    dressCode: "Traditional attire required. Dhoti for men inside the sanctum.",
  },
  {
    id: 3,
    name: "Nashik – Kalaram Temple & Ramkund",
    location: "Nashik, Maharashtra",
    slug: "nashik-darshan",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&q=80",
    description:
      "Nashik is known as the city of temples and the Godavari river. Ramkund is a sacred bathing ghat and Kalaram temple is a famous black-idol Ram temple from the 18th century.",
    artiTimings: [
      {
        session: "Morning",
        time: "5:00 AM",
        description: "Mangal Aarti at Kalaram Temple",
      },
      {
        session: "Morning",
        time: "7:00 AM",
        description: "Morning Ghat Bath at Ramkund",
      },
      {
        session: "Afternoon",
        time: "12:30 PM",
        description: "Madhyanha Aarti at Kalaram",
      },
      {
        session: "Evening",
        time: "6:30 PM",
        description: "Sandhya Aarti with Ganga Aarti at Ramkund",
      },
    ],
    facilities: [
      "Ramkund Bathing Ghat",
      "Saptashrungi Devi Darshan",
      "Panchavati Forest",
      "Kalaram Temple",
    ],
    bestTime: "Ram Navami or Kumbh Mela (every 12 years)",
    dressCode: "Modest attire. Traditional for temple entry.",
  },
  {
    id: 4,
    name: "Grishneshwar Jyotirlinga",
    location: "Verul, Aurangabad",
    slug: "csn-darshan",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&q=80",
    description:
      "The last and 12th Jyotirlinga of Lord Shiva, Grishneshwar is located near the UNESCO World Heritage Ellora Caves. An ancient temple built by Ahilyabai Holkar in the 18th century.",
    artiTimings: [
      {
        session: "Morning",
        time: "5:30 AM",
        description: "Pratah Aarti – First prayer of the day",
      },
      {
        session: "Afternoon",
        time: "12:00 PM",
        description: "Abhishek & Rudrabhishek Puja",
      },
      {
        session: "Evening",
        time: "7:00 PM",
        description: "Sandhya Aarti – Evening prayer",
      },
      {
        session: "Night",
        time: "9:30 PM",
        description: "Shej Aarti – Final prayer of the day",
      },
    ],
    facilities: [
      "Free Entry",
      "Rudrabhishek Booking",
      "Adjacent Ellora Caves",
      "Photography Allowed Outside",
    ],
    bestTime:
      "Mahashivratri or Shravana Month. Combine with Ellora Caves visit.",
    dressCode: "Dhoti mandatory for men inside sanctum. No jeans.",
  },
];

const sessionConfig: Record<
  string,
  { icon: React.ReactNode; bg: string; text: string }
> = {
  Morning: {
    icon: <Sunrise size={16} />,
    bg: "bg-yellow-50 border-yellow-200",
    text: "text-yellow-700",
  },
  Afternoon: {
    icon: <Sun size={16} />,
    bg: "bg-orange-50 border-orange-200",
    text: "text-orange-700",
  },
  Evening: {
    icon: <Sunset size={16} />,
    bg: "bg-purple-50 border-purple-200",
    text: "text-purple-700",
  },
  Night: {
    icon: <Moon size={16} />,
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
  },
};

const ReligiousPlaces: React.FC = () => {
  const [open, setOpen] = useState<number>(1);

  return (
    <div className="font-sans min-h-screen bg-orange-50">
      <Navbar />

      <div
        className="relative h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white pt-16">
          <div>
            <h1 className="text-4xl font-serif font-bold">
              🛕 Religious & Spiritual Places
            </h1>
            <p className="text-gray-300 mt-2">
              Complete Aarti timings, darshan schedules & travel information
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-8">
        {places.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-3xl shadow-md overflow-hidden"
          >
            {/* Header */}
            <div
              className="relative h-56 cursor-pointer"
              onClick={() => setOpen(open === place.id ? 0 : place.id)}
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
              <div className="absolute left-6 bottom-6 right-6 text-white">
                <h2 className="text-2xl font-serif font-bold">{place.name}</h2>
                <div className="flex items-center gap-2 mt-1 text-gray-300 text-sm">
                  <MapPin size={14} className="text-orange-400" />
                  {place.location}
                </div>
              </div>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl font-bold">
                {open === place.id ? "−" : "+"}
              </div>
            </div>

            {/* Expanded Content */}
            {open === place.id && (
              <div className="p-6 md:p-8">
                <p className="text-gray-600 leading-relaxed mb-8">
                  {place.description}
                </p>

                {/* Aarti Timings */}
                <div className="mb-8">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                    🪔 Aarti & Worship Timings
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {place.artiTimings.map((t, i) => {
                      const config =
                        sessionConfig[t.session] || sessionConfig["Morning"];
                      return (
                        <div
                          key={i}
                          className={`rounded-xl p-4 border ${config.bg}`}
                        >
                          <div
                            className={`flex items-center gap-2 ${config.text} font-bold text-sm mb-1`}
                          >
                            {config.icon} {t.session} Aarti
                          </div>
                          <div className={`text-xl font-bold ${config.text}`}>
                            {t.time}
                          </div>
                          <p className="text-gray-500 text-xs mt-1">
                            {t.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm">
                      ✓ Facilities
                    </h4>
                    <ul className="space-y-1">
                      {place.facilities.map((f) => (
                        <li key={f} className="text-xs text-green-700">
                          • {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">
                      📅 Best Time to Visit
                    </h4>
                    <p className="text-xs text-blue-700">{place.bestTime}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm">
                      👘 Dress Code
                    </h4>
                    <p className="text-xs text-purple-700">{place.dressCode}</p>
                  </div>
                </div>

                <Link
                  to={`/packages/${place.slug}`}
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  Book Tour to {place.name.split("–")[0].trim()}{" "}
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ReligiousPlaces;
