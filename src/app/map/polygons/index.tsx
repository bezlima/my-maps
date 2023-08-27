import { Polygon, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { usePolygonsContext } from '@/app/context/polygonsContext'
import { useMenuContext } from '@/app/context/menuContext'
import PolygonsExemple from '../../data/polygonsExemple.json'

interface ICoordinates {
    lat: number
    lng: number
}

export default function Polygons() {
    const { polygons } = usePolygonsContext()
    const { showPolygon, showPolygonExemple } = useMenuContext()

    const map = useMap()

    const handleMarkerClick = (position: [number, number]) => {
        map.flyTo(position, 16)
    }

    function polygonCenter(vertices: any) {
        let sumLatitude = 0
        let sumLongitude = 0
        for (let vertex of vertices) {
            sumLatitude += vertex.lat
            sumLongitude += vertex.lng
        }
        const centerLatitude = sumLatitude / vertices.length
        const centerLongitude = sumLongitude / vertices.length

        handleMarkerClick([centerLatitude, centerLongitude])
    }

    return (
        <MarkerClusterGroup
            maxClusterRadius={80}
            spiderfyOnMaxZoom={true}
            polygonOptions={{
                fillColor: 'transparent',
                color: 'transparent',
            }}
            showCoverageOnHover={true}
        >
            {showPolygonExemple && (
                <>
                    {PolygonsExemple &&
                        PolygonsExemple.map((item, index) => {
                            return (
                                <Polygon
                                    positions={item.coordinates.map((latLng: ICoordinates) => [latLng.lat, latLng.lng])}
                                    key={`polygonsExemple${index}`}
                                    eventHandlers={{
                                        click: () => polygonCenter(item.coordinates),
                                    }}
                                    pathOptions={{ fillColor: '#115e59', color: '#115e59' }}
                                >
                                    <Popup>
                                        <p className="!mt-0 !mb-0 text-xl font-bold text-teal-800">{item.title}</p>
                                        <p className="!mb-0 !mt-0 text-sm text-neutral-500">{item.description}</p>
                                    </Popup>
                                </Polygon>
                            )
                        })}
                </>
            )}
            {showPolygon && (
                <>
                    {polygons &&
                        polygons.map((item, index) => {
                            return (
                                <Polygon
                                    positions={item.coordinates.map((latLng: ICoordinates) => [latLng.lat, latLng.lng])}
                                    key={`polygons${index}`}
                                    eventHandlers={{
                                        click: () => polygonCenter(item.coordinates),
                                    }}
                                    pathOptions={{ fillColor: '#115e59', color: '#115e59' }}
                                >
                                    <Popup>
                                        <p className="!mt-0 !mb-0 text-xl font-bold text-teal-800">{item.title}</p>
                                        <p className="!mb-0 !mt-0 text-sm text-neutral-500">{item.description}</p>
                                    </Popup>
                                </Polygon>
                            )
                        })}
                </>
            )}
        </MarkerClusterGroup>
    )
}

//todo: organizar o zoom para o meio do poligono
