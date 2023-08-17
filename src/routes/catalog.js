import React from 'react'
import {motion as m} from 'framer-motion'
import '../App'
import imageCatalog from '../images/catalog.jpg'
import CardsCatalog from '../components/cardsCatalog'
import SearchBooks from '../components/searchBooks';

function Catalog() {

    return (
      <>
      <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <header className='relative h-screen w-full flex items-center justify-start p-9'>
            <div className='z-10 text-[#512B81] font-bold '>
              <h1 className='text-8xl bg-black/30 p-1'>Catalog</h1>
            </div>
            <img className='absolute top-0 left-0 w-full h-screen object-cover' src={imageCatalog} alt="fantasy" />
        </header>

          <CardsCatalog />

          <SearchBooks/>
        
      </m.div>
      </>
    )
}

export default Catalog