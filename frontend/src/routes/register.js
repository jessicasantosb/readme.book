import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const registerUrl = process.env.REGISTER_URL || "http://localhost:5000/register";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [register, setRegister] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(usernameRegex.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(passwordRegex.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation1 = usernameRegex.test(username);
    const validation2 = passwordRegex.test(password);

    if (!validation1 || !validation2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const configuration = {
        method: "post",
        url: registerUrl,
        data: {
          username,
          password,
        },
      };
      axios(configuration).then((result) => {
        setRegister(true);
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <main className="w-96 p-14 border border-[#4477CE] shadow-lg shadow-[#8CABFF] rounded-2xl">
        <p
          ref={errRef}
          className={`text-red-400 text-center${errMsg ? "errMsg" : "hidden"}`}
          aria-live="assertive"
        >
          {errMsg}
          {register ? (
            <p className="text-green-700 text-center">
              You Are Registered Successfully
            </p>
          ) : (
            ""
          )}
        </p>
        <h1 className="text-[#4477CE] text-center text-xl py-5">Register</h1>

        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <label
            htmlFor="username"
            className="flex gap-2 items-center text-[512B81]"
          >
            Username:
            <span className={validName ? "valid" : "hidden"}>
              <FaCheck color="#4477CE" />
            </span>
            <span className={validName || !username ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>
          <input
            type="text"
            name="username"
            value={username}
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="usernameNote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            className="border border-[#8CABFF] rounded-xl text-[#35155D] p-1 w-full"
          />
          <p
            className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${
              userFocus && username && !validName ? "instructions" : "hidden"
            }`}
          >
            <FaInfoCircle color="#4477CE" />
            <br />- 4 to 24 characters
            <br />- Must begin with a letter.
            <br />- Letters, numbers, underscores and hyphens allowed.
          </p>

          <label htmlFor="password" className="flex gap-2 items-center">
            Password:
            <span className={validPassword ? "valid" : "hidden"}>
              <FaCheck color="#4477CE" />
            </span>
            <span className={validPassword || !password ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="passwordNote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className="border border-[#8CABFF] rounded-xl text-[#35155D] p-1 w-full"
          />
          <p
            className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${
              passwordFocus && !validPassword ? "instructions" : "hidden"
            }`}
          >
            <FaInfoCircle color="#4477CE" />
            <br />- 8 to 24 characters
            <br />- Must include uppercase and lowercase letters, a number and a
            special character
            <br />- Allowed special characters:{" "}
            <span arial-label="exclamation mark">!</span>{" "}
            <span arial-label="at symbol">@</span>{" "}
            <span arial-label="hashtag">#</span>{" "}
            <span arial-label="dolar sign">$</span>{" "}
            <span arial-label="percent">%</span>
          </p>

          <label htmlFor="confirmPassword" className="flex gap-2 items-center">
            Confirm Password:
            <span className={validMatch && matchPassword ? "valid" : "hidden"}>
              <FaCheck color="#4477CE" />
            </span>
            <span
              className={validMatch || !matchPassword ? "hidden" : "invalid"}
            >
              <FaTimes />
            </span>
          </label>
          <input
            type="password"
            onChange={(e) => setMatchPassword(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmNote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="border border-[#8CABFF] rounded-xl text-[#35155D] p-1 w-full"
          />
          <p
            className={`bg-[#c6c9ca] text-sm p-2 m-2 rounded-xl ${
              matchFocus && !validMatch ? "instructions" : "hidden"
            }`}
          >
            <FaInfoCircle color="#4477CE" />
            <br />- Must match the first password input field.
          </p>

          <button
            onClick={(e) => handleSubmit(e)}
            disabled={
              !validName || !validPassword || !validMatch ? true : false
            }
            className="cursor-pointer bg-[#4477CE] text-white rounded-xl hover:scale-95 my-9 h-12 w-full"
          >
            Sign up
          </button>

          <p>
            Already registered?
            <br />
            <span className="text-[#35155D]">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </main>
    </section>
  );
}

export default Register;
