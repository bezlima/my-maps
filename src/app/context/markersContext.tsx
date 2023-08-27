'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface ICoordinates {
    lat: number
    lng: number
}

interface IMarker {
    id: number
    title: string
    description: string
    coordinates: { lat: number; lng: number }
}

interface IMarkersContext {
    markers: IMarker[]
    setMarkers: (value: IMarker[]) => void
    markerPosition: { lat: number; lng: number }
    setMarkerPosition: (value: { lat: number; lng: number }) => void
}

const MarkersContext = createContext<IMarkersContext>({
    markers: [],
    setMarkers: () => {},
    markerPosition: { lat: 0, lng: 0 },
    setMarkerPosition: () => {},
})

export function MarkersProvider({ children }: { children: ReactNode }) {
    const [markers, setMarkers] = useState<IMarker[]>([])
    const [markerPosition, setMarkerPosition] = useState<ICoordinates>({ lat: 0, lng: 0 })

    return (
        <MarkersContext.Provider
            value={{
                markers,
                setMarkers,
                markerPosition,
                setMarkerPosition,
            }}
        >
            {children}
        </MarkersContext.Provider>
    )
}

export const useMarkersContext = () => useContext(MarkersContext)
