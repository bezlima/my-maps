'use client'

import { useAlertContext } from '@/app/context/alertsContext'
import { useMenuContext } from '@/app/context/menuContext'
import { usePolygonsContext } from '@/app/context/polygonsContext'
import React, { FormEvent, useState } from 'react'
import Draggable from 'react-draggable'

export default function RegisterPolygon() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { polygonsPosition, setPolygonsPosition, polygons, setPolygons } = usePolygonsContext()
    const { setAddNewPolygon } = useMenuContext()
    const { showAlert } = useAlertContext()

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (polygonsPosition.length < 3) showAlert('selecione os pontos do polígono', true)
        else if (name === '') showAlert('Escolha um titulo para seu polígono', true)
        else if (description === '') showAlert('Escolha uma descrição para seu polígono', true)
        else {
            setPolygons([
                ...polygons,
                {
                    id: polygons.length,
                    title: name,
                    description: description,
                    coordinates: polygonsPosition,
                },
            ])
            showAlert('Polígono adicionado com sucesso', false)
            cancel()
        }
    }

    function cancel() {
        setName('')
        setDescription('')
        setPolygonsPosition([])
        setAddNewPolygon(false)
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
                    Adicionar novo polígono
                </h1>
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
