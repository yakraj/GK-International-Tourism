import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Globe,
  Mountain,
  Sun,
  MapPin,
  Anchor,
  Hotel,
  Zap,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      {/* Top bar */}
      <div
        className={`hidden md:flex items-center justify-between px-6 py-1 text-sm ${scrolled || !isHome ? "bg-orange-500 text-white" : "bg-black/30 text-white"}`}
      >
        <div className="flex items-center gap-4">
          <a
            href="tel:9689966696"
            className="flex items-center gap-1 hover:text-orange-100 transition-colors"
          >
            <Phone size={12} /> 9689966696
          </a>
          <a
            href="tel:9545116260"
            className="flex items-center gap-1 hover:text-orange-100 transition-colors"
          >
            <Phone size={12} /> 9545116260
          </a>
        </div>
        <span className="font-medium">
          ✦ Since 1993 – 30+ Years of Trusted Service ✦
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-100"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-100"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-100"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`flex items-center justify-between px-4 md:px-8 py-3 ${scrolled || !isHome ? "text-gray-800" : "text-white"}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl font-serif">GK</span>
          </div>
          <div className="hidden sm:block">
            <div
              className={`font-serif font-bold text-xl leading-tight ${scrolled || !isHome ? "text-orange-600" : "text-white"}`}
            >
              GK International
            </div>
            <div
              className={`text-xs ${scrolled || !isHome ? "text-gray-500" : "text-orange-100"}`}
            >
              Tours & Travels
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
          >
            Home
          </Link>

          {/* Packages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPackagesOpen(true)}
            onMouseLeave={() => setPackagesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
            >
              Packages <ChevronDown size={14} />
            </button>
            {packagesOpen && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-2 border border-gray-100">
                <Link
                  to="/packages"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <MapPin size={14} /> All Packages
                </Link>
                <Link
                  to="/packages?category=spiritual"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <Sun size={14} /> Spiritual Tours
                </Link>
                <Link
                  to="/packages?category=holiday"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <MapPin size={14} /> Holiday Tours
                </Link>
                <Link
                  to="/packages?category=hillstation"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <Mountain size={14} /> Hill Stations
                </Link>
                <Link
                  to="/international"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <Globe size={14} /> International
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/religious-places"
            className={`px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
          >
            Religious Places
          </Link>
          <Link
            to="/international"
            className={`px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
          >
            International
          </Link>

          {/* Book Now Dropdown — Special */}
          <div
            className="relative"
            onMouseEnter={() => setBookingsOpen(true)}
            onMouseLeave={() => setBookingsOpen(false)}
          >
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm shadow hover:from-orange-600 hover:to-yellow-500 transition-all">
              <Zap size={13} /> Book Now <ChevronDown size={13} />
            </button>
            {bookingsOpen && (
              <div className="absolute top-full right-0 w-52 bg-white shadow-xl rounded-xl py-2 border border-gray-100 mt-1">
                <div className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Special Bookings
                </div>
                <Link
                  to="/cruise-booking"
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <Anchor size={15} className="text-blue-500" /> Cruise Booking
                </Link>
                <Link
                  to="/hotel-booking"
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  <Hotel size={15} className="text-amber-500" /> Hotel Booking
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/gallery"
            className={`px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all ${scrolled || !isHome ? "text-gray-700" : "text-white hover:text-orange-200"}`}
          >
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <Link
                to="/dashboard"
                className="text-sm font-medium text-orange-600 hover:text-orange-700"
              >
                Hi, {user.name?.split(" ")[0]}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-red-500 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-red-200 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all ${scrolled || !isHome ? "border-orange-400 text-orange-600 hover:bg-orange-50" : "border-white text-white hover:bg-white/20"}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col py-2">
            {[
              ["/", "Home"],
              ["/packages", "All Packages"],
              ["/packages?category=spiritual", "Spiritual Tours"],
              ["/packages?category=holiday", "Holiday Tours"],
              ["/religious-places", "Religious Places"],
              ["/international", "International"],
              ["/cruise-booking", "🚢 Cruise Booking"],
              ["/hotel-booking", "🏨 Hotel Booking"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                to={href}
                className="px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-2 px-6 pb-4 flex flex-col gap-2">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-orange-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    My Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 py-2 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="btn-outline text-center py-2.5"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-center py-2.5"
                  >
                    Sign Up Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
