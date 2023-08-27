import { divIcon } from 'leaflet'
import ReactDOMServer from 'react-dom/server'

export function MarkerStyle() {
    return (
        <span
            className={`
                block 
                w-8 h-8 
                bg-teal-800 
                rounded-r-full rounded-tl-full 
                transform 
                -rotate-45 
                -mt-2 -ml-6
                before:w-4
                before:h-4
                before:bg-white
                before:absolute
                before:top-2
                before:left-2
                before:content-['']
                before:rounded-full
            `}
        ></span>
    )
}

export const customIcon = divIcon({
    className: 'custom-marker',
    html: ReactDOMServer.renderToString(<MarkerStyle />),
    iconSize: [0, 0],
    iconAnchor: [-8, 32],
    popupAnchor: [0, -35],
})
