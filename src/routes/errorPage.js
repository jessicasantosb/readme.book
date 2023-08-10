import React from "react";
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'

function ErrorPage() {
    return (
        <div className="bg-[#0E2954] h-screen w-screen flex align-center justify-center">
            <div className="bg-white h-96 w-full mt-36 p-14 text-center">
                <h1 className="pb-10 text-4xl">
                    Error 404
                </h1>
                <button className="bg-[#0E2954] text-white p-2 cursor-pointer">
                    <Link to="/">Go back to home page</Link>
                </button>
            </div> 
        </div>
    ) 
}

export default ErrorPage