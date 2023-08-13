import {useRef, useState, useEffect} from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Register() {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const registerUrl = './register'

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPassword, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(() => {
        setValidName(usernameRegex.test(user))
    },[user])

    useEffect(() => {
        setValidPassword(passwordRegex.test(password)) 
        setValidMatch(password === matchPassword)
    },[password, matchPassword])

    useEffect(() => {
        setErrMsg('')
    },[user, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validation1 = usernameRegex.test(user)
        const validation2 = passwordRegex.test(password)

        if (!validation1 || !validation2) {
            setErrMsg("Invalid Entry")
            return
        }
        try {
            const response = await axios.post(registerUrl, JSON.stringify({user, password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            })
            console.log(response?.data)
            console.log(response?.accessToken)
            console.log(JSON.stringify(response))
            setSuccess(true)
            setPassword('')
            setUser('')
            setMatchPassword('')
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No server response")
            } else if (err.response?.status === 409) {
                setErrMsg("Username taken")
            } else {
                setErrMsg("Registration failed")
            }
            errRef.current.focus()
        }
    }

    return (
        <section className="bg-[#0E2954] w-full h-screen flex items-center justify-center">
            <main className="w-96 p-14 bg-white">
                <p ref={errRef} className={`text-red-400${errMsg ? "errMsg" : "hidden"}`} aria-live="assertive">{errMsg}</p>
                <h1 className="text-center text-xl pb-5">Register</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" className="flex gap-2 items-center">Username: 
                        <span className={validName ? "valid" : "hidden"}>
                            <FaCheck />
                        </span> 
                        <span className={validName || !user ? "hidden" : "invalid"}>
                            <FaTimes />
                        </span>
                    </label>
                    <input type="text" id="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} required aria-invalid={validName ? "false" : "true"} aria-describedby="usernameNote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} className="bg-[#e8e8e8] w-full"/>
                    <p id="usernameNote" className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${userFocus && user && !validName ? "instructions" : "hidden"}`}>
                        <FaInfoCircle/><br/>- 4 to 24 characters<br/>- Must begin with a letter.<br/>- Letters, numbers, underscores and hyphens allowed.
                    </p>

                    <label htmlFor="password" className="flex gap-2 items-center">Password: 
                        <span className={validPassword ? "valid" : "hidden"}>
                            <FaCheck />
                        </span> 
                        <span className={validPassword || !password ? "hidden" : "invalid"}>
                            <FaTimes />
                        </span>
                    </label>
                    <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} required aria-invalid={validPassword ? "false" : "true"} aria-describedby="passwordNote" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} className="bg-[#e8e8e8] w-full"/>
                    <p id="passwordNote" className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${passwordFocus && !validPassword ? "instructions" : "hidden"}`}>
                        <FaInfoCircle/><br/>- 8 to 24 characters<br/>- Must include uppercase and lowercase letters, a number and a special character<br/>- Allowed special characters: <span arial-label="exclamation mark">!</span> <span arial-label="at symbol">@</span> <span arial-label="hashtag">#</span> <span arial-label="dolar sign">$</span> <span arial-label="percent">%</span>
                    </p>

                    <label htmlFor="confirmPassword" className="flex gap-2 items-center">Confirm Password: 
                        <span className={validMatch && matchPassword ? "valid" : "hidden"}>
                            <FaCheck />
                        </span> 
                        <span className={validMatch || !matchPassword ? "hidden" : "invalid"}>
                            <FaTimes />
                        </span>
                    </label>
                    <input type="password" id="confirmPassword"  onChange={(e) => setMatchPassword(e.target.value)} required aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmNote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} className="bg-[#e8e8e8] w-full"/>
                    <p id="confirmNote" className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${matchFocus && !validMatch ? "instructions" : "hidden"}`}>
                        <FaInfoCircle/><br/>- Must match the first password input field.
                    </p>

                    <button disabled={!validName || !validPassword || !validMatch ? true : false} className="w-full bg-[#0E2954] text-white my-5 p-2">Sign up</button>

                    <p>Already registered?<br/>
                        <span className="text-[#0E2954]">
                            <Link to='/login'>Login</Link>
                        </span>                    
                    </p>
                </form>
            </main>
        </section>
    )
}

export default Register