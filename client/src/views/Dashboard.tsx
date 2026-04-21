import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Package, Calendar, Users, CreditCard } from "lucide-react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const paymentColors: Record<string, string> = {
  pending: "bg-orange-100 text-orange-700",
  paid: "bg-green-100 text-green-700",
  partial: "bg-blue-100 text-blue-700",
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    api
      .get("/bookings/my")
      .then((res) => setBookings(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 pt-28">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-800">
              Welcome, {user?.name || "Traveller"} 👋
            </h1>
            <p className="text-gray-500 mt-1">{user?.email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/packages"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <Package size={16} /> Browse Packages
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: Package,
              label: "Total Bookings",
              value: bookings.length,
              color: "bg-blue-50 text-blue-600",
            },
            {
              icon: Calendar,
              label: "Upcoming Trips",
              value: bookings.filter((b) => b.status === "confirmed").length,
              color: "bg-green-50 text-green-600",
            },
            {
              icon: CreditCard,
              label: "Pending Payment",
              value: bookings.filter((b) => b.paymentStatus === "pending")
                .length,
              color: "bg-orange-50 text-orange-600",
            },
            {
              icon: Users,
              label: "Total Travellers",
              value: bookings.reduce(
                (sum: number, b: any) => sum + (b.peopleCount || 0),
                0,
              ),
              color: "bg-purple-50 text-purple-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div
                className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}
              >
                <stat.icon size={18} />
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-serif font-bold text-xl text-gray-800">
              My Bookings
            </h2>
          </div>
          {loading ? (
            <div className="p-12 text-center text-gray-400">
              Loading your bookings...
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-bold text-gray-700 text-lg mb-2">
                No bookings yet
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Start your spiritual journey with GK International Tours
              </p>
              <Link to="/packages" className="btn-primary">
                Explore Packages
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Booking ID",
                      "Package",
                      "Travel Date",
                      "People",
                      "Total Amount",
                      "Status",
                      "Payment",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map((b) => (
                    <tr
                      key={b.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-5 py-4 font-mono text-gray-500 text-xs">
                        #{String(b.id).padStart(4, "0")}
                      </td>
                      <td className="px-5 py-4 font-medium text-gray-800">
                        Package #{b.packageId}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {new Date(b.travelDate).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {b.peopleCount} pax
                      </td>
                      <td className="px-5 py-4 font-semibold text-gray-800">
                        ₹{Number(b.totalAmount).toLocaleString()}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColors[b.status] || "bg-gray-100 text-gray-600"}`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${paymentColors[b.paymentStatus] || "bg-gray-100 text-gray-600"}`}
                        >
                          {b.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dashboard;
