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

    function addToFavorites(book) {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.concat(book)
        setFavorites(newFavorites)
    }

    function removeFromFavorites (id) {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.filter((book) => book.id !== id)
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