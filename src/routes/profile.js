import React, {useState} from 'react'
import '../App'
import image from '../images/painting.jpg'
import { useAppContext } from '../components/context/appContext'
import Modal from '../components/modal'

function Profile() {
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
      <div className='relative h-screen w-full flex items-center justify-center bg-black/30 pr-14'>
          <div className='z-10 text-white font-bold '>
            <h1 className='flex flex-wrap text-6xl m-5 p-1 bg-black/40'>Your Profile</h1>
          </div>
          <img className='absolute top-0 left-0 w-full h-screen object-cover' src={image} alt="fantasy" />
      </div>
      {
          favorites.length > 0 ? favorites.map((item) => {

            const key = item.id
            const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
            const title = item.volumeInfo.title
            const authors = item.volumeInfo.authors

            if (thumbnail !== undefined) {
              return (
                <>
                <div className="flex justify-center flex-wrap m-5 hover:scale-[0.98]">
                  <div className="bg-[#0E2954] text-white p-5 flex items-center w-80 cursor-pointer" onClick={() => {setShow(true); setItem(item)}}>
                    <img className='' src={thumbnail} alt="book thumbnail" />
                    <div className="pl-2">
                      <h2 className="font-bold text-1xl">{title}</h2>
                      <h4 className='italic'>{authors}</h4>
                    </div>
                  </div>
                  <Modal show = {show} item = {bookItem} onClose = {() => setShow(false)}/>

                  <div className=''>
                  {
                    favoriteChecker(key) 
                    ? <button onClick={() => removeFromFavorites(key)} className='bg-black/50 text-white h-full w-80 p-2 mb-5 '>Remove</button>
                    : <button onClick={() => addToFavorites(item)} className='bg-white text-black border-2 border-black h-full w-80 p-2 mb-5'>Add again</button>
                    }
                  </div>
                </div>
                </>
              )
            }
          }) : <h1 className='h-96 mt-24 text-center text-4xl'>Your favorites books will appear here!</h1>
      }         
      </>
    )
}

export default Profile