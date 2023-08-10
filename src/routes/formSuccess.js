import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'
import Confetti from "react-confetti";

function FormSuccess() {
    const [pieces, setPieces] = useState(200)
    function stopConffeti() {
        setTimeout(() => {
            setPieces(0)
        }, 3000)
    }
    useEffect(() => {
        stopConffeti()
    })

    return (
        <>
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="bg-[#0E2954] h-screen w-screen flex align-center justify-center">
            <div className="bg-white h-96 w-full mt-36 p-14 text-center">
                <h1 className="pb-10 text-4xl">
                    Thank you! Your book will be posted soon!
                </h1>
                <button className="bg-[#0E2954] text-white p-2 cursor-pointer">
                    <Link to="/books">Go back to books catalog</Link>
                </button>
            </div> 
        </m.div>
        <Confetti numberOfPieces={pieces}/>
        </>
    )
}

export default FormSuccess