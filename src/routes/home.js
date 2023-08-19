import React from 'react';
import '../App'
import imageHome from '../images/home.jpg'
import {motion as m} from 'framer-motion'
import Hub from '../components/home/hub'
import TopPicks from '../components/home/topPicks'
import Review from '../components/home/reviews'
import {FaBook} from 'react-icons/fa'

function Home() {

  return (
    <m.div initial={{opacity: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}}>

      <div className='relative h-screen w-full flex items-center justify-start p-5'>
        <div className='z-10 pb-40'>
          <h1 className='flex flex-wrap font-bold text-7xl m-5'>Readme.<span className='text-[#512B81]'>Books</span></h1>
          <h3 className='text-3xl mt-10 m-5'>A place for <span className='text-[#512B81]'>discover</span> new histories</h3>
        </div>
        <img className='absolute top-0 left-0 w-full h-screen object-cover opacity-50' src={imageHome} alt="fantasy" />
      </div>

      <Hub /> 

      <div class='flex'>
        <div className='w-full relative m-5 border-b-[3px] border-[#512B81]'></div>
        <FaBook className='relative top-2 text-[#512B81]' size={70} />
        <div className='w-full relative m-5 border-b-[3px] border-[#512B81] '></div>
      </div>

      <TopPicks />

      <div class='flex'>
        <div className='w-full relative m-5 border-b-[3px] border-[#512B81]'></div>
        <FaBook className='relative top-2 text-[#512B81]' size={70} />
        <div className='w-full relative m-5 border-b-[3px] border-[#512B81] '></div>
      </div>

      <Review />           

    </m.div>
  );
}

export default Home;