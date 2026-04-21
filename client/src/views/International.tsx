import React from "react";
import { Link } from "react-router-dom";
import { FileText, Globe, Users, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const destinations = [
  {
    country: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    duration: "5D/4N",
    price: "₹45,000",
    highlights: [
      "Tanah Lot Temple",
      "Ubud Rice Terraces",
      "Kuta Beach",
      "Mount Batur",
    ],
    visa: "Visa on Arrival",
    flag: "🇮🇩",
  },
  {
    country: "Maldives",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    duration: "5D/4N",
    price: "₹55,000",
    highlights: [
      "Overwater Bungalows",
      "Snorkeling & Diving",
      "Male City Tour",
      "Sunset Cruise",
    ],
    visa: "Visa on Arrival",
    flag: "🇲🇻",
  },
  {
    country: "Dubai, UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    duration: "5D/4N",
    price: "₹40,000",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Gold Souk"],
    visa: "Visa Required",
    flag: "🇦🇪",
  },
  {
    country: "Thailand",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
    duration: "6D/5N",
    price: "₹35,000",
    highlights: [
      "Bangkok Temples",
      "Pattaya Beach",
      "Phi Phi Islands",
      "Floating Market",
    ],
    visa: "Visa on Arrival",
    flag: "🇹🇭",
  },
  {
    country: "Singapore",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80",
    duration: "4D/3N",
    price: "₹42,000",
    highlights: [
      "Gardens by the Bay",
      "Universal Studios",
      "Sentosa Island",
      "Marina Bay Sands",
    ],
    visa: "Visa Required",
    flag: "🇸🇬",
  },
  {
    country: "Bangladesh",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    duration: "4D/3N",
    price: "₹18,000",
    highlights: [
      "Dhaka City Tour",
      "Sundarban Delta",
      "Cox's Bazar Beach",
      "Historical Mosques",
    ],
    visa: "On Arrival",
    flag: "🇧🇩",
  },
  {
    country: "Sri Lanka",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
    duration: "5D/4N",
    price: "₹30,000",
    highlights: [
      "Sigiriya Rock",
      "Kandy Temple",
      "Colombo City",
      "Mirissa Beach",
    ],
    visa: "On Arrival",
    flag: "🇱🇰",
  },
  {
    country: "Nepal",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    duration: "5D/4N",
    price: "₹22,000",
    highlights: [
      "Pashupatinath Temple",
      "Kathmandu Durbar Square",
      "Pokhara",
      "Himalayan View",
    ],
    visa: "No Visa",
    flag: "🇳🇵",
  },
];

const services = [
  {
    icon: FileText,
    title: "Visa Assistance",
    desc: "We handle all visa documentation, application forms, appointment booking, and submission for 20+ countries. Hassle-free process.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe,
    title: "Immigration Help",
    desc: "Complete immigration guidance including work visa, student visa, and permanent residency assistance for USA, UK, Canada, Australia and more.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Group Tour Coordination",
    desc: "Specialized group tour management for families, corporate teams, and religious organizations traveling internationally.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Travel Insurance",
    desc: "Comprehensive travel insurance coverage for international trips including medical, trip cancellation, and baggage protection.",
    color: "bg-orange-50 text-orange-600",
  },
];

const International: React.FC = () => (
  <div className="font-sans min-h-screen bg-gray-50">
    <Navbar />

    {/* Hero Banner */}
    <div
      className="relative h-64 md:h-80 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <div className="relative z-10 flex flex-col justify-center h-full px-8 max-w-7xl mx-auto pt-16">
        <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
          Go Global with GK International
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
          International Tour Packages
        </h1>
        <p className="text-gray-300 max-w-xl">
          Explore the world with our expertly curated international packages.
          Visa assistance, accommodation, and full itinerary management
          included.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
      {/* Destinations Grid */}
      <div className="text-center mb-12">
        <h2 className="section-title">Popular International Destinations</h2>
        <p className="section-subtitle">
          Handpicked destinations for Indian travellers
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {destinations.map((d) => (
          <div key={d.country} className="card group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={d.img}
                alt={d.country}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-3 right-3 text-2xl">{d.flag}</div>
              <div className="absolute bottom-3 left-3 text-white">
                <div className="font-serif font-bold text-lg">{d.country}</div>
                <div className="text-orange-300 font-semibold text-sm">
                  From {d.price}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                <span>⏱ {d.duration}</span>
                <span
                  className={`px-2 py-0.5 rounded-full font-medium ${d.visa === "No Visa" ? "bg-green-100 text-green-700" : d.visa.includes("Arrival") ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`}
                >
                  {d.visa}
                </span>
              </div>
              <ul className="space-y-1">
                {d.highlights.slice(0, 3).map((h) => (
                  <li
                    key={h}
                    className="text-xs text-gray-600 flex items-center gap-1"
                  >
                    <span className="text-orange-400">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919689966696?text=Hi%2C%20I%27m%20interested%20in%20the%20international%20tour%20to%20the%20destination."
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-1 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
              >
                Enquire Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-20">
        <div className="text-center mb-10">
          <h2 className="section-title">Our International Services</h2>
          <p className="section-subtitle">
            Complete end-to-end support for your international journey
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
            >
              <div
                className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <s.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold">
            How We Process Your Visa
          </h2>
          <p className="text-gray-400 mt-2">Simple, transparent, and fast</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            {
              n: "01",
              title: "Enquire",
              desc: "Contact us via WhatsApp or phone with your destination and travel dates.",
            },
            {
              n: "02",
              title: "Documents",
              desc: "We provide a checklist of required documents for your visa category.",
            },
            {
              n: "03",
              title: "Submission",
              desc: "We review, compile, and submit your visa application on your behalf.",
            },
            {
              n: "04",
              title: "Tracking",
              desc: "Real-time updates on your visa status with dedicated support.",
            },
            {
              n: "05",
              title: "Approval",
              desc: "Receive your visa and travel documents. Ready to fly!",
            },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-3">
                {s.n}
              </div>
              <h4 className="font-bold text-white mb-1">{s.title}</h4>
              <p className="text-gray-400 text-xs">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/919689966696?text=Hi%2C%20I%20need%20visa%20assistance%20for%20an%20international%20tour."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start Visa Process on WhatsApp
          </a>
        </div>
      </div>
    </div>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default International;
