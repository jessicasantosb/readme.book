import React from 'react';
import '../App'
import image from '../images/painting.jpg'
import SearchBooks from '../components/searchBooks';

function Home() {
  return (
    <div>

      <div className='relative h-screen w-full flex items-center justify-end bg-black/30'>
        <div className='z-10 text-white pr-14'>
          <h1 className='flex flex-wrap font-bold text-7xl m-5 p-1 bg-black/40'>Readme.<span>Books</span></h1>
          <h3 className='text-3xl mt-10 m-5 p-1 bg-black/40'>A place for discover new histories</h3>
        </div>
        <img className='absolute top-0 left-0 w-full h-screen object-cover' src={image} alt="fantasy" />
      </div>

      <SearchBooks/>

    </div>
  );
}

export default Home;