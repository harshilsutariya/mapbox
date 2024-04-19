import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from "./pin.png"; // Importing the pin image

const MapDesign = () => {
  // State to store the marker coordinates
  const [markerCoordinates, setMarkerCoordinates] = useState([
    { id: 1, longitude: 72.8311, latitude: 21.1702 },
    { id: 2, longitude: 72.85, latitude: 21.18 },
    { id: 3, longitude: 72.82, latitude: 21.16 },
    { id: 4, longitude: 72.84, latitude: 21.17 },
  ]);

  // Function to update marker coordinates
  const updateMarkerCoordinates = (id, longitude, latitude) => {
    setMarkerCoordinates((prevCoordinates) =>
      prevCoordinates.map((coordinate) =>
        coordinate.id === id
          ? { ...coordinate, longitude, latitude }
          : coordinate
      )
    );
  };

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoieGFob3ZleDE1MCIsImEiOiJjbGZpNjU5amsxbmFxM3NuenoyMGNqM3Q4In0.vjlQIPhNv3XlfOUNC6Wolg"
      initialViewState={{
        longitude: markerCoordinates[0].longitude,
        latitude: markerCoordinates[0].latitude,
        zoom: 14,
      }}
      style={{ width: 1600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {/* Mapping through markerCoordinates to render markers */}
      {markerCoordinates.map((coordinate) => (
        <Marker
          key={coordinate.id}
          longitude={coordinate.longitude}
          latitude={coordinate.latitude}
          anchor="bottom"
        >
          {/* Custom marker image */}
          <img
            src={pin}
            alt={`Pin ${coordinate.id}`}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
      ))}
    </Map>
  );
};

export default MapDesign;
