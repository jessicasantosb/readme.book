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
                                <div className="flex flex-col justify-between items-center border-[#4477CE] shadow-lg shadow-[#8CABFF] p-2 rounded-2xl min-h-[550px] cursor-pointer hover:scale-95" onClick={() => {setShow(true); setItem(item)}}>
                                    <img className='w-32 h-44 rounded-xl' src={thumbnail} alt="book thumbnail" />
                                    <h2 className="font-bold text-lg">{title}</h2>
                                    <h4 className='italic text-sm pb-2'>{authors}</h4>
                                </div>
                                <Modal show = {show} item = {bookItem} onClose = {() => setShow(false)}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default CardHome