import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const TILESERVER_URL = process.env.REACT_APP_TILESERVER_URL

export const Map = () => {
  return (
    <>
      <MapContainer
        center={[45.4593, 9.1909]}
        zoom={13}
        // maxZoom={14}
        scrollWheelZoom={false}
        style={{ height: 536 }}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`${TILESERVER_URL}/styles/basic-preview/{z}/{x}/{y}.png`}
        />
        <Marker position={[45.4593, 9.1909]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
