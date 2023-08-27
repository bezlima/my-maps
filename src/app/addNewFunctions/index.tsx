import { useMenuContext } from '../context/menuContext'
import AddNewMarker from './newMarker'
import AddNewPolygon from './newPolygon'

export default function AddNew() {
    const { addNewMarker, addNewPolygon } = useMenuContext()

    return (
        <>
            {addNewMarker && !addNewPolygon && <AddNewMarker />}
            {addNewPolygon && !addNewMarker && <AddNewPolygon />}
        </>
    )
}
