import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Star,
  MapPin,
  Shield,
  Clock,
  Headphones,
  Tag,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import PackageCard from "../components/PackageCard";
import { packages, testimonials } from "../data/mockData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const trending = packages.filter((p) => p.isTrending);
  const special = packages.filter((p) => p.isSpecial);
  const mostVisited = packages.filter((p) => p.isMostVisited);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/packages?q=${encodeURIComponent(search)}`);
    else navigate("/packages");
  };

  const stats = [
    { value: "30+", label: "Years of Experience" },
    { value: "10K+", label: "Happy Travellers" },
    { value: "500+", label: "Packages Completed" },
    { value: "50+", label: "Destinations Covered" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Trusted",
      desc: "Over 30 years of trusted travel services across India and abroad.",
    },
    {
      icon: Tag,
      title: "Best Price Guarantee",
      desc: "Affordable packages with group discounts and budget-friendly options.",
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      desc: "Choose dates that suit you. We accommodate last-minute changes.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "24/7 customer support. We are always just a call or WhatsApp away.",
    },
  ];

  const internationalDestinations = [
    {
      name: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80",
      price: "₹45,000",
    },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=80",
      price: "₹55,000",
    },
    {
      name: "Dubai, UAE",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80",
      price: "₹40,000",
    },
    {
      name: "Thailand",
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&q=80",
      price: "₹35,000",
    },
  ];

  return (
    <div className="font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-200 text-sm font-medium px-5 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            ✦ Since 1993 – 30 Years of Trusted Journeys ✦
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-5">
            Your Journey to the
            <br />
            <span className="text-orange-400">Divine & Beyond</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Spiritual pilgrimages, hill station escapes, and international
            adventures – all crafted with care by GK International Tours &
            Travels, Shirdi.
          </p>
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-2xl p-3 max-w-2xl mx-auto flex items-center gap-2"
          >
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations – Shirdi, Nashik, Goa, Bali..."
                className="w-full text-gray-800 outline-none text-sm py-2 placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shrink-0"
            >
              Explore Packages
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-white/80">
            {[
              "Shirdi Darshan",
              "Jyotirlinga Circuit",
              "Nashik Tour",
              "Bali",
              "Maldives",
            ].map((tag) => (
              <Link
                key={tag}
                to={`/packages?q=${tag}`}
                className="bg-white/10 hover:bg-white/20 border border-white/30 px-4 py-1.5 rounded-full transition-colors backdrop-blur-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <a
          href="#trending"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* ── STATS ── */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold font-serif">{s.value}</div>
              <div className="text-orange-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENDING PACKAGES ── */}
      <section id="trending" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              What's Hot
            </span>
            <h2 className="section-title mt-1">🔥 Trending Packages</h2>
            <p className="section-subtitle">Most booked tours this season</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trending.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPECIAL PLACES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Exclusive
            </span>
            <h2 className="section-title mt-1">✨ Special Packages</h2>
            <p className="section-subtitle">
              Handpicked experiences for discerning travellers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {special.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/packages/${pkg.slug}`}
                className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer shadow-lg"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {pkg.badge && (
                    <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-serif font-bold text-xl mt-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">{pkg.shortDesc}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-orange-300 text-lg">
                      ₹{pkg.basePrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-white/70">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOST VISITED ── */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Top Picks
            </span>
            <h2 className="section-title mt-1">📍 Most Visited Destinations</h2>
            <p className="section-subtitle">
              Places our travellers love the most
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostVisited.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Simple Steps
          </span>
          <h2 className="section-title mt-1">How It Works</h2>
          <p className="section-subtitle">
            Book your dream tour in 4 easy steps
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              {
                n: "01",
                icon: "🔍",
                title: "Search Package",
                desc: "Browse our wide range of spiritual and holiday packages.",
              },
              {
                n: "02",
                icon: "🚗",
                title: "Pick Vehicle",
                desc: "Choose a vehicle suited for your group. Pricing is transparent.",
              },
              {
                n: "03",
                icon: "🏨",
                title: "Add Hotel",
                desc: "Select from budget to luxury hotels at your destination.",
              },
              {
                n: "04",
                icon: "✅",
                title: "Book & Go!",
                desc: "Pay 50% advance and your trip is confirmed. We handle the rest.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                  {s.icon}
                </div>
                <div className="text-orange-400 font-bold text-xs">{s.n}</div>
                <h4 className="font-bold text-gray-800">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
                Why GK International
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                We Go the Extra Mile for Every Pilgrim & Traveller
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                At GK International Tours & Travels, we are dedicated to making
                your visit to holy towns both enriching and effortless. From
                personalized Shirdi tour packages to nearby sacred destinations,
                we ensure every moment of your journey is memorable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <f.icon size={18} className="text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1">
                        {f.title}
                      </div>
                      <div className="text-gray-400 text-xs leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80"
                alt="Temple"
                className="rounded-2xl object-cover h-52 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&q=80"
                alt="Shirdi"
                className="rounded-2xl object-cover h-52 w-full mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                alt="Hills"
                className="rounded-2xl object-cover h-52 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80"
                alt="Bali"
                className="rounded-2xl object-cover h-52 w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Go Global
            </span>
            <h2 className="section-title mt-1">🌍 International Tours</h2>
            <p className="section-subtitle">
              With visa assistance & immigration support
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalDestinations.map((d) => (
              <Link
                key={d.name}
                to="/international"
                className="card group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-serif font-bold">{d.name}</div>
                    <div className="text-orange-300 font-semibold text-sm">
                      From {d.price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/international"
              className="btn-outline inline-flex items-center gap-2"
            >
              Explore International Tours <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA FEED ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Join Us
            </span>
            <h2 className="section-title mt-1">📱 Connect with Us</h2>
            <p className="section-subtitle">
              Follow our journey on social media
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Facebook Feed */}
            <div className="bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
                <span className="text-blue-600">Facebook</span> Page
              </h3>
              <div className="w-full overflow-hidden flex justify-center">
                <iframe
                  title="Facebook Page"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuber&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-xl shadow-lg w-full max-w-[500px]"
                ></iframe>
              </div>
            </div>

            {/* Instagram Feed */}
            <div className="bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
                <span className="text-pink-600">Instagram</span> Feed
              </h3>
              <div className="w-full overflow-hidden flex flex-col items-center gap-4">
                <iframe
                  title="Instagram Feed"
                  src="https://www.instagram.com/uber/embed"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-xl shadow-lg max-w-[400px]"
                ></iframe>
                <a
                  href="https://www.instagram.com/uber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-pink-600 font-bold hover:underline"
                >
                  View on Instagram <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="section-title mt-1">What Our Travellers Say</h2>
            <p className="section-subtitle">
              10,000+ happy travellers trust us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < t.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {t.city}, {t.state}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Talk to our travel experts now. We'll plan the perfect trip for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full transition-all shadow-lg"
            >
              Browse Packages
            </Link>
            <a
              href="https://wa.me/919689966696?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20tour."
              target="_blank"
              rel="noreferrer"
              className="bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold px-8 py-4 rounded-full transition-all backdrop-blur-sm"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
