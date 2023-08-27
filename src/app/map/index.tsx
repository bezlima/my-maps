'use client'

import MapControls from './controls'
import Makers from './markers'
import Map from './map'
import AddNew from '../addNewFunctions'
import Polygons from './polygons'
import SearchMarker from './searchMarker.tsx'

export default function FullMap() {
    return (
        <Map>
            <MapControls />
            <Makers />
            <Polygons />
            <AddNew />
            <SearchMarker />
        </Map>
    )
}
