import { Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import MarkersExemple from '../../data/markerExemple.json'
import { useMarkersContext } from '@/app/context/markersContext'
import { useMenuContext } from '@/app/context/menuContext'
import { customIcon } from '@/app/components/markerStyle'

export default function Makers() {
    const { markers } = useMarkersContext()
    const { showMarker, showMarkerExemple } = useMenuContext()

    const map = useMap()

    const handleMarkerClick = (position: [number, number]) => {
        map.flyTo(position, 16)
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
            {showMarkerExemple && (
                <>
                    {MarkersExemple &&
                        MarkersExemple.map((item, index) => {
                            return (
                                <Marker
                                    position={[item.coordinates.lat, item.coordinates.lng]}
                                    key={`markerExemple${index}`}
                                    eventHandlers={{
                                        click: () => handleMarkerClick([item.coordinates.lat, item.coordinates.lng]),
                                    }}
                                    icon={customIcon}
                                >
                                    <Popup>
                                        <p className="!mt-0 !mb-0 text-xl font-bold text-teal-800">{item.title}</p>
                                        <p className="!mb-0 !mt-0 text-sm text-neutral-500">{item.description}</p>
                                    </Popup>
                                </Marker>
                            )
                        })}
                </>
            )}
            {showMarker && (
                <>
                    {markers &&
                        markers.map((item, index) => {
                            return (
                                <Marker
                                    position={[item.coordinates.lat, item.coordinates.lng]}
                                    key={`marker${index}`}
                                    eventHandlers={{
                                        click: () => handleMarkerClick([item.coordinates.lat, item.coordinates.lng]),
                                    }}
                                    icon={customIcon}
                                >
                                    <Popup>
                                        <p className="!mt-0 !mb-0 text-xl font-bold text-teal-800">{item.title}</p>
                                        <p className="!mb-0 !mt-0 text-sm text-neutral-500">{item.description}</p>
                                    </Popup>
                                </Marker>
                            )
                        })}
                </>
            )}
        </MarkerClusterGroup>
    )
}
