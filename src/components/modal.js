import react from 'react';
import {FaTimes} from 'react-icons/fa'

function Modal({show, item, onClose}) {
    if (!show) {
        return null
    }

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
    const title = item.volumeInfo.title
    const authors = item.volumeInfo.authors
    const publisher = item.volumeInfo.publisher
    const publishDate = item.volumeInfo.publishedDate
    const subtitle = item.volumeInfo.subtitle         
    const more = item.volumeInfo.infoLink

    return (
        <>
            <div className='fixed inset-0 bg-blue bg-[#0E2954] flex justify-center items-center w-screen h-screen z-20'>
                <div className='relative bg-white p-4 min-h-[800px] w-3/5'>
                    <button className='absolute top-4 right-4 outline-none border-none bg-transparent' onClick={onClose}>
                        <FaTimes/>
                    </button>
                    <div className='flex justify-center items-center flex-col mt-3'>
                        <img className='h-52 w-40 m-2' src={thumbnail} alt='book thumbnail'></img>
                        <div className='mb-10'>
                            <h2 className="font-bold text-2xl">{title}</h2>
                            <h4 className='italic'>{authors}</h4>
                            <h4 className='italic'>{publisher} <span className='publishDate'>{publishDate}</span></h4>
                            <p className='h-10'>{subtitle}</p>
                        </div>
                    </div>
                    <a href={more} target='_blank' rel="noreferrer"><button className='bg-[#0E2954] text-white outline-none border-none w-36 m-5 p-2'>More</button></a>
                </div>
            </div>
        </>
    )
}

export default Modal