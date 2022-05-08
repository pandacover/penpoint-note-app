import React, { createContext, useState } from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

interface AppContextInterface {
    togglePrompt: number,
    setTogglePrompt: React.Dispatch<React.SetStateAction<number>>,
}

export const GlobalContext = createContext<AppContextInterface>({ togglePrompt: 0, setTogglePrompt: () => null })

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const [togglePrompt, setTogglePrompt] = useState(0)
    return (
        <GlobalContext.Provider value={{ togglePrompt, setTogglePrompt }}>
            <Navbar />
            <Sidebar />
            {children}
        </GlobalContext.Provider>
    )
}

export default Layout