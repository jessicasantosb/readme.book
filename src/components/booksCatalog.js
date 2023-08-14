import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import '../App'
import { useAppContext } from '../components/contexts/favoritesContext'
import Pagination from '../components/pagination'

function BooksCatalog() {
  //setting books catalog
  const API_url = "https://example-data.draftbit.com/books?_limit=50"

  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    axios.get(API_url)
    .then(res => {setBooks(res.data)})
    .catch(err => console.log(err))
  },[])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = books.slice(firstPostIndex, lastPostIndex)

  //add card to profile
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
  function bookOnListChecker(id) {
      const boolean = favorites.some((book) => book.id === id)
      return boolean
  }

    return (
        <section className='py-9'>
          <div className='cardSection'>
            {currentPost.map((book) => (
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
                <div>
                  {
                    bookOnListChecker(book.id) 
                    ? <button onClick={() => removeFromFavorites(book.id)} className='bg-white text-[#0E2954] h-20 w-full p-2 cursor-pointer border-2 border-[#0E2954]'>Remove from Favorites</button>
                    : <button onClick={() => addToFavorites(book)} className='bg-[#0E2954] text-white h-20 w-full p-2 cursor-pointer'>Add to Favorites</button>
                  }
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className='mx-auto'>
              <Pagination totalPosts={books.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>  
        </section>

    )
}

export default BooksCatalog