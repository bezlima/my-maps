'use client'

import { useMemo, useRef } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'
import { useMarkersContext } from '@/app/context/markersContext'
import { customIcon } from '@/app/components/markerStyle'

export default function AddNewMarker() {
    const { markerPosition, setMarkerPosition } = useMarkersContext()

    const markerRef = useRef<any>(null)
    useMapEvents({
        click(e) {
            setMarkerPosition(e.latlng)
        },
    })
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setMarkerPosition(marker && marker.getLatLng())
                }
            },
        }),
        [setMarkerPosition]
    )

    return (
        <>
            {markerPosition.lat != 0 && (
                <Marker
                    draggable={true}
                    eventHandlers={eventHandlers}
                    position={[markerPosition.lat, markerPosition.lng]}
                    ref={markerRef}
                    icon={customIcon}
                ></Marker>
            )}
        </>
    )
}
