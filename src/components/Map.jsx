import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom component to update map center on GPS change
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 13); // update center and zoom
  }, [position, map]);
  return null;
};

function Map() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error('Error getting location:', err);
          alert('Location access denied. Showing default.');
          setPosition([12.9716, 77.5946]); // fallback (Bangalore)
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert('Geolocation not supported');
      setPosition([12.9716, 77.5946]); // fallback
    }
  }, []);

  if (!position) return <p>Loading map with your location...</p>;

  return (
    <div className='min-h-screen w-full' >
      <MapContainer center={position} zoom={13} style={{width:"100%",zIndex:"1 !important"}} className='min-h-screen' >
      <RecenterMap position={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Map;
