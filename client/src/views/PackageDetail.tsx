import React, { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Clock,
  Route,
  Check,
  X,
  Moon,
  Sun,
  Sunset,
  Sunrise,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BookingFlow from "../components/BookingFlow";
import RouteMap from "../components/RouteMap";
import { packages } from "../data/mockData";

const sessionIcons: Record<string, React.ReactNode> = {
  Morning: <Sunrise size={18} className="text-yellow-500" />,
  Afternoon: <Sun size={18} className="text-orange-500" />,
  Evening: <Sunset size={18} className="text-purple-500" />,
  Night: <Moon size={18} className="text-blue-500" />,
};

const PackageDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showBooking, setShowBooking] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const pkg = packages.find((p) => p.slug === slug || p.id === Number(slug));
  if (!pkg) return <Navigate to="/packages" />;

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative h-72 md:h-96 mt-16 overflow-hidden">
        <img
          src={pkg.images[activeImg]}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white max-w-7xl mx-auto">
          {pkg.badge && (
            <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mr-2">
              {pkg.badge}
            </span>
          )}
          {pkg.isReligious && (
            <span className="bg-purple-600 text-xs font-bold px-3 py-1 rounded-full">
              Spiritual
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-3">
            {pkg.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-200">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-orange-300" /> {pkg.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-orange-300" /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <Route size={14} className="text-orange-300" /> {pkg.totalKm} km
              covered
            </span>
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < Math.round(pkg.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }
                />
              ))}{" "}
              {pkg.rating} ({pkg.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {pkg.images.length > 1 && (
        <div className="max-w-7xl mx-auto px-4 flex gap-2 mt-3">
          {pkg.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-orange-500" : "border-transparent"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-serif font-bold text-2xl text-gray-800 mb-3">
              About This Tour
            </h2>
            <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
          </div>

          {/* Highlights – image cards */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-serif font-bold text-xl text-gray-800 mb-5">
              Places You'll Visit
            </h2>
            {pkg.highlightPlaces && pkg.highlightPlaces.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {pkg.highlightPlaces.map((place, i) => (
                  <div
                    key={place.name}
                    className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="h-32 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-2 left-2 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                      {i + 1}
                    </div>
                    <div className="p-3 bg-white">
                      <div className="font-semibold text-gray-800 text-sm leading-tight">
                        {place.name}
                      </div>
                      {place.description && (
                        <div className="text-gray-500 text-xs mt-1 line-clamp-2">
                          {place.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                      <Check size={11} className="text-orange-600" />
                    </div>
                    {h}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Route Map */}
          {pkg.highlightPlaces && pkg.highlightPlaces.length > 0 && (
            <RouteMap places={pkg.highlightPlaces} packageName={pkg.name} />
          )}

          {/* Inclusions / Exclusions */}
          <div className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="font-serif font-bold text-xl text-gray-800 mb-3">
                Inclusions
              </h2>
              <ul className="space-y-2">
                {pkg.inclusions.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check size={14} className="text-green-500 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-gray-800 mb-3">
                Exclusions
              </h2>
              <ul className="space-y-2">
                {pkg.exclusions.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <X size={14} className="text-red-400 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Aarti Timings */}
          {pkg.isReligious && pkg.artiTimings && pkg.artiTimings.length > 0 && (
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200 p-6">
              <h2 className="font-serif font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">
                🪔 Aarti / Worship Timings
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Sacred aarti schedules at{" "}
                {pkg.name.replace("Darshan", "").replace("Circuit", "")}. Plan
                your visit accordingly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.artiTimings.map((t) => (
                  <div
                    key={t.session}
                    className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      {sessionIcons[t.session]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">
                        {t.session} Aarti
                      </div>
                      <div className="text-orange-600 font-semibold text-base">
                        {t.time}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {t.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Booking Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <div className="text-3xl font-bold text-orange-600 mb-1">
              ₹{pkg.basePrice.toLocaleString()}
              <span className="text-base font-normal text-gray-400">
                /person
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-5">
              Includes vehicle, guide & Aarti pass. Hotel optional.
            </p>
            <button
              onClick={() => setShowBooking(true)}
              className="btn-primary w-full mb-3 text-center"
            >
              Book This Tour
            </button>
            <a
              href="https://wa.me/919689966696?text=Hi%2C%20I%27m%20interested%20in%20booking%20the%20{pkg.name}%20tour."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold px-6 py-3 rounded-full transition-colors border border-green-200 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <div className="mt-6 pt-5 border-t border-gray-100 space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" /> Free cancellation
                up to 7 days before
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" /> Only 50% advance
                required
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" /> 24/7 WhatsApp
                support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif font-bold text-2xl text-gray-800">
                  Book Your Tour
                </h2>
                <p className="text-gray-500 text-sm">{pkg.name}</p>
              </div>
              <button
                onClick={() => setShowBooking(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <BookingFlow pkg={pkg} onClose={() => setShowBooking(false)} />
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackageDetail;
