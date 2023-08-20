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

export default function Map (Props:Props) {
const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkG1-GmWhIucOMP5sJXClBpZP-E2PKD5w"
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