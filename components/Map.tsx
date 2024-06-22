// components/Map.tsx
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        if (mapRef.current) {
          const map = L.map(mapRef.current).setView([42.8805, -8.5456], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Geolocalización
          map.locate({ setView: true, maxZoom: 16 });
          map.on('locationfound', (e) => {
            const radius = e.accuracy;
            L.marker(e.latlng).addTo(map)
              .bindPopup(`You are within ${radius} meters from this point`).openPopup();
            L.circle(e.latlng, radius).addTo(map);
          });
          map.on('locationerror', (e) => {
            alert(e.message);
          });
        }
      });
    }
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });

