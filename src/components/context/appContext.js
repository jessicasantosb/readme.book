import {createContext, useState, useContext} from 'react'

const AppContext = createContext(null)

export function useAppContext() {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error("Appcontext must be within appContextProvider")
    }

    return context
}

function AppContextProvider({children}) {
    const [favorites, setFavorites] = useState([])

    function addToFavorites(item) {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.concat(item)
        setFavorites(newFavorites)
    }

    function removeFromFavorites (key) {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.filter((item) => item.id !== key)
        setFavorites(newFavorites)
    }

    return (
        <AppContext.Provider
        value = {{favorites, addToFavorites, removeFromFavorites}}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider