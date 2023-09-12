import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../components/hooks/useAuth";

function Login() {
  const loginUrl = "/login";

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        loginUrl,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      setUsername("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.reponse?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <main className="w-96 p-14 border border-[#35155D] shadow-lg shadow-[#512B81] rounded-2xl">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "hidden"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-[#35155D] text-center text-xl pb-5">Sign in</h1>

        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username" className="flex gap-2 items-center">
            Username:
          </label>
          <input
            type="text"
            name="username"
            ref={userRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-[#35155D] rounded-xl text-[#35155D] p-1 w-full"
          />

          <label htmlFor="password" className="flex gap-2 items-center">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-[#35155D] rounded-xl text-[#35155D] p-1 w-full"
          />

          <button 
          onClick={(e) => handleSubmit(e)}
          className="bg-[#512B81] text-white rounded-xl hover:scale-95 my-9 mr-5 h-12 w-full">
            Sign up
          </button>

          <p>
            Don't have a account?
            <br />
            <span className="text-[#4477CE]">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </main>
    </section>
  );
}

export default Login;
