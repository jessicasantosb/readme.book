import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import '../App'
import { useAppContext } from './contexts/favoritesContext'
import Pagination from './pagination'

function BooksCatalog() {
  //setting books catalog
  const API_url = "https://example-data.draftbit.com/books?_limit=50"

  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(10)
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    axios.get(API_url)
    .then(res => {setBooks(res.data)})
    .catch(err => console.log(err))
  },[])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  let currentPost = books.slice(firstPostIndex, lastPostIndex)

  //add card to profile
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
  function bookOnListChecker(id) {
      const boolean = favorites.some((book) => book.id === id)
      return boolean
  }

  //setting sort  
  function ascending() {
    let result = [...books]
    if(result.length > 0) {
      let ascending = result.sort((a,b) => a.title.localeCompare(b.title))
      //currentPost = ascending.slice(firstPostIndex, lastPostIndex)
    }     
  }

  function descending() {
    let result = [...books]
    if(result.length > 0) {
      let descending = result.sort((b,a) => b.title.localeCompare(a.title))
      //currentPost = descending.slice(firstPostIndex, lastPostIndex)
    }
  }

    return (
        <section className='py-9'>
          <div className='flex flex-col items-center justify-center m-9 text-[#0E2954]'>
            <label htmlFor="sort">Sort by</label>
            <select defaultValue='default' className='w-24 border border-[#0E2954] text-center'>
              <option value="default">Default</option>
              <option value="ascending"  onClick={() => ascending(sortType, setSortType)}>a - z</option>
              <option value="descending" onClick={() => descending(sortType, setSortType)} >z - a</option>
            </select>
          </div>
          <main className='cardSection'>
            {currentPost.map((book) => (
              <div key={book.id} className="card">
                  <img className="w-full h-56" src={book.image_url} alt="thumbnail"/>
                  <h2 className="font-bold text-xl text-[#0E2954] p-3">{book.title}</h2>
                  <h2 className="italic p-3 ">{book.authors}</h2>
                <div>
                  {
                    bookOnListChecker(book.id) 
                    ? <button onClick={() => removeFromFavorites(book.id)} className='bg-white text-[#0E2954] h-20 w-full p-2 cursor-pointer border-2 border-[#0E2954]'>Remove from Favorites</button>
                    : <button onClick={() => addToFavorites(book)} className='bg-[#0E2954] text-white h-20 w-full p-2 cursor-pointer'>Add to Favorites</button>
                  }
                </div>
              </div>
            ))}
          </main>
          <div className='mx-auto'>
              <Pagination totalPosts={books.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>
        </section>
    )
}

export default BooksCatalog