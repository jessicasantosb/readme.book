import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import {motion as m} from 'framer-motion'
import '../App'
import image from '../images/painting.jpg'
import { useAppContext } from '../components/context/appContext'
//import CardCatalog from '../components/cardCatalog';

function Books() {
  //setting books catalog
  const API_url = "https://example-data.draftbit.com/books?_limit=50"

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get(API_url)
    .then(res => {setBooks(res.data)})
    .catch(err => console.log(err))
  },[])

  //add card to profile
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
  function bookOnListChecker(id) {
      const boolean = favorites.some((book) => book.id === id)
      return boolean
  }

    return (
      <>
      <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <header className='relative h-screen w-full flex items-center justify-center bg-black/30 pr-14'>
            <div className='z-10 text-white font-bold '>
              <h1 className='flex flex-wrap text-6xl m-5 p-1 bg-black/40'>Catalog</h1>
            </div>
            <img className='absolute top-0 left-0 w-full h-screen object-cover' src={image} alt="fantasy" />
        </header>

        <section className='cardSection'>
            {books.map((book) => (
            <div>
              <div key={book.id} className="card">
                <div>
                  <img className="w-full h-56" src={book.image_url} alt="thumbnail"/>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-[#0E2954] p-3">{book.title}</h2>
                </div>
                <div>
                  <h2 className="italic p-3 ">{book.authors}</h2>
                </div>
                <div className=''>
                  {
                    bookOnListChecker(book.id) 
                    ? <button onClick={() => removeFromFavorites(book.id)} className='bg-white text-[#0E2954] h-20 w-full p-2 cursor-pointer border-2 border-[#0E2954]'>Remove from Favorites</button>
                    : <button onClick={() => addToFavorites(book)} className='bg-[#0E2954] text-white h-20 w-full p-2 cursor-pointer'>Add to Favorites</button>
                  }
                </div>
              </div>
            </div>
            ))}
        </section>
      </m.div>
      </>
    )
}

export default Books