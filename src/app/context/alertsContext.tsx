'use client'

import { createContext, useContext } from 'react'
import { ReactNode, useEffect, useState } from 'react'
import Alert from '../components/alert'

type AlertContextType = {
    showAlert: (message: string, error: boolean) => void
    hideAlert: () => void
}

const AlertContext = createContext<AlertContextType>({
    showAlert: () => {},
    hideAlert: () => {},
})

export function AlertProvider({ children }: { children: ReactNode }) {
    const [alertState, setAlertState] = useState<{ message: string; error: boolean } | null>(null)

    const showAlert = (message: string, error: boolean) => {
        setAlertState({ message, error })
    }

    const hideAlert = () => {
        setAlertState(null)
    }

    useEffect(() => {
        if (alertState) {
            setTimeout(() => {
                setAlertState(null)
            }, 3000)
        }
    }, [alertState])

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            {alertState && <Alert hideAlert={hideAlert} message={alertState.message} error={alertState.error} />}
        </AlertContext.Provider>
    )
}

export const useAlertContext = () => useContext(AlertContext)
