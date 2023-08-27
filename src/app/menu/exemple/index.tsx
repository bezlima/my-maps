import Checkbox from '@/app/components/checkbox'
import { useMenuContext } from '@/app/context/menuContext'
import { BracketsCurly, CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Exemples() {
    const {
        isOpenMenu,
        showMarkerExemple,
        showPolygonExemple,
        setShowMarkerExemple,
        setShowPolygonExemple,
        openExemple,
        setOpenExemple,
    } = useMenuContext()

    return (
        <>
            <span onClick={() => setOpenExemple(!openExemple)} className="flex items-center gap-4 cursor-pointer">
                <BracketsCurly size={32} color="#115e59" weight="bold" />
                {isOpenMenu && (
                    <>
                        <p className="font-bold text-teal-800">Polígonos</p>
                        {openExemple ? (
                            <CaretUp size={20} color="#115e59" weight="bold" />
                        ) : (
                            <CaretDown size={20} color="#115e59" weight="bold" />
                        )}
                    </>
                )}
            </span>
            {openExemple && (
                <>
                    <Checkbox
                        label={isOpenMenu ? 'Mostrar polígonos de exemplo' : ''}
                        name="selectMakersExemple"
                        check={showPolygonExemple}
                        change={() => setShowPolygonExemple(!showPolygonExemple)}
                        labelClass={`whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    />
                    <Checkbox
                        label={isOpenMenu ? 'Mostrar Marcadores de exemplo' : ''}
                        name="selectPolygonExemple"
                        check={showMarkerExemple}
                        change={() => setShowMarkerExemple(!showMarkerExemple)}
                        labelClass={`whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    />
                </>
            )}
        </>
    )
}
