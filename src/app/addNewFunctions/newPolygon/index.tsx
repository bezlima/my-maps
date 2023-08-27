import { usePolygonsContext } from '@/app/context/polygonsContext'
import { DivIcon } from 'leaflet'
import { useMemo, useRef, useState } from 'react'
import { Marker, Polygon, useMapEvents } from 'react-leaflet'

export default function AddNewPolygon() {
    const markerRefs = useRef<any>([])

    const { polygonsPosition, setPolygonsPosition } = usePolygonsContext()

    const CustomMarkerIcon = (index: number) => {
        const iconSize = [15, 15] as any
        const html = `<div style="width: ${iconSize[0]}px; height: ${
            iconSize[1]
        }px; background-color: #065f46; color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 11px; font-weight: bold;">${
            index + 1
        }</div>`

        return new DivIcon({
            className: 'custom-marker-icon',
            iconSize,
            html,
        })
    }

    const handleMarkerDragEnd = (index: number) => (e: any) => {
        const marker = markerRefs.current[index]
        if (marker != null) {
            const newLatLng = marker.getLatLng()
            const updatedPositions = [...polygonsPosition]
            updatedPositions[index] = { lat: newLatLng.lat, lng: newLatLng.lng }
            setPolygonsPosition(updatedPositions)
        }
    }

    useMapEvents({
        click(e) {
            setPolygonsPosition([...polygonsPosition, e.latlng])
        },
    })

    return (
        <>
            {polygonsPosition && (
                <Polygon
                    positions={polygonsPosition}
                    pathOptions={{ fillColor: '#115e59', color: '#115e59' }}
                ></Polygon>
            )}
            {polygonsPosition &&
                polygonsPosition.map((vertex, index) => {
                    return (
                        <Marker
                            key={`${index}vertex`}
                            position={[vertex.lat, vertex.lng]}
                            draggable={true}
                            eventHandlers={{
                                dragend: handleMarkerDragEnd(index),
                            }}
                            ref={(ref) => (markerRefs.current[index] = ref)}
                            icon={CustomMarkerIcon(index)}
                        ></Marker>
                    )
                })}
        </>
    )
}
