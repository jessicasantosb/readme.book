import React from 'react'
import '../App'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className='w-full bg-[#35155D] shadow-2xl shadow-black text-white p-5'>
            <div className='flex items-start justify-center flex-row gap-14 wrap'>
                <div className='flex flex-col'>
                    <h3 className='text-lg pb-2'>Copyrights</h3>
                    <a href="https://www.freevector.com/book-worm-28907">FreeVector.com</a>
                    <a href="https://www.vecteezy.com/free-vector/woman">Woman Vectors by Vecteezy</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg pb-2'>Links</h3>
                    <Link to='/catalog'>Catalog</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Signup</Link>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg pb-2'>Help</h3>
                    <a href="#">How to use</a>
                    <a href="#">About</a>
                    <a href="#">FAQ's</a>
                </div>
            </div>
            
            <div className=''>
                <p className='flex items-center justify-center gap-2 pt-9'>&copy; 2023 Developed by jessicasantosb 
                    <a className='hover:text-white/50' href='https://github.com/jessicasantosb' target='_blank' rel="noreferrer">
                        <FaGithub />
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer