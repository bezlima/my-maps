'use client'
import { Compass, List } from '@phosphor-icons/react'
import InputSearch from './inputSearch'
import PolygonMenu from './polygonMenu'
import MarkerMenu from './markerMenu'
import { useMenuContext } from '../context/menuContext'
import Exemples from './exemple'

export default function Menu() {
    const { setIsOpenMenu, isOpenMenu } = useMenuContext()

    return (
        <div className="flex">
            <div
                className={` 
                    ${isOpenMenu ? 'w-80' : 'w-20'} 
                    bg-neutral-200 
                    h-screen 
                    p-5 
                    pt-8 
                    relative 
                    duration-300
                    flex flex-col
                    justify-between
                `}
            >
                <section>
                    <header
                        className={`
                        flex
                        
                        ${isOpenMenu ? 'justify-between' : 'justify-center'}
                        items-center
                    `}
                    >
                        <>
                            <Compass
                                size={45}
                                color="#115e59"
                                weight="bold"
                                className={`whitespace-pre duration-400  ${
                                    !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                                }`}
                            />
                            <h1
                                className={`font-bold text-3xl text-teal-800 whitespace-pre duration-500 ${
                                    !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                                }`}
                            >
                                My Map
                            </h1>
                        </>
                        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <List size={35} color="#115e59" weight="bold" />
                        </button>
                    </header>
                    <menu
                        className={`flex flex-col gap-8 justify-center ${isOpenMenu ? 'items-start' : 'items-center'}`}
                    >
                        <InputSearch />
                        <PolygonMenu />
                        <MarkerMenu />
                        <Exemples />
                    </menu>
                </section>

                <div className={`border-t-2 border-teal-800 gap-2 pt-4 ${isOpenMenu ? 'w-full' : 'w-0'} duration-400 `}>
                    <p
                        className={`font-bold text-sm text-teal-800 whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    >
                        Criado por Lucas Lima com
                    </p>
                    <p
                        className={`font-bold text-sm text-teal-800 whitespace-pre duration-500 ${
                            !isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'
                        }`}
                    >
                        NextJs 13, Tailwind, React-leaflet
                    </p>
                </div>
            </div>
        </div>
    )
}
