import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '50vh',
};

const position = {
    lat: -34.022710,
    lng: 18.449650
};

const onLoad = marker => {
    console.log('marker:', marker)
}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBdJKWt9PMYserWHTQ1B0B1FNiKm93pPVU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
        <Marker
        onLoad={onLoad}
        position={position}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)