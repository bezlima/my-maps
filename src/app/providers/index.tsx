'use client'
import { ReactNode } from 'react'
import { MenuProvider } from '../context/menuContext'
import { MarkersProvider } from '../context/markersContext'
import { PolygonsProvider } from '../context/polygonsContext'
import { MapProvider } from '../context/mapContext'
import { AlertProvider } from '../context/alertsContext'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <AlertProvider>
            <MapProvider>
                <MenuProvider>
                    <MarkersProvider>
                        <PolygonsProvider>{children}</PolygonsProvider>
                    </MarkersProvider>
                </MenuProvider>
            </MapProvider>
        </AlertProvider>
    )
}
