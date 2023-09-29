import React from 'react'
import {Link} from 'react-router-dom'

function Reviews() {
    return (
        <section className='mx-5 mt-24 mb-12 text-center'>
            <h2 className='text-[#512B81] text-3xl pb-5'>Discover thoughts and opinions from others</h2>
            <p className='pb-9'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link className='bg-[#512B81] text-white rounded-xl shadow-sm shadow-black  text-center p-5 uppercase hover:scale-90 hover:shadow-none mr-5' to="/login">Sign in</Link>      
            <div className='flex flex-row flex-wrap items-center justify-center gap-9 m-9'>
                <div className='border border-[#4477CE] shadow-lg shadow-[#8CABFF] p-2 rounded-2xl w-52'>
                    <h1 className='font-bold p-2'>Name</h1>
                    <p>Orci nulla pellentesque dignissim enim sit amet venenatis urna. Lacus suspendisse faucibus interdum posuere lorem ipsum. Nunc mattis enim ut tellus. Nibh ipsum consequat nisl vel.</p>
                    <p className='p-2'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                </div>
                <div className='border border-[#4477CE] shadow-lg shadow-[#8CABFF] p-2 rounded-2xl w-52'>
                    <h1 className='font-bold p-2'>Name</h1>
                    <p>Orci nulla pellentesque dignissim enim sit amet venenatis urna. Lacus suspendisse faucibus interdum posuere lorem ipsum. Nunc mattis enim ut tellus. Nibh ipsum consequat nisl vel.</p>
                    <p className='p-2'>⭐ ⭐ ⭐ ⭐ </p>
                </div>
                <div className='border border-[#4477CE] shadow-lg shadow-[#8CABFF] p-2 rounded-2xl w-52'>
                    <h1 className='font-bold p-2'>Name</h1>
                    <p>Orci nulla pellentesque dignissim enim sit amet venenatis urna. Lacus suspendisse faucibus interdum posuere lorem ipsum. Nunc mattis enim ut tellus. Nibh ipsum consequat nisl vel.</p>
                    <p className='p-2'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                </div>
            </div>
        </section>
    )
}

export default Reviews