'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ICoordinates {
    lat: number
    lng: number
}

interface IPolygons {
    id: number
    title: string
    description: string
    coordinates: ICoordinates[]
}

interface IPolygonsContext {
    polygons: IPolygons[]
    setPolygons: (value: IPolygons[]) => void
    polygonsPosition: ICoordinates[]
    setPolygonsPosition: (value: ICoordinates[]) => void
}

const PolygonsContext = createContext<IPolygonsContext>({
    polygons: [],
    setPolygons: () => {},
    polygonsPosition: [],
    setPolygonsPosition: () => {},
})

export function PolygonsProvider({ children }: { children: ReactNode }) {
    const [polygons, setPolygons] = useState<IPolygons[]>([])
    const [polygonsPosition, setPolygonsPosition] = useState<ICoordinates[]>([])

    useEffect(() => {
        const storedPolygons = localStorage.getItem('polygons')
        if (storedPolygons) {
            setPolygons(JSON.parse(storedPolygons))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('polygons', JSON.stringify(polygons))
    }, [polygons])

    return (
        <PolygonsContext.Provider
            value={{
                polygons,
                setPolygons,
                polygonsPosition,
                setPolygonsPosition,
            }}
        >
            {children}
        </PolygonsContext.Provider>
    )
}

export const usePolygonsContext = () => useContext(PolygonsContext)
