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
    },[])

    return (
        <>
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="h-screen w-screen flex align-center justify-center">
            <div className="bg-white h-96 w-full mt-36 p-14 text-center">
                <h1 className="pb-10 text-4xl text-[#512B81]">
                    Thank you! Your book will be posted soon!
                </h1>
                <button className="bg-[#512B81] text-white rounded-xl hover:scale-95 my-9 h-12 w-56">
                    <Link to="/catalog">Go to books catalog</Link>
                </button>
            </div> 
        </m.div>
        <Confetti numberOfPieces={pieces} gravity={0.2}/>
        </>
    )
}

export default FormSuccess