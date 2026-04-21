import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Car,
  Building2,
  CreditCard,
  ChevronRight,
  Check,
  Star,
  Wifi,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { TourPackage, Vehicle, Hotel } from "../types";
import { vehicles as allVehicles, hotels as allHotels } from "../data/mockData";
import api from "../services/api";

interface BookingFlowProps {
  pkg: TourPackage;
  onClose?: () => void;
}

const steps = ["Travel Details", "Choose Vehicle", "Add Hotel", "Review & Pay"];

const BookingFlow: React.FC<BookingFlowProps> = ({ pkg, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [peopleCount, setPeopleCount] = useState(2);
  const [travelDate, setTravelDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [skipHotel, setSkipHotel] = useState(false);
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const filteredVehicles = useMemo(
    () => allVehicles.filter((v) => v.capacity >= peopleCount),
    [peopleCount],
  );
  const filteredHotels = useMemo(() => {
    if (pkg.nights === 0) return [];
    return allHotels
      .filter(
        (h) =>
          h.location
            .toLowerCase()
            .includes(pkg.location.split(",")[0].toLowerCase()) ||
          allHotels.slice(0, 3),
      )
      .slice(0, 6);
  }, [pkg]);

  const vehicleCost = selectedVehicle
    ? selectedVehicle.pricePerKm * pkg.totalKm
    : 0;
  const roomsNeeded = Math.ceil(peopleCount / 2);
  const hotelCost =
    selectedHotel && pkg.nights > 0
      ? selectedHotel.pricePerRoom * roomsNeeded * pkg.nights
      : 0;
  const total = vehicleCost + hotelCost;
  const advance = Math.round(total * 0.5);

  const canNext = () => {
    if (step === 0) return travelDate && peopleCount > 0;
    if (step === 1) return selectedVehicle !== null;
    if (step === 2)
      return skipHotel || selectedHotel !== null || pkg.nights === 0;
    return true;
  };

  const handleBook = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await api.post("/bookings", {
        packageId: pkg.id,
        vehicleId: selectedVehicle!.id,
        hotelId: selectedHotel?.id,
        travelDate,
        peopleCount,
        totalAmount: total,
        advanceAmount: advance,
        specialRequests,
      });
      setSuccess(true);
    } catch {
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Booking Confirmed!
        </h3>
        <p className="text-gray-500 mb-6">
          Your booking for <strong>{pkg.name}</strong> has been placed. Our team
          will contact you within 24 hours to confirm details and payment.
        </p>
        <div className="bg-orange-50 rounded-xl p-4 inline-block text-left mb-6">
          <div className="text-sm text-gray-600">
            Advance Amount to Pay:{" "}
            <span className="text-2xl font-bold text-orange-600 ml-2">
              ₹{advance.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="btn-primary"
          >
            View My Bookings
          </button>
          <a
            href="https://wa.me/919689966696?text=Hi%2C%20I%20just%20booked%20a%20tour%20with%20GK%20International%20and%20want%20to%20proceed%20with%20payment."
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Pay via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${i < step ? "bg-green-500 text-white" : i === step ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span
                className={`text-xs hidden sm:block ${i === step ? "text-orange-600 font-semibold" : "text-gray-400"}`}
              >
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-green-400" : "bg-gray-200"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 0: Travel Details */}
      {step === 0 && (
        <div className="space-y-5">
          <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
            <Users size={20} className="text-orange-500" /> Travel Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travel Date
              </label>
              <input
                type="date"
                value={travelDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Travellers
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                  className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-lg transition-colors"
                >
                  −
                </button>
                <span className="flex-1 text-center font-semibold text-gray-800 py-3">
                  {peopleCount}
                </span>
                <button
                  onClick={() => setPeopleCount(Math.min(50, peopleCount + 1))}
                  className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 text-sm text-gray-600">
            <strong className="text-orange-700">Package:</strong> {pkg.name} |{" "}
            <strong className="text-orange-700">Distance:</strong> {pkg.totalKm}{" "}
            km | <strong className="text-orange-700">Duration:</strong>{" "}
            {pkg.duration}
          </div>
        </div>
      )}

      {/* Step 1: Vehicle */}
      {step === 1 && (
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <Car size={20} className="text-orange-500" /> Choose Your Vehicle
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Showing vehicles suitable for{" "}
            <strong>{peopleCount} travellers</strong>. Total distance:{" "}
            <strong>{pkg.totalKm} km</strong>.
          </p>
          <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-1">
            {filteredVehicles.map((v) => {
              const cost = v.pricePerKm * pkg.totalKm;
              const selected = selectedVehicle?.id === v.id;
              return (
                <div
                  key={v.id}
                  onClick={() => setSelectedVehicle(v)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selected ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"}`}
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-20 h-14 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-sm">
                      {v.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {v.type} · Up to {v.capacity} people · ₹{v.pricePerKm}/km
                    </div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {v.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-orange-600 text-lg">
                      ₹{cost.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">total fare</div>
                    {selected && (
                      <Check
                        size={18}
                        className="text-green-500 ml-auto mt-1"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Hotel */}
      {step === 2 && (
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <Building2 size={20} className="text-orange-500" /> Add Hotel Stay
          </h3>
          {pkg.nights === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Building2 size={40} className="mx-auto mb-3 text-gray-300" />
              <p>This is a day tour – no overnight stay required.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-2">
                You need{" "}
                <strong>
                  {roomsNeeded} room{roomsNeeded > 1 ? "s" : ""}
                </strong>{" "}
                for {peopleCount} travellers ×{" "}
                <strong>
                  {pkg.nights} night{pkg.nights > 1 ? "s" : ""}
                </strong>
                .
              </p>
              <button
                onClick={() => {
                  setSkipHotel(!skipHotel);
                  setSelectedHotel(null);
                }}
                className={`mb-4 text-sm px-4 py-2 rounded-full border transition-all ${skipHotel ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-600 hover:border-gray-400"}`}
              >
                {skipHotel ? "✓" : ""} Skip Hotel – I'll arrange myself
              </button>
              {!skipHotel && (
                <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-1">
                  {(filteredHotels.length
                    ? filteredHotels
                    : allHotels.slice(0, 3)
                  ).map((h) => {
                    const cost = h.pricePerRoom * roomsNeeded * pkg.nights;
                    const selected = selectedHotel?.id === h.id;
                    return (
                      <div
                        key={h.id}
                        onClick={() => setSelectedHotel(h)}
                        className={`flex gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selected ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"}`}
                      >
                        <img
                          src={h.image}
                          alt={h.name}
                          className="w-24 h-16 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-800 text-sm">
                            {h.name}
                          </div>
                          <div className="flex items-center gap-1 my-0.5">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                size={11}
                                className={
                                  i < Math.round(h.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              {h.rating}
                            </span>
                          </div>
                          <div className="flex gap-1 flex-wrap">
                            {h.amenities.slice(0, 3).map((a) => (
                              <span
                                key={a}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-orange-600">
                            ₹{cost.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">
                            {roomsNeeded} room × {pkg.nights} night
                            {pkg.nights > 1 ? "s" : ""}
                          </div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${h.category === "luxury" ? "bg-yellow-100 text-yellow-700" : h.category === "standard" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}
                          >
                            {h.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2 mb-5">
            <CreditCard size={20} className="text-orange-500" /> Review &
            Confirm
          </h3>
          <div className="space-y-3 mb-5">
            {[
              ["Package", pkg.name],
              [
                "Travel Date",
                new Date(travelDate).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
              ],
              [
                "Travellers",
                `${peopleCount} person${peopleCount > 1 ? "s" : ""}`,
              ],
              ["Vehicle", selectedVehicle?.name || ""],
              [
                "Hotel",
                selectedHotel
                  ? `${selectedHotel.name} (${roomsNeeded} room × ${pkg.nights} night)`
                  : "Not selected",
              ],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between py-2 border-b border-gray-100 text-sm"
              >
                <span className="text-gray-500">{label}</span>
                <span className="font-medium text-gray-800 text-right max-w-[60%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 rounded-xl p-4 space-y-2 text-sm mb-5">
            <div className="flex justify-between">
              <span className="text-gray-600">Vehicle Cost</span>
              <span className="font-medium">
                ₹{vehicleCost.toLocaleString()}
              </span>
            </div>
            {hotelCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Hotel Cost</span>
                <span className="font-medium">
                  ₹{hotelCost.toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold border-t border-orange-200 pt-2 text-gray-800">
              <span>Total Amount</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-orange-700 font-bold text-base">
              <span>50% Advance (Pay Now)</span>
              <span>₹{advance.toLocaleString()}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests (optional)
            </label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={2}
              placeholder="Any dietary preferences, accessibility needs, etc."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-5 border-t border-gray-100">
        {step > 0 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-sm transition-all"
          >
            ← Back
          </button>
        ) : (
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-gray-400 hover:text-gray-600 font-medium text-sm"
          >
            <X size={16} className="inline mr-1" />
            Close
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${canNext() ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleBook}
            disabled={loading}
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all disabled:opacity-60"
          >
            {loading
              ? "Processing..."
              : `Confirm & Pay ₹${advance.toLocaleString()}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
