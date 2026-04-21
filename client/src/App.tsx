import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Packages from "./views/Packages";
import PackageDetail from "./views/PackageDetail";
import Gallery from "./views/Gallery";
import International from "./views/International";
import ReligiousPlaces from "./views/ReligiousPlaces";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import CruiseBooking from "./views/CruiseBooking";
import HotelBooking from "./views/HotelBooking";
import "./App.css";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!localStorage.getItem("token")) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:slug" element={<PackageDetail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/international" element={<International />} />
      <Route path="/religious-places" element={<ReligiousPlaces />} />
      <Route path="/cruise-booking" element={<CruiseBooking />} />
      <Route path="/hotel-booking" element={<HotelBooking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
