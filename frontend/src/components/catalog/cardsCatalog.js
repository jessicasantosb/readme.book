import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/favoritesContext";
import Pagination from "./pagination";
import { FaBookmark, FaComments } from "react-icons/fa";

function BooksCatalog() {
  //setting books catalog
  const API_url = "https://example-data.draftbit.com/books?_limit=50";

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const [sortType, setSortType] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_url)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let currentPost = books.slice(firstPostIndex, lastPostIndex);

  //add card to profile
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  function bookOnListChecker(id) {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }

  //setting sort
  function ascending() {
    let result = [...books];
    if (result.length > 0) {
      let ascending = result.sort((a, b) => a.title.localeCompare(b.title));
      //currentPost = ascending.slice(firstPostIndex, lastPostIndex)
    }
  }

  function descending() {
    let result = [...books];
    if (result.length > 0) {
      let descending = result.sort((b, a) => b.title.localeCompare(a.title));
      //currentPost = descending.slice(firstPostIndex, lastPostIndex)
    }
  }

  return (
    <section className="px-5 pt-24 w-full bg-white relative -top-[1rem]">
      <div className="flex flex-col items-center justify-center m-9">
        <label className="text-[#35155D] text-lg pb-2" htmlFor="sort">
          Sort by
        </label>
        <select
          defaultValue="default"
          className="w-24 border border-[#512B81] text-[#512B81] text-center rounded-lg p-1"
        >
          <option value="default">Default</option>
          <option
            value="ascending"
            onClick={() => ascending(sortType, setSortType)}
          >
            a - z
          </option>
          <option
            value="descending"
            onClick={() => descending(sortType, setSortType)}
          >
            z - a
          </option>
        </select>
      </div>
      <main className="grid grid-cols-fit gap-4">
        {currentPost.map((book) => (
          <div className="h-[650px] flex flex-col justify-between items-center shadow-lg shadow-[#512B81] p-2 rounded-2xl hover:shadow-black/50">
            <img
              className="w-full h-56 rounded-xl"
              src={book.image_url}
              alt="thumbnail"
            />
            <h2 className="font-bold text-xl text-[#35155D] py-3 text-center">
              {book.title}
            </h2>
            <h2 className="italic py-3 ">{book.authors}</h2>
            <div className="flex self-end">
              {bookOnListChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  <FaBookmark className="text-[#35155D] h-5 w-5 cursor-pointer" />
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  <FaBookmark className="text-[#35155D] opacity-40 h-5 w-5 cursor-pointer" />
                </button>
              )}
              <FaComments
                onClick={() => navigate(`/catalog/books/${book.id}`)}
                className="text-[#35155D] h-5 w-9 ml-2 cursor-pointer active:opacity-70"
              />
            </div>
          </div>
        ))}
      </main>
      <div>
        <Pagination
          totalPosts={books.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default BooksCatalog;
