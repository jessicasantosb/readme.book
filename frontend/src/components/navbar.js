import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../App'
import {FaBars, FaTimes, FaBook} from 'react-icons/fa'

function Navbar() {

    //change nav color when scrolling
    const [color, setColor] = useState(false)

    function changeColor() {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)

    //setting mobile nav
    const navRef = useRef()

    function showNavbar() {
        navRef.current.classList.toggle("responsive_nav")
    }

    function closeNav() {
        setTimeout(() => {
            navRef.current.classList.remove("responsive_nav");
        }, 1000);
    }

    return (
        <header className={`bg-[#35155D] fixed flex items-center justify-between h-[80px] w-full px-5 z-20 ${color ? "shadow-lg shadow-black/40" : ""}`}>
            <div className='flex items-center justify-center gap-2 text-white'>
                <FaBook/>
                <h3>Readme.Books</h3>
            </div>
            <nav className='w-full md:fixed md:top-0 md:left-0 md:bg-[#512B81] md:py-14 md:transform-y-[-100vh] md:ease md:duration-2000 md:shadow-lg md:shadow-black/40' ref={navRef}>
                <div className='flex items-center justify-end gap-5 md:flex md:flex-col md:items-center md:justify-center pt-9 '>
                    <Link className='text-white p-2 hover:underline' onClick={closeNav} to="/">Home</Link>
                    <Link className='text-white p-2 hover:underline' onClick={closeNav} to="/catalog">Catalog</Link>
                    <div className='pl-44'>
                        <Link className='bg-white text-[#35155D] rounded-sm shadow-sm shadow-white p-2 mr-5 hover:scale-95 hover:bg-[#35155D] hover:text-white hover:border-white' onClick={closeNav} to="/login">Login</Link>
                        <Link className='bg-white text-[#35155D] rounded-sm shadow-sm shadow-white p-2 hover:scale-95 hover:bg-[#4477CE] hover:text-white hover:border-white' onClick={closeNav} to="/register">Register</Link>
                    </div>
                </div>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;