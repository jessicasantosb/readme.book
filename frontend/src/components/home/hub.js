import React from "react";
import imageHub from "../../images/hub.jpg";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

function Hub() {
  const cookies = new Cookies();
  const token = cookies.get("token");

  return (
    <section className="flex flex-col items-center justify-center flex-wrap mx-5 mt-24">
      <h2 className="text-[#512B81] text-3xl pb-24 text-center">
        Bringing together all your preferred books in a single spot
      </h2>
      <div className={token ? "hidden" : "text-center mb-9"}>
        <Link
          className="bg-[#512B81] text-white rounded-xl shadow-sm shadow-black  text-center p-5 uppercase hover:scale-90 hover:shadow-none mr-5"
          to="/login"
        >
          Sign in
        </Link>
        <Link
          className="bg-[#4477CE] text-white rounded-xl shadow-sm shadow-black text-center p-5 uppercase hover:scale-90 hover:shadow-none"
          to="/register"
        >
          Sign up
        </Link>
      </div>
      <img src={imageHub} alt="happy girl" className="w-96" />
    </section>
  );
}

export default Hub;
