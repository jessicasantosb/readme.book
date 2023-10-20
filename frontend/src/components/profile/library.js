import React from "react";
import "../../App";
import { useAppContext } from "../contexts/favoritesContext";
import { motion as m } from "framer-motion";
import { FaBookmark, FaBook } from "react-icons/fa";
import SearchBooks from "./searchBooks";

function Library() {
  //add card to favorites
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  function favoriteChecker(id) {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }

  return (
    <>
      <m.section
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-5 mb-12 text-center"
      >
        <h2 className="font-bold text-5xl text-[#4477CE] pt-32">Library</h2>
        <p className="text-xl my-16">
          Choose books from <span className="text-[#512B81]">Catalog</span> or
          add your preferred one using the{" "}
          <span className="text-[#512B81]">Form</span> bellow.
        </p>
        <FaBook className="absolute w-full h-full -mt-64 -right-72 m-0 opacity-20 text-[#4477CE] -z-10 -rotate-12" />
        <div className="grid grid-cols-fit">
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div
                key={book.id}
                className="flex items-center gap-3 m-5 shadow-lg shadow-[#512B81] p-2 rounded-2xl w-32"
              >
                <img
                  className="w-20 rounded-xl"
                  src={book.image_url}
                  alt="thumbnail"
                />
                <div>
                  {favoriteChecker(book.id) ? (
                    <button onClick={() => removeFromFavorites(book.id)}>
                      <FaBookmark className="text-[#35155D] h-5 w-5 cursor-pointer" />
                    </button>
                  ) : (
                    <button onClick={() => addToFavorites(book)}>
                      <FaBookmark className="text-[#35155D] opacity-40 h-5 w-5 cursor-pointer" />
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="w-screen">
              <h1 className="text-center text-[#512B81] text-lg italic my-32">
                This is where your preferred books will be displayed.
              </h1>
            </div>
          )}
        </div>

        <div className="flex">
          <div className="w-full relative m-5 border-b-[3px] border-[#512B81]"></div>
          <FaBook className="relative top-2 text-[#512B81]" size={70} />
          <div className="w-full relative m-5 border-b-[3px] border-[#512B81] "></div>
        </div>

        <SearchBooks />
      </m.section>
    </>
  );
}

export default Library;
