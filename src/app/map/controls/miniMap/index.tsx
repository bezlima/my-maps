import { MapContainer, Rectangle, TileLayer, useMap, useMapEvent } from 'react-leaflet'
import { useEventHandlers } from '@react-leaflet/core'
import { useCallback, useMemo, useState } from 'react'
import { Evented } from 'leaflet'

const POSITION_CLASSES: Record<string, string> = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

const BOUNDS_STYLE = { weight: 1 }

interface LatLng {
    lat: number
    lng: number
}

interface MapProps extends Evented {
    [x: string]: any
    center: LatLng
    zoom: number
    dragging?: boolean
    doubleClickZoom?: boolean
    scrollWheelZoom?: boolean
    attributionControl?: boolean
    zoomControl?: boolean
}

interface MinimapBoundsProps {
    parentMap: MapProps
    zoom: number
}

interface MinimapControlProps {
    position?: keyof typeof POSITION_CLASSES
    zoom: number
}

function MinimapBounds({ parentMap, zoom }: MinimapBoundsProps) {
    const minimap = useMap()

    const onClick = useCallback(
        (e: any) => {
            parentMap.setView(e.latlng, parentMap.getZoom())
        },
        [parentMap]
    )
    useMapEvent('click', onClick)

    const [bounds, setBounds] = useState<LatLng[] | any>(parentMap.getBounds())
    const onChange = useCallback(() => {
        setBounds(parentMap.getBounds())
        minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])

    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [onChange])
    useEventHandlers(
        {
            instance: parentMap,
            context: {
                __version: 0,
                map: minimap,
            },
        },
        handlers
    )

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
}

export default function MinimapControl({ position, zoom }: MinimapControlProps) {
    const parentMap = useMap() as any
    const mapZoom = zoom || 0

    const minimap = useMemo(
        () => (
            <MapContainer
                style={{ height: 150, width: 150 }}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
        ),
        [parentMap, mapZoom]
    )

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    )
}
