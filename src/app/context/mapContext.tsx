'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface IMapContext {
    city: string
    setCity: (value: string) => void
    center: [number, number]
    setCenter: (value: [number, number]) => void
    zoom: number
    setZoom: (value: number) => void
}

const MapContext = createContext<IMapContext>({
    city: '',
    setCity: () => {},
    center: [-13.940322128384613, -57.39257812500001],
    setCenter: () => {},
    zoom: 10,
    setZoom: () => {},
})

export function MapProvider({ children }: { children: ReactNode }) {
    const [city, setCity] = useState<string>('')
    const [center, setCenter] = useState<[number, number]>([-13.940322128384613, -57.39257812500001])
    const [zoom, setZoom] = useState<number>(5)

    return (
        <MapContext.Provider
            value={{
                city,
                setCity,
                center,
                setCenter,
                zoom,
                setZoom,
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export const useMapContext = () => useContext(MapContext)

// https://maps.googleapis.com/maps/api/geocode/json?address={Meu Endereço}&key={API KEY}
