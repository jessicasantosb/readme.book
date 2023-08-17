import React from "react";
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'

function ErrorPage() {
    return (
        <div className="h-screen w-screen flex align-center justify-center">
            <div className="bg-white h-96 w-full mt-36 p-14 text-center">
                <h1 className="pb-10 text-4xl text-[#512B81]">
                    Error 404
                </h1>
                <button className="bg-[#512B81] text-white rounded-xl hover:scale-95 my-9 h-12 w-56">
                    <Link to="/">Go back to home page</Link>
                </button>
            </div> 
        </div>
    ) 
}

export default ErrorPage