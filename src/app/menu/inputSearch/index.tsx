import { useAlertContext } from '@/app/context/alertsContext'
import { useMapContext } from '@/app/context/mapContext'
import { useMenuContext } from '@/app/context/menuContext'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { zoom } from '@/app/utils/zoom'
import axios from 'axios'

export default function InputSearch() {
    const { setIsOpenMenu, isOpenMenu } = useMenuContext()
    const { setCity, city, setCenter, setZoom } = useMapContext()
    const { showAlert } = useAlertContext()

    const handleSearch = async (e: any) => {
        e.preventDefault()
        if (isOpenMenu) {
            if (city === '') {
                setCenter([-13.940322128384613, -57.39257812500001]), setZoom(5)
            } else {
                try {
                    const res = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                        params: {
                            format: 'json',
                            q: city,
                        },
                    })
                    if (res.data.length > 0) {
                        const type = res.data[0].addresstype

                        zoom[type] != undefined ? setZoom(zoom[type]) : setZoom(13)

                        setCenter([res.data[0].lat, res.data[0].lon])

                        setCity('')
                    } else {
                        showAlert('Não foi possível localizar sua pesquisa', true)
                    }
                } catch (error) {
                    showAlert('Ouve um erro durante sua pesquisa', true)
                }
            }
        } else {
            setIsOpenMenu(true)
        }
    }

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-4 mt-6">
            {isOpenMenu && (
                <input
                    type="text"
                    className={`
						border-2
						border-teal-800
						rounded
						bg-neutral-50
						h-15 w-5/6
						duration-400
						p-2
						h-8
                        
                        whitespace-pre duration-500 ${!isOpenMenu && 'opacity-0 translate-x-28 overflow-hidden'}
                  	`}
                    placeholder="Onde vamos?"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            )}
            <button type="submit">
                <MagnifyingGlass size={30} color="#115e59" weight="bold" />
            </button>
        </form>
    )
}
