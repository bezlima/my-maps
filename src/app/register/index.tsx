'use client'
import { useMenuContext } from '../context/menuContext'
import RegisterMarker from './newMarker'
import RegisterPolygon from './newPolygon'

export default function Register() {
    const { addNewMarker, addNewPolygon } = useMenuContext()

    return (
        <>
            {addNewMarker && <RegisterMarker />}
            {addNewPolygon && <RegisterPolygon />}
        </>
    )
}
