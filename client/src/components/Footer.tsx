import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl font-serif">GK</span>
          </div>
          <div>
            <div className="text-white font-serif font-bold text-lg">
              GK International
            </div>
            <div className="text-orange-400 text-xs">Tours & Travels</div>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Your trusted partner since 1993. We provide domestic and international
          tour packages at affordable prices with personalized service.
        </p>
        <div className="flex gap-3">
          {[
            {
              href: "https://facebook.com",
              label: "Facebook",
              svg: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              ),
            },
            {
              href: "https://instagram.com",
              label: "Instagram",
              svg: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              ),
            },
            {
              href: "https://youtube.com",
              label: "YouTube",
              svg: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              ),
            },
            {
              href: "https://twitter.com",
              label: "Twitter",
              svg: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map(({ href, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-300"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Spiritual Tours */}
      <div>
        <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">
          Spiritual Tours
        </h4>
        <ul className="space-y-2 text-sm">
          {[
            ["shirdi-darshan", "Shirdi Local Tours"],
            ["nashik-darshan", "Nashik Darshan"],
            ["trimbakeshwar-jyotirlinga", "Trimbakeshwar Darshan"],
            ["jyotirlinga-circuit", "Jyotirlinga Darshan Circuit"],
            ["mumbai-darshan", "Mumbai Darshan"],
            ["csn-darshan", "Chhatrapati Sambhaji Nagar"],
          ].map(([slug, name]) => (
            <li key={slug}>
              <Link
                to={`/packages/${slug}`}
                className="hover:text-orange-400 transition-colors"
              >
                → {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Holiday Tours */}
      <div>
        <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">
          Holiday Tours
        </h4>
        <ul className="space-y-2 text-sm">
          {[
            ["hill-station-escape", "Hill Station Tours"],
            ["goa-beach-holiday", "Goa Special Tour"],
            ["/packages?category=holiday", "Domestic Packages"],
            ["/international", "International Packages"],
            ["/international", "Visa Assistance"],
            ["/international", "Immigration Help"],
          ].map(([href, name]) => (
            <li key={name}>
              <Link
                to={href.startsWith("/") ? href : `/packages/${href}`}
                className="hover:text-orange-400 transition-colors"
              >
                → {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">
          Contact Info
        </h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <MapPin size={15} className="mt-0.5 text-orange-400 shrink-0" />
            <span>
              Hotel Sun-n-Sand Line, Saibaba Mandir Road, Opposite Kanhaiya
              Hotel, Shirdi – 423109
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={15} className="text-orange-400 shrink-0" />
            <a
              href="tel:9689966696"
              className="hover:text-orange-400 transition-colors"
            >
              +91 9689966696
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={15} className="text-orange-400 shrink-0" />
            <a
              href="tel:9545116260"
              className="hover:text-orange-400 transition-colors"
            >
              +91 9545116260
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={15} className="text-orange-400 shrink-0" />
            <a
              href="mailto:Gkinternationalshirdi@gmail.com"
              className="hover:text-orange-400 transition-colors text-xs"
            >
              Gkinternationalshirdi@gmail.com
            </a>
          </li>
        </ul>
        <a
          href="https://wa.me/919689966696?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20tour%20with%20GK%20International."
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors w-fit"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-800 py-4 px-4 text-center text-xs text-gray-500">
      © 2025 GK International Tours & Travels. All rights reserved. | Shirdi,
      Maharashtra, India
    </div>
  </footer>
);

export default Footer;
