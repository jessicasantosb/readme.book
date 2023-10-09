import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function BooksInteraction() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const bookURL = "https://example-data.draftbit.com/books";

  useEffect(() => {
    axios
      .get(`${bookURL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="pt-[150px]">
      <main>
        <div className="flex flex-col justify-between items-center shadow-lg shadow-[#512B81] p-5 m-5 rounded-2xl hover:shadow-black/50 ">
          <div className="flex gap-5 items-center pb-5">
            <img
              className="h-44 rounded-xl"
              src={book?.image_url}
              alt="thumbnail"
            />
            <h2 className="font-bold text-xl text-[#35155D] py-3 text-center">
              {book?.title}
            </h2>
          </div>

          <h3 className="font-bold">Authors</h3>
          <h2 className="italic py-3 ">{book?.authors}</h2>
          <h3 className="font-bold pt-5 pb-3">Description</h3>
          <p className="text-justify">{book?.description}</p>
          <a
            href={book?.infoLink}
            target="_blank"
            rel="noreferrer"
            className="bg-[#35155D] text-white text-center py-3 rounded-xl shadow-sm shadow-[#512B81] hover:scale-95 hover:shadow-white my-5 h-12 w-28 cursor-pointer self-end"
          >
            More
          </a>
        </div>
      </main>
    </section>
  );
}

export default BooksInteraction;
