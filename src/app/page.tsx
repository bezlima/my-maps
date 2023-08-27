import dynamic from 'next/dynamic'
import Menu from './menu'
import Register from './register'
import LoadingMap from './components/loadingMap'

export default function Home() {
    const Map = dynamic(() => import('./map'), {
        loading: () => <LoadingMap />,
        ssr: false,
    })

    return (
        <div className="flex items-center container">
            <Menu />
            <Map />
            <Register />
        </div>
    )
}
