import React from 'react';
import '../App'
import imageHome from '../images/home.svg'
import {motion as m} from 'framer-motion'
import Hub from '../components/hub'
import TopPicks from '../components/topPicks'
import Review from '../components/reviews'

function Home() {
  return (
    <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>

      <div className='relative h-screen w-full flex items-center justify-start p-9'>
        <div className='z-10 text-white'>
          <h1 className='flex flex-wrap font-bold text-7xl m-5 bg-black/80 p-1'>Readme.<span className='text-[#512B81]'>Books</span></h1>
          <h3 className='text-3xl mt-10 m-5 bg-black/80 p-1'>A place for <span className='text-[#512B81]'>discover</span> new histories</h3>
        </div>
        <img className='absolute top-0 left-0 w-full h-screen object-cover' src={imageHome} alt="fantasy" />
      </div>

      <Hub /> 
      <TopPicks />
      <Review />           

    </m.div>
  );
}

export default Home;