import { useMapContext } from '@/app/context/mapContext'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

interface IMap {
    children: React.ReactNode
}

export default function Map({ children }: IMap) {
    const { center } = useMapContext()

    return (
        <div
            className={`
                h-screen 
                w-full
            `}
        >
            <MapContainer className={`h-full w-full flex-1 z-10 `} center={center} zoom={5} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {children}
            </MapContainer>
        </div>
    )
}
