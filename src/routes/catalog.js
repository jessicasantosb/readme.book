import React from 'react'
import {motion as m} from 'framer-motion'
import '../App'
import CardsCatalog from '../components/cardsCatalog'
import SearchBooks from '../components/searchBooks';

function Catalog() {

    return (
      <>
      <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <header className='relative h-screen w-full flex items-center justify-center bg-black/30 pr-14'>
            <div className='z-10 text-white font-bold '>
              <h1 className='flex flex-wrap text-6xl m-5 p-1 bg-black/40'>Catalog</h1>
            </div>
            <img className='absolute top-0 left-0 w-full h-screen object-cover' src='' alt="fantasy" />
        </header>

          <CardsCatalog />

          <SearchBooks/>
        
      </m.div>
      </>
    )
}

export default Catalog