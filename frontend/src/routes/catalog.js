import React from "react";
import { motion as m } from "framer-motion";
import "../App";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import book1Catalog from "../images/book1Catalog.jpg";
import book2Catalog from "../images/book2Catalog.jpg";
import book3Catalog from "../images/book3Catalog.jpg";
import CardsCatalog from "../components/catalog/cardsCatalog";
import SearchBooks from "../components/catalog/searchBooks";
import { FaBook } from "react-icons/fa";

function Catalog() {
  const cookies = new Cookies();
  const token = cookies.get("token");

  return (
    <>
      <m.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header id="heroCatalog" className="h-screen w-full p-5">
          <div className="flex flex-col items-center justify-center pt-14">
            <h1 className="text-white font-bold text-9xl md:text-7xl">
              Catalog
            </h1>
            <p className="text-white/70 text-xl text-center py-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <Link
              className={
                token
                  ? "hidden"
                  : "bg-[#512B81] text-white rounded-xl shadow-sm shadow-[#4477CE]  text-center p-5 uppercase hover:scale-90 hover:shadow-none mr-5"
              }
              to="/login"
            >
              Sign in
            </Link>
          </div>

          <div className="absolute w-full flex items-end justify-center -bottom-14 pt-5">
            <img
              className="relative h-96 left-[10rem] origin-bottom -rotate-6 ease-linear hover:-rotate-12 md:h-72"
              src={book1Catalog}
              alt="Sapiens, A Brief History of Humankind"
            />
            <img
              className="relative h-96 origin-bottom -rotate-3 ease-linear hover:-rotate-6 md:h-72"
              src={book2Catalog}
              alt="The Subtle Art of Not Giving a F*"
            />
            <img
              className="relative h-96 right-[10rem] origin-bottom rotate-1 ease-linear hover:rotate-6 md:h-72"
              src={book3Catalog}
              alt="Atomic Habits"
            />
          </div>
        </header>

        <CardsCatalog />

        <div className="flex">
          <div className="w-full relative m-5 border-b-[3px] border-[#512B81]"></div>
          <FaBook className="relative top-2 text-[#512B81]" size={70} />
          <div className="w-full relative m-5 border-b-[3px] border-[#512B81] "></div>
        </div>

        <SearchBooks />
      </m.div>
    </>
  );
}

export default Catalog;
