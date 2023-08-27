import Checkbox from '@/app/components/checkbox'
import { useMenuContext } from '@/app/context/menuContext'
import { CaretDown, CaretUp, Plus, Polygon } from '@phosphor-icons/react'

export default function PolygonMenu() {
    const {
        showPolygon,
        setShowPolygon,
        openPolygon,
        setOpenPolygon,
        isOpenMenu,
        setAddNewPolygon,
        addNewPolygon,
        setAddNewMarker,
    } = useMenuContext()

    return (
        <>
            <span onClick={() => setOpenPolygon(!openPolygon)} className="flex items-center gap-4 cursor-pointer">
                <Polygon size={32} color="#115e59" weight="bold" />
                {isOpenMenu && (
                    <>
                        <p
                            className={`font-bold text-teal-800 whitespace-pre duration-500 ${
                                !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                            }`}
                        >
                            Polígonos
                        </p>
                        {openPolygon ? (
                            <CaretUp size={20} color="#115e59" weight="bold" />
                        ) : (
                            <CaretDown size={20} color="#115e59" weight="bold" />
                        )}
                    </>
                )}
            </span>
            {openPolygon && (
                <>
                    <Checkbox
                        label={isOpenMenu ? 'Mostrar polígonos' : ''}
                        name="selectPolygon"
                        check={showPolygon}
                        change={() => setShowPolygon(!showPolygon)}
                        labelClass={`whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    />
                    <button
                        onClick={() => (setAddNewPolygon(!addNewPolygon), setAddNewMarker(false))}
                        className={`flex items-center gap-4 overflow-hidden truncate`}
                    >
                        <Plus size={25} color="#115e59" weight="bold" />
                        {isOpenMenu ? 'Novo polígono' : ''}
                    </button>
                </>
            )}
        </>
    )
}
