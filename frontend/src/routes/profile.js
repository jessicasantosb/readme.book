import React, { useEffect, useContext } from "react";
import AuthContext from "../components/contexts/authProvider";
import axios from "axios";
import Cookies from "universal-cookie";
import "../App";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FaBookmark, FaBook } from "react-icons/fa";
import Library from "../components/profile/library";
import Recommendations from "../components/profile/recommendations";

function Profile() {
  const { auth } = useContext(AuthContext);
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: process.env.PROFILE_URL || "http://localhost:5000/profile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <m.section
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative h-screen w-full flex items-center justify-center p-5">
        <FaBookmark
          className="absolute top-0 left-0 z-10"
          size={220}
          color="#4477CE"
        />
        <div className="flex flex-col items-center justify-center z-10">
          <h1 className="text-white font-bold text-9xl text-center pt-28 md:text-7xl">
            Hello!
          </h1>
          <p className="text-center text-xl text-white/60 pb-9 pt-20">
            Pick your favorites from Catalog
          </p>
          <button className="bg-[#512B81] text-white rounded-xl shadow-sm shadow-[#8CABFF] hover:scale-95 h-12">
            <Link className="p-14" to="/login">
              Sign in
            </Link>
          </button>
        </div>
        <div
          id="area"
          className="absolute top-0 left-0 w-full h-screen object-cover"
        >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <Library />

      <div className="flex">
        <div className="w-full relative m-5 border-b-[3px] border-[#512B81]"></div>
        <FaBook className="relative top-2 text-[#512B81]" size={70} />
        <div className="w-full relative m-5 border-b-[3px] border-[#512B81] "></div>
      </div>

      <Recommendations />
    </m.section>
  );
}

export default Profile;
