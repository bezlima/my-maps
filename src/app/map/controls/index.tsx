import { ScaleControl, ZoomControl, useMap } from 'react-leaflet'
import MinimapControl from './miniMap'
import { useEffect } from 'react'
import { useMapContext } from '@/app/context/mapContext'

export default function MapControls() {
    const { center, zoom } = useMapContext()
    const map = useMap()

    useEffect(() => {
        center && map.flyTo(center, zoom)
    }, [center, map, zoom])

    return (
        <>
            <ScaleControl position="bottomright" />
            <ZoomControl position="bottomright" />
            <MinimapControl position="topright" zoom={5} />
        </>
    )
}
