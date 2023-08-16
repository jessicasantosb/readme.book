import React from 'react'
import '../App'
import { useAppContext } from '../components/contexts/favoritesContext'
import {motion as m} from 'framer-motion'

function Profile() {

    //add card to favorites
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
    function favoriteChecker(id) {
        const boolean = favorites.some((book) => book.id === id)
        return boolean
    }

    return (
      <>
      <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className='relative h-screen w-full flex items-center justify-center bg-black/30 pr-14'>
            <div className='z-10 text-white font-bold '>
              <h1 className='flex flex-wrap text-6xl m-5 p-1 bg-black/40'>Your Profile</h1>
            </div>
            <img className='absolute top-0 left-0 w-full h-screen object-cover' src='' alt="fantasy" />
        </div>

        <div className='cardSection'>
            {favorites.length > 0 ? (favorites.map((book) => (
            <div>
              <div key={book.id} className="card">
                <div>
                  <img className="w-full h-56" src={book.image_url} alt="thumbnail"/>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-[#0E2954] p-3">{book.title}</h2>
                </div>
                <div>
                  <h2 className="italic p-3">{book.authors}</h2>
                </div>
                <div>
                  {
                    favoriteChecker(book.id) 
                    ? <button onClick={() => removeFromFavorites(book.id)} className='bg-white text-[#0E2954] h-20 w-full p-2 cursor-pointer border-2 border-[#0E2954]'>Remove from Favorites</button>
                    : <button onClick={() => addToFavorites(book)} className='bg-[#0E2954] text-white h-20 w-full p-2 cursor-pointer'>Add to Favorites</button>
                  }
                </div>
              </div>
            </div>
            ))) : <h1 className='h-96 p-10'>This is where your preferred books will be displayed.</h1> }
        </div>
      </m.div>         
      </>
    )
}

export default Profile