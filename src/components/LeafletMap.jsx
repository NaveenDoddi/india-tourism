import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
function LeafletMap(props) {
      useEffect(() => {
            const map = L.map("map").setView([props.latitude, props.longitute], 5);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const defaultIcon = L.icon({
                  iconUrl: markerIcon,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
            });
            L.Marker.prototype.options.icon = defaultIcon;

            const marker = L.marker([props.latitude, props.longitute]).addTo(map);
            marker.bindPopup(`
                  <div style="display: flex;">
                    <div style="flex: 1;">
                      <img src=${props.imageUrl} alt="Image" style="width: 100%; height: auto;">
                    </div>

                    <div style="flex: 1; padding-left: 10px;">
                      <h6>Your Heading</h6>
                      <p>${props.description}</p>
                    </div>
                  </div>
                  `);

            return () => map.remove();
      }, [props.latitude, props.longitute, props.description]); // Dependencies for re-rendering

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
}



export default LeafletMap;
