import React from 'react';
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
            <div className='fixed inset-0 bg-[#8CABFF] flex justify-center items-center w-screen h-screen z-20'>
                <div className='relative bg-white p-4 min-h-[800px] w-3/5 rounded-xl'>
                    <button className='absolute top-4 right-4 outline-none border-none bg-transparent' onClick={onClose}>
                        <FaTimes className='text-[#4477CE]'/>
                    </button>
                    <div className='flex justify-center items-center flex-col mt-3'>
                        <img className='h-36 m-2 rounded-xl' src={thumbnail} alt='book thumbnail'></img>
                        <h2 className="text-[#4477CE] font-bold text-2xl py-2">{title}</h2>
                        <h4 className='italic py-2'>{authors}</h4>
                        <h4 className='text-sm italic'>{publisher} <span className='publishDate'>{publishDate}</span></h4>
                        <p className='text-justify py-2'>{subtitle}</p>
                    </div>
                    <a href={more} target='_blank' rel="noreferrer"><button className='bg-[#4477CE] text-white rounded-xl hover:scale-95 my-9 h-12 w-full'>More</button></a>
                </div>
            </div>
        </>
    )
}

export default Modal