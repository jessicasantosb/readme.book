import {useRef, useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../components/api/axios";
import useAuth from "../components/hooks/useAuth";

function Login() {
    const loginUrl = './login'

    const {setAuth} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(() => {
        setErrMsg('')
    },[user, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(loginUrl, 
                JSON.stringify({user, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
            setAuth({user, password, roles, accessToken})
            setUser('')
            setPassword('')
            navigate(from, {replace: true})
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No server response")
            } else if (err.reponse?.status === 400) {
                setErrMsg('Missing username or password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus()
        }
    }

    return (
        <section className="bg-[#0E2954] w-full h-screen flex items-center justify-center">
            <main className="w-96 p-14 bg-white">
                <p ref={errRef} className={errMsg ? "errMsg" : "hidden"} aria-live="assertive">{errMsg}</p>
                <h1 className="text-center text-xl pb-5">Sign in</h1>

                <form on onSubmit={handleSubmit}>
                    <label htmlFor="username" className="flex gap-2 items-center">Username:</label>
                    <input type="text" id="username" ref={userRef} value={user} onChange={(e) => setUser(e.target.value)} required className="bg-[#e8e8e8] w-full"/>

                    <label htmlFor="password" className="flex gap-2 items-center">Password:</label>
                    <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)} required className="bg-[#e8e8e8] w-full"/>
                    
                    <button className="w-full bg-[#0E2954] text-white my-5 p-2">Sign up</button>

                    <p>Don't have a account?<br/>
                        <span className="text-[#0E2954]">
                            <Link to='/register'>Register</Link>
                        </span>                    
                    </p>

                </form>
            </main>
        </section>
    )
}

export default Login