import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { authService } from "../services/authService";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const successMsg = (location.state as any)?.success;
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await authService.login({
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold font-serif">
                  GK
                </span>
              </div>
            </div>
            <h2 className="font-serif font-bold text-2xl text-gray-800">
              GK International Tours
            </h2>
            <p className="text-gray-500 text-sm">Sign in to your account</p>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="font-serif font-bold text-xl text-gray-800 mb-6">
            Welcome Back
          </h3>

          {successMsg && (
            <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
              {successMsg}
            </div>
          )}
          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
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
                Password
              </label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-600 font-semibold hover:underline"
            >
              Register Now
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            <Link to="/" className="text-gray-400 hover:text-gray-600">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
