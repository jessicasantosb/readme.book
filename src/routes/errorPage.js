import React from "react";
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className="bg-[#0E2954] h-screen w-screen flex align-center justify-center">
            <div className="bg-white h-52 w-full mt-24 pt-14 text-center">
                <h1 className="pb-10 text-5xl">
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