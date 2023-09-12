import React from 'react'


function Recommendations() {
    return (
        <section className='mx-5 mt-24 mb-12 text-center'>
            <h2 className='text-[#512B81] text-3xl pb-24'>We think you might like these</h2>
            <main className='flex flex-row flex-wrap items-center justify-center gap-9 m-9'>
                <div className='flex gap-2 shadow-lg shadow-[#512B81] p-2 rounded-2xl w-96'>
                    <img src="" alt="thumbnail" className='w-64'/>
                    <div>
                        <h1 className='font-bold p-2'>Book name</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='flex gap-2 shadow-lg shadow-[#512B81] p-2 rounded-2xl w-96'>
                    <img src="" alt="thumbnail" className='w-64'/>
                    <div>
                        <h1 className='font-bold p-2'>Book name</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='flex gap-2 shadow-lg shadow-[#512B81] p-2 rounded-2xl w-96'>
                    <img src="" alt="thumbnail" className='w-64'/>
                    <div>
                        <h1 className='font-bold p-2'>Book name</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>  
            </main>
        </section>
    )
}

export default Recommendations