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
        <header className={color ? "header header-bg" : "header"}>
            <div className='logo'>
                <FaBook color='white'/>
                <h3>Readme.Books</h3>
            </div>
            <nav ref={navRef}>
                <div>                    
                    <Link onClick={closeNav} to="/">Home</Link>
                    <Link onClick={closeNav} to="/catalog">Books Catalog</Link>
                    <Link onClick={closeNav} to="/register">Register</Link>
                    <Link onClick={closeNav} to="/profile">Profile</Link>

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