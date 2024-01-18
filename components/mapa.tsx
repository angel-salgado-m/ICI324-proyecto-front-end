import { MapContainer, TileLayer, Marker, Popup,CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Map() {
  return (
    <MapContainer center={[-33.04480458328765, -71.58941921866781]} zoom={13} style={{ height: '300px', width: '300px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker center={[-33.04480458328765, -71.58941921866781]}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <CircleMarker center={[-33.05502047799929, -71.61534008399448]}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <CircleMarker center={[-33.04048765189314, -71.64606746739497]}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
    </MapContainer>
  );
}

export default Map;
