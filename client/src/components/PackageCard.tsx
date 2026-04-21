import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { TourPackage } from "../types";

interface PackageCardProps {
  pkg: TourPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(pkg.rating));

  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="card group cursor-pointer block"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {pkg.badge}
          </span>
        )}
        {pkg.isReligious && (
          <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            OM
          </span>
        )}
        <div className="absolute bottom-3 left-3 text-white">
          <div className="flex items-center gap-1 text-xs">
            <MapPin size={12} className="text-orange-300" />
            <span>{pkg.location}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-serif font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors leading-tight mb-1">
          {pkg.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {pkg.shortDesc}
        </p>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {pkg.totalKm} km
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {stars.map((filled, i) => (
            <Star
              key={i}
              size={13}
              className={
                filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            {pkg.rating} ({pkg.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">Starting from</span>
            <div className="text-xl font-bold text-orange-600">
              ₹{pkg.basePrice.toLocaleString()}
              <span className="text-sm font-normal text-gray-400">/person</span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
            Book Now <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
