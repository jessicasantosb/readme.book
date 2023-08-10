import React, {useState} from 'react'
import '../App'
import Modal from './modal'

function CardHome({book}) {
    //setting modal
    const [show, setShow] = useState(false)

    //setting book data
    const [bookItem, setItem] = useState()

    return (
        <>
            {
                book.map((item) => {

                    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    const title = item.volumeInfo.title
                    const authors = item.volumeInfo.authors

                    if (thumbnail !== undefined) {
                        return (
                            <>
                            <div>
                              <div> 
                                <div className="bg-[#0E2954] p-2 text-white min-h-[550px] hover:scale-95" onClick={() => {setShow(true); setItem(item)}}>
                                    <img className='w-32 h-44 mx-auto' src={thumbnail} alt="book thumbnail" />
                                    <div className="p-4">
                                        <h2 className="font-bold text-xl">{title}</h2>
                                        <h4 className='italic'>{authors}</h4>
                                    </div>
                                </div>
                                <Modal show = {show} item = {bookItem} onClose = {() => setShow(false)}/>
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

export default CardHome