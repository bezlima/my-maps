import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'My Maps',
    description:
        'O projeto é uma aplicação web interativa que permite ao usuário ver e interagir com um mapa, tendo como base Open Street Map e React-leaflet.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <Providers>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    )
}
