import React, { createContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {

    const [navMenu, setNavMenu] = useState(false)

    const handleNavMenu = () => setNavMenu((prev) => !prev)

    return <Context.Provider 
    value={{
        navMenu,
        handleNavMenu,
    }}
    >
        {children}
    </Context.Provider>
}

export default Context