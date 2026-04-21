import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PackageCard from "../components/PackageCard";
import { packages } from "../data/mockData";

const categories = [
  { value: "", label: "All Packages" },
  { value: "spiritual", label: "🙏 Spiritual" },
  { value: "holiday", label: "🌴 Holiday" },
  { value: "hillstation", label: "⛰️ Hill Station" },
  { value: "international", label: "✈️ International" },
];

const Packages: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let result = [...packages];
    if (category) result = result.filter((p) => p.category === category);
    if (search)
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(search.toLowerCase()),
      );
    if (sort === "price-low") result.sort((a, b) => a.basePrice - b.basePrice);
    else if (sort === "price-high")
      result.sort((a, b) => b.basePrice - a.basePrice);
    else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [search, category, sort]);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Banner */}
      <div
        className="relative h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white pt-16">
          <div>
            <h1 className="text-4xl font-serif font-bold">Our Tour Packages</h1>
            <p className="text-gray-300 mt-2">
              From spiritual pilgrimages to international adventures
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5 flex-1 min-w-0">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search packages, destinations..."
              className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === c.value ? "bg-orange-500 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal size={16} className="text-gray-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-2.5 rounded-xl outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-800">
              {filtered.length}
            </span>{" "}
            packages found
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">
              No packages found for "{search}"
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
              }}
              className="mt-4 text-orange-500 underline text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
