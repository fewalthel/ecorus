import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {FC} from 'react'
import L from 'leaflet'
import {CollectionPoint} from "@pages/CollectionPointsPage";


const customIcon = L.icon({
    iconUrl: '/icons/map_icon.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
})

interface Props {
    style?: React.CSSProperties
    markers?: CollectionPoint[]
}

export const MapComponent: FC<Props> = ({style = {}, markers = []}: Props) => {

    const center = markers.length > 0
        ? [markers[0].latitude, markers[0].longitude]
        : [55.751244, 37.618423];

    return (
        <MapContainer center={center} zoom={12}
                      style={{height: '100%', width: '100%', ...style}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={[marker.latitude, marker.longitude]}
                    icon={customIcon}
                />
            ))}
        </MapContainer>
    )
}