import React from 'react';

function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}) {
    let pages = []
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return(
        <div className='flex justify-center items-center text-white gap-2 my-9'>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={`bg-[#35155D] p-2 rounded-xl w-9 ${page == currentPage ? 'bg-white text-[#35155D] border border-[#512B81]' : ''}`}>{page}</button>
            })}
        </div>
    )
}

export default Pagination 