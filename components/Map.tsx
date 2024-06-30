import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; 

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current) {
      import('leaflet').then((L) => {
        const map = L.map(mapRef.current!, {
          center: [42.8805, -8.5456],
          zoom: 13,
          zoomControl: true,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              map.setView([latitude, longitude], 13);
              L.marker([latitude, longitude]).addTo(map)
                .bindPopup('You are here')
                .openPopup();
            },
            (error) => {
              console.error('Error getting location: ', error);
            }
          );
        }
      });
    }
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ height: '400px', width: '35%', borderRadius: '15px', overflow: 'hidden', border: '5px solid #0047FF' }} 
    />
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });

