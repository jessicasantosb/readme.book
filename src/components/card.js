import React, {useState} from 'react'
import '../App'
import Modal from './modal'
import { useAppContext } from './context/appContext'

function Card({book}) {
    const [show, setShow] = useState(false)
    const [bookItem, setItem] = useState()

    //add card to favorites
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
    function favoriteChecker(id) {
        const boolean = favorites.some((item) => item.id === id)
        return boolean
    }

    return (
        <>
            {
                book.map((item) => {

                    const key = item.id
                    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    const title = item.volumeInfo.title
                    const authors = item.volumeInfo.authors

                    if (thumbnail !== undefined) {
                        return (
                            <>
                            <div className=''>
                              <div> 
                                <div className="bg-[#0E2954] p-2 text-white min-h-[550px]" onClick={() => {setShow(true); setItem(item)}}>
                                    <img className='w-full' src={thumbnail} alt="book thumbnail" />
                                    <div className="p-4">
                                        <h2 className="font-bold text-1xl">{title}</h2>
                                        <h4 className='italic'>{authors}</h4>
                                    </div>
                                </div>
                                <Modal show = {show} item = {bookItem} onClose = {() => setShow(false)}/>

                                <div>
                                {
                                favoriteChecker(key) 
                                ? <button onClick={() => removeFromFavorites(key)} className='bg-white text-black h-20 w-full p-2 mb-10 cursor-pointer border-2 border-black'>Remove from Favorites</button>
                                : <button onClick={() => addToFavorites(item)} className='bg-black/50 text-white h-20 w-full p-2 mb-10 cursor-pointer'>Add to Favorites</button>
                                }
                                </div>
                              </div>   
                            </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card