import React from 'react'
import imageHub from '../images/hub.jpg'
import {Link} from 'react-router-dom'

function Hub() {
    return (
        <section className='flex flex-row items-center justify-center flex-wrap mx-5 mt-9'>
            <div className='text-center'>
                <h2 className='text-[#512B81] text-3xl pb-24'>Bringing together all your preferred books in a single spot</h2>
                <button className='cursor-pointer bg-[#4477CE] text-white rounded-xl hover:scale-95 mr-9 h-12'>
                  <Link className='p-14' to="/login">Sign in</Link>            
                </button>
                <button className='bg-[#512B81] text-white rounded-xl hover:scale-95 h-12'>
                  <Link className='p-14' to="/register">Sign up</Link>            
                </button>
            </div>
            <img src={imageHub} alt="happy girl" className='w-96' />
        </section>
    )
}

export default Hub