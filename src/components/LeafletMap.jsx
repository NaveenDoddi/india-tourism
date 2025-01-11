import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
function LeafletMap(props) {
      useEffect(() => {
            const map = L.map("map").setView([20.5937, 78.9629], 5); // Coordinates of India

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const defaultIcon = L.icon({
                  iconUrl: markerIcon,
                  iconSize: [25, 41], // Default size of the icon
                  iconAnchor: [12, 41], // Anchor of the icon (base point)
                  popupAnchor: [1, -34], // Point where the popup opens relative to the icon
            });
            L.Marker.prototype.options.icon = defaultIcon;

            // Add a marker for place with a popup
            L.marker([props.lat, props.long])
                  .addTo(map)
                  .bindPopup(`<b>Mumbai</b>${props.description}<br/>.`);

                  
            return () => {
                  map.remove(); // Cleanup map on component unmount
            };
      }, []);

      return (
            <div
                  id="map"
                  style={{
                        height: "80vh",
                        width: "100%",
                        border: "1px solid gray",
                  }}
            ></div>
      );
};

export default LeafletMap;
