import React from 'react'
import imageHub from '../../images/hub.jpg'
import {Link} from 'react-router-dom'

function Hub() {
    return (
        <section className='flex flex-row items-center justify-center flex-wrap mx-5 mt-24'>
            <div className='text-center mb-9'>
                <h2 className='text-[#512B81] text-3xl pb-24'>Bringing together all your preferred books in a single spot</h2>
                <Link className='bg-[#512B81] text-white rounded-xl shadow-sm shadow-black  text-center p-5 uppercase hover:scale-90 hover:shadow-none mr-5' to="/login">Sign in</Link>            
                <Link className='bg-[#4477CE] text-white rounded-xl shadow-sm shadow-black text-center p-5 uppercase hover:scale-90 hover:shadow-none' to="/register">Sign up</Link>       
            </div>
            <img src={imageHub} alt="happy girl" className='w-96' />
        </section>
    )
}

export default Hub