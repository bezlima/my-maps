import { useMapContext } from '@/app/context/mapContext'
import { Marker, Popup, useMap } from 'react-leaflet'
import { customIcon } from '@/app/components/markerStyle'
import { useEffect, useState } from 'react'

export default function SearchMarker() {
    const { center, city } = useMapContext()

    const map = useMap()

    const handleMarkerClick = (position: [number, number]) => {
        map.flyTo(position, 16)
    }

    const [disabledMaker, setDisabledMarker] = useState<boolean>(true)

    useEffect(() => {
        if (center[0] === -13.940322128384613 && center[1] === -57.39257812500001) setDisabledMarker(true)
        else setDisabledMarker(false)
    }, [center])

    return (
        <>
            {!disabledMaker && (
                <>
                    <Marker
                        position={center}
                        eventHandlers={{
                            click: () => handleMarkerClick(center),
                        }}
                        icon={customIcon}
                    >
                        <Popup>
                            <p className="!mb-0 !mt-0 text-md ">fechar marcador? </p>
                            <button
                                onClick={() => setDisabledMarker(true)}
                                className="font-bold text-teal-800 hover:text-teal-400 text-md"
                            >
                                fechar
                            </button>
                        </Popup>
                    </Marker>
                </>
            )}
        </>
    )
}
