import React from 'react'

function TopPicks() {
    return (
        <section className='pt-9 m-5 text-center'>
            <h2 className='text-[#512B81] text-3xl mt-9 pb-5'>User's top picks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-row flex-wrap items-center justify-center gap-9 m-9'>
                <div className='shadow-lg shadow-[#512B81] p-2 rounded-2xl w-52'>
                    <img src="" alt="thumbnail" className='h-32'/>
                    <h1 className='font-bold p-2'>Book name</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className='shadow-lg shadow-[#512B81] p-2 rounded-2xl w-52'>
                    <img src="" alt="thumbnail" className='h-32'/>
                    <h1 className='font-bold p-2'>Book name</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </section>

    )
}

export default TopPicks