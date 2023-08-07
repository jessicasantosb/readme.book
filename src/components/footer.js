import React from 'react'
import '../App'
import {FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-[#0E2954] text-white bottom-0 h-35 p-5 flex items-center justify-center flex-col'>
            <p className='flex items-center gap-2'>&copy; 2023 Developed by jessicasantosb 
                <a className='hover:text-white/50' href='https://github.com/jessicasantosb' target='_blank' rel="noreferrer">
                    <FaGithub />
                </a>
            </p>
            <p className='pt-5'>Image by &copy; <a className='hover:text-white/50' href="https://pixabay.com/users/yuri_b-2216431/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3995999">Yuri</a> from <a className='hover:text-white/50' href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3995999">Pixabay</a></p>
        </div>
    )
}

export default Footer