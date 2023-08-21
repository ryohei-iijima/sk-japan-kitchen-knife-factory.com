'use client'
import {GoogleMap, useJsApiLoader, MarkerF} from '@react-google-maps/api';

type Props = {
    mapInfo: {
        center: {
            lat: number,
            lng: number
        }
        zoom: number
    }
}

const containerStyle = {
  width: "357px",
  height: "286px"
};

const googleMapsApiKey = process.env.GOOGLE_MAP_API_KEY;

export default function Map (Props:Props) {
const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey
    })

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={Props.mapInfo.center}
          zoom={Props.mapInfo.zoom}
        >
            <MarkerF position={Props.mapInfo.center}/>
          <></>
        </GoogleMap>
    ) : <></>
}