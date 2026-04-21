import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi GK International Tours!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/919689966696?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner */}
      <div
        className="relative h-56 bg-cover bg-center bg-orange-600"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1423347834838-5162bb452ca4?w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white pt-16">
          <div>
            <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
            <p className="text-gray-300 mt-2">
              We're here to help plan your perfect journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-3xl text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-500">
            Whether you need help planning a spiritual pilgrimage, a holiday
            trip, or international travel — our team at GK International Tours &
            Travels is always ready to assist you.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-orange-600" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Our Office</div>
                <p className="text-gray-500 text-sm">
                  Hotel Sun-n-Sand Line, Saibaba Mandir Road,
                  <br />
                  Opposite Kanhaiya Hotel, Shirdi – 423109, Maharashtra
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Phone Numbers</div>
                <a
                  href="tel:+919689966696"
                  className="text-gray-500 text-sm hover:text-orange-600 block"
                >
                  +91 96899 66696
                </a>
                <a
                  href="tel:+919545116260"
                  className="text-gray-500 text-sm hover:text-orange-600 block"
                >
                  +91 95451 16260
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-purple-600" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Email Address</div>
                <a
                  href="mailto:Gkinternationalshirdi@gmail.com"
                  className="text-gray-500 text-sm hover:text-orange-600"
                >
                  Gkinternationalshirdi@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={20} className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Office Hours</div>
                <p className="text-gray-500 text-sm">
                  Mon – Sat: 8:00 AM – 8:00 PM
                </p>
                <p className="text-gray-500 text-sm">
                  Sunday: 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919689966696?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20tour%20packages."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg w-fit"
          >
            <MessageCircle size={22} /> Chat on WhatsApp
          </a>

          {/* Map iframe */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
            <iframe
              title="GK International Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.150772740924!2d74.476482!3d19.765103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd91461f855d31%3A0x89128b0827181c99!2sGK%20International%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="font-serif font-bold text-2xl text-gray-800 mb-6">
            Send Us a Message
          </h2>
          {sent && (
            <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
              ✓ Message sent! We'll respond on WhatsApp shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm resize-none"
                placeholder="Tell us about your travel plans..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
