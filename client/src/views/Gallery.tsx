import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { gallery } from "../data/mockData";

const categories = [
  "all",
  "spiritual",
  "holiday",
  "international",
  "hotel",
  "heritage",
];

const Gallery: React.FC = () => {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "all" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner */}
      <div
        className="relative h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white pt-16">
          <div>
            <h1 className="text-4xl font-serif font-bold">Our Gallery</h1>
            <p className="text-gray-300 mt-2">
              Memories from thousands of journeys
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${active === c ? "bg-orange-500 text-white shadow-sm" : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200"}`}
            >
              {c === "all" ? "🌐 All" : c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img.url)}
              className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-xl transition-all duration-300 ${i % 3 === 0 ? "h-56" : i % 3 === 1 ? "h-44" : "h-64"}`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-semibold">
                  {img.caption}
                </p>
                <p className="text-gray-300 text-xs">{img.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
