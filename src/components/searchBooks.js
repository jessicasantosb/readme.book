import React, {useState} from 'react'
import '../App'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa'
import Card from './card'

function SearchBooks() {

    //setting search input
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=40`

    const searchBook = (event) => {
        if (event.key === "Enter") {
            axios.get(url)
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return (
        <section>
            <div className='text-center min-h-96'>
                <h1 className='text-2xl pt-9 pb-5'>Looking for a book?</h1>
                <div className='flex align-center justify-center'>
                    <input type="text" name="search" className="bg-[#e8e8e8] h-35 p-2 outline-0 border-0" placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook} />
                    <button className="bg-[#b8b5b5] text-white h-35 font-bold p-2 outline-none border-none" onClick={searchBook}>
                        <FaSearch/>
                    </button>
                </div>
                <div className='cardSection-searchBook'>
                    {
                        <Card book={bookData} />
                    }
                </div>
            </div>
        </section>
    )
}

export default SearchBooks