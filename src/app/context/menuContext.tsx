'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface IMenuContext {
    showMarker: boolean
    setShowMarker: (value: boolean) => void
    openMarker: boolean
    setOpenMarker: (value: boolean) => void
    showPolygon: boolean
    setShowPolygon: (value: boolean) => void
    openPolygon: boolean
    setOpenPolygon: (value: boolean) => void
    isOpenMenu: boolean
    setIsOpenMenu: (value: boolean) => void
    addNewMarker: boolean
    setAddNewMarker: (value: boolean) => void
    addNewPolygon: boolean
    setAddNewPolygon: (value: boolean) => void
    openExemple: boolean
    setOpenExemple: (value: boolean) => void
    showPolygonExemple: boolean
    setShowPolygonExemple: (value: boolean) => void
    showMarkerExemple: boolean
    setShowMarkerExemple: (value: boolean) => void
}

const MenuContext = createContext<IMenuContext>({
    showMarker: true,
    setShowMarker: () => {},
    openMarker: false,
    setOpenMarker: () => {},
    showPolygon: true,
    setShowPolygon: () => {},
    openPolygon: false,
    setOpenPolygon: () => {},
    isOpenMenu: false,
    setIsOpenMenu: () => {},
    addNewMarker: false,
    setAddNewMarker: () => {},
    addNewPolygon: false,
    setAddNewPolygon: () => {},
    openExemple: false,
    setOpenExemple: () => {},
    showPolygonExemple: true,
    setShowPolygonExemple: () => {},
    showMarkerExemple: true,
    setShowMarkerExemple: () => {},
})

export function MenuProvider({ children }: { children: ReactNode }) {
    const [showMarker, setShowMarker] = useState<boolean>(true)
    const [openMarker, setOpenMarker] = useState<boolean>(false)
    const [showPolygon, setShowPolygon] = useState<boolean>(true)
    const [openPolygon, setOpenPolygon] = useState<boolean>(false)
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const [addNewMarker, setAddNewMarker] = useState<boolean>(false)
    const [addNewPolygon, setAddNewPolygon] = useState<boolean>(false)
    const [openExemple, setOpenExemple] = useState<boolean>(false)
    const [showPolygonExemple, setShowPolygonExemple] = useState<boolean>(true)
    const [showMarkerExemple, setShowMarkerExemple] = useState<boolean>(true)

    return (
        <MenuContext.Provider
            value={{
                showMarker,
                setShowMarker,
                openMarker,
                setOpenMarker,
                showPolygon,
                setShowPolygon,
                openPolygon,
                setOpenPolygon,
                isOpenMenu,
                setIsOpenMenu,
                addNewMarker,
                setAddNewMarker,
                addNewPolygon,
                setAddNewPolygon,
                showPolygonExemple,
                setShowPolygonExemple,
                showMarkerExemple,
                setShowMarkerExemple,
                openExemple,
                setOpenExemple,
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => useContext(MenuContext)
