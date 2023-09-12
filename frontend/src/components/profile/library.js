import React from 'react'
import '../../App'
import { useAppContext } from '../contexts/favoritesContext'
import {motion as m} from 'framer-motion'
import {FaBookmark} from 'react-icons/fa'

function Library() {

    //add card to favorites
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
    function favoriteChecker(id) {
        const boolean = favorites.some((book) => book.id === id)
        return boolean
    }

    return (
      <>
      <m.section initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}} className='mx-5 mt-24 mb-12 text-center'>
        <h2 className='text-[#512B81] text-3xl pb-24'>Library</h2>
        <div className='grid grid-cols-fit'>
            {favorites.length > 0 ? (favorites.map((book) => (
            <div key={book.id} className="flex items-center gap-3 m-5 shadow-lg shadow-[#512B81] p-2 rounded-2xl w-32">
              <img className="w-20 rounded-xl" src={book.image_url} alt="thumbnail"/>
              <div>
                {
                  favoriteChecker(book.id) 
                  ? <button onClick={() => removeFromFavorites(book.id)}><FaBookmark className='text-[#35155D] h-5 w-5 cursor-pointer'/></button>
                  : <button onClick={() => addToFavorites(book)}><FaBookmark className='text-[#35155D] opacity-40 h-5 w-5 cursor-pointer'/></button>
                }
              </div>
            </div>
            ))) : <h1 className='h-96 p-10'>This is where your preferred books will be displayed.</h1> }
        </div>
      </m.section>         
      </>
    )
}

export default Library