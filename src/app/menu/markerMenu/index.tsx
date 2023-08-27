import Checkbox from '@/app/components/checkbox'
import { useMenuContext } from '@/app/context/menuContext'
import { CaretDown, CaretUp, MapPinLine, Plus } from '@phosphor-icons/react'

export default function MarkerMenu() {
    const {
        showMarker,
        setShowMarker,
        openMarker,
        setOpenMarker,
        isOpenMenu,
        setAddNewMarker,
        addNewMarker,
        setAddNewPolygon,
    } = useMenuContext()

    return (
        <>
            <span onClick={() => setOpenMarker(!openMarker)} className="flex items-center gap-4 cursor-pointer">
                <MapPinLine size={32} color="#115e59" weight="bold" />
                {isOpenMenu && (
                    <>
                        <p className="font-bold text-teal-800">Marcadores</p>
                        {openMarker ? (
                            <CaretUp size={20} color="#115e59" weight="bold" />
                        ) : (
                            <CaretDown size={20} color="#115e59" weight="bold" />
                        )}
                    </>
                )}
            </span>
            {openMarker && (
                <>
                    <Checkbox
                        label={isOpenMenu ? 'Mostrar marcadores' : ''}
                        name="selectMakers"
                        check={showMarker}
                        change={() => setShowMarker(!showMarker)}
                        labelClass={`whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    />
                    <button
                        onClick={() => (setAddNewMarker(!addNewMarker), setAddNewPolygon(false))}
                        className="flex items-center gap-4 overflow-hidden truncate"
                    >
                        <Plus size={25} color="#115e59" weight="bold" />
                        {isOpenMenu ? 'Novo marcador' : ''}
                    </button>
                </>
            )}
        </>
    )
}
