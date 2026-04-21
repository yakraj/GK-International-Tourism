import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { HighlightPlace } from "../types";

// Fix leaflet default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface RouteMapProps {
  places: HighlightPlace[];
  packageName: string;
}

/** Fits the map bounds to show all markers */
const FitBounds: React.FC<{ positions: [number, number][] }> = ({
  positions,
}) => {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 0) {
      const bounds = L.latLngBounds(positions.map((p) => L.latLng(p[0], p[1])));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [map, positions]);
  return null;
};

const RouteMap: React.FC<RouteMapProps> = ({ places, packageName }) => {
  const [roadPath, setRoadPath] = useState<[number, number][]>([]);
  const [routeLoading, setRouteLoading] = useState(true);
  const [routeError, setRouteError] = useState(false);

  useEffect(() => {
    if (!places || places.length < 2) {
      setRouteLoading(false);
      return;
    }

    // OSRM public API – free, no API key, real road geometry from OpenStreetMap data
    // Coords must be in lng,lat order for OSRM
    const waypointStr = places.map((p) => `${p.lng},${p.lat}`).join(";");
    const url = `https://router.project-osrm.org/route/v1/driving/${waypointStr}?overview=full&geometries=geojson`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.routes && data.routes[0]) {
          // GeoJSON coords are [lng, lat] — flip to [lat, lng] for Leaflet
          const path: [number, number][] =
            data.routes[0].geometry.coordinates.map(
              ([lng, lat]: [number, number]) => [lat, lng],
            );
          setRoadPath(path);
        } else {
          setRouteError(true);
        }
      })
      .catch(() => setRouteError(true))
      .finally(() => setRouteLoading(false));
  }, [places]);

  if (!places || places.length === 0) return null;

  const markerPositions: [number, number][] = places.map((p) => [p.lat, p.lng]);
  const center: [number, number] = [places[0].lat, places[0].lng];

  // Orange-numbered DivIcon markers
  const makeIcon = (index: number) =>
    new L.DivIcon({
      className: "",
      html: `<div style="
        width:32px; height:32px; background:#f97316; border-radius:50% 50% 50% 0;
        transform:rotate(-45deg); display:flex; align-items:center; justify-content:center;
        border:2px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.35);
      ">
        <span style="transform:rotate(45deg); color:white; font-weight:700; font-size:12px;">${index + 1}</span>
      </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -36],
    });

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      <div className="px-6 pt-5 pb-3 flex items-center justify-between">
        <div>
          <h2 className="font-serif font-bold text-xl text-gray-800">
            🗺️ Tour Route Map
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Actual road route · Click a marker to see the place
          </p>
        </div>
        {routeLoading && (
          <span className="text-xs bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1 rounded-full animate-pulse">
            Loading road route…
          </span>
        )}
        {!routeLoading && routeError && (
          <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            Showing straight-line route
          </span>
        )}
      </div>

      {/* Legend strip */}
      <div className="px-6 pb-3 flex flex-wrap gap-2">
        {places.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 text-xs bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-3 py-1 font-medium"
          >
            <span className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">
              {i + 1}
            </span>
            {p.name}
          </span>
        ))}
      </div>

      <MapContainer
        center={center}
        zoom={12}
        style={{ height: "440px", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Road route from OSRM — Google Maps-style blue with white casing */}
        {roadPath.length > 0 ? (
          <>
            {/* White casing (border) underneath */}
            <Polyline
              positions={roadPath}
              pathOptions={{ color: "#ffffff", weight: 8, opacity: 1 }}
            />
            {/* Blue fill on top */}
            <Polyline
              positions={roadPath}
              pathOptions={{ color: "#1a73e8", weight: 5, opacity: 1 }}
            />
          </>
        ) : (
          !routeLoading && (
            <Polyline
              positions={markerPositions}
              pathOptions={{
                color: "#1a73e8",
                weight: 3,
                opacity: 0.7,
                dashArray: "8, 6",
              }}
            />
          )
        )}

        {/* Numbered markers with popups */}
        {places.map((place, i) => (
          <Marker key={i} position={[place.lat, place.lng]} icon={makeIcon(i)}>
            <Popup maxWidth={210}>
              <div style={{ fontFamily: "Inter, sans-serif" }}>
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "6px",
                  }}
                />
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "13px",
                    color: "#1f2937",
                    marginBottom: "3px",
                  }}
                >
                  <span
                    style={{
                      background: "#f97316",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "1px 6px",
                      fontSize: "10px",
                      marginRight: "5px",
                    }}
                  >
                    {i + 1}
                  </span>
                  {place.name}
                </div>
                {place.description && (
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      lineHeight: 1.4,
                    }}
                  >
                    {place.description}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds positions={markerPositions} />
      </MapContainer>
    </div>
  );
};

export default RouteMap;
