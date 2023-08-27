'use client'

import { useAlertContext } from '@/app/context/alertsContext'
import { useMarkersContext } from '@/app/context/markersContext'
import { useMenuContext } from '@/app/context/menuContext'
import React, { FormEvent, useState } from 'react'
import Draggable from 'react-draggable'

export default function RegisterMarker() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { markerPosition, setMarkerPosition, markers, setMarkers } = useMarkersContext()
    const { setAddNewMarker } = useMenuContext()
    const { showAlert } = useAlertContext()

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (markerPosition.lat === 0) showAlert('selecione um ponto', true)
        else if (name === '') showAlert('Escolha um titulo para seu marcador', true)
        else if (description === '') showAlert('Escolha uma descrição para seu marcador', true)
        else {
            setMarkers([
                ...markers,
                {
                    id: markers.length,
                    title: name,
                    description: description,
                    coordinates: markerPosition,
                },
            ])
            showAlert('Marcador adicionado com sucesso', false)
            cancel()
        }
    }

    function cancel() {
        setName('')
        setDescription('')
        setMarkerPosition({ lat: 0, lng: 0 })
        setAddNewMarker(false)
    }

    return (
        <Draggable bounds=".container" cancel=".no-drag" defaultClassName="z-50 absolute top-4 right-4">
            <div
                className={`
                    bg-neutral-200 
                    cursor-pointer 
                    flex flex-col
                    border border-neutral-950 rounded-xl
                    p-1 
                    backdrop-filter backdrop-blur-sm bg-opacity-60
                `}
            >
                <h1 className="font-bold text-teal-800 text-xl px-8 mb-4 border-b border-teal-800">
                    Adicionar novo marcador
                </h1>
                <p className="text-teal-800 font-bold text-sm flex items-center justify-center w-full">
                    {markerPosition.lat != 0 &&
                        `Latitude: ${markerPosition.lat.toFixed(5)} | Longitude: ${markerPosition.lng.toFixed(5)}`}
                </p>
                <form onSubmit={submit} className="flex flex-col gap-4 no-drag mt-3">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="px-2 bg-transparent border-b-2 border-teal-800 text-teal-950 font-bold"
                        value={name ? name : ''}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className="px-2 bg-transparent border-b-2 border-teal-800 text-teal-950 font-bold h-7"
                        placeholder="Descrição"
                        value={description ? description : ''}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <span className="flex items-center justify-center gap-8 mb-4">
                        <button
                            type="submit"
                            className="border-b-2 border-teal-800 hover:border-teal-500 text-teal-800 hover:text-teal-500 font-bold"
                        >
                            Salvar
                        </button>
                        <button
                            type="button"
                            onClick={cancel}
                            className="border-b-2 border-teal-800 hover:border-teal-500 text-teal-800 hover:text-teal-500 font-bold"
                        >
                            Cancelar
                        </button>
                    </span>
                </form>
            </div>
        </Draggable>
    )
}
