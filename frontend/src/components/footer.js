import React from "react";
import "../App";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shadow-2xl shadow-black text-white">
      <div className="w-full p-5 bg-[#512B81] flex items-start justify-center flex-row gap-14">
        <div className="flex flex-col">
          <h3 className="text-lg pb-2 underline">Copyrights</h3>

          <p>
            Favicon image by{" "}
            <a
              className="text-[#8CABFF] opacity-60 hover:text-white"
              href="https://pixabay.com/pt/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1296329"
              target="_blank"
              rel="noreferrer"
            >
              Pixabay
            </a>
          </p>

          <p>
            Home image by{" "}
            <a
              className="text-[#8CABFF] opacity-60 hover:text-white"
              href="https://www.freepik.com/free-photo/old-books-arrangement-with-copy-space_13130601.htm#query=book&position=10&from_view=keyword&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              Freepik
            </a>
          </p>

          <p>
            Hub image by{" "}
            <a
              className="text-[#8CABFF] opacity-60 hover:text-white"
              href="https://www.vecteezy.com/free-vector/woman"
              target="_blank"
              rel="noreferrer"
            >
              Vecteezy
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg pb-2 underline">Links</h3>
          <Link className="hover:opacity-60" to="/catalog">
            Catalog
          </Link>
          <Link className="hover:opacity-60" to="/login">
            Login
          </Link>
          <Link className="hover:opacity-60" to="/register">
            Signup
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg pb-2 underline">Help</h3>
          <Link className="hover:opacity-60" to="/">
            How to use
          </Link>
          <Link className="hover:opacity-60" to="/">
            About
          </Link>
          <Link className="hover:opacity-60" to="/">
            FAQ's
          </Link>
        </div>
      </div>

      <div className="w-full p-5 bg-[#35155D]">
        <p className="flex items-center justify-center gap-2">
          &copy; 2023 Developed by jessicasantosb
          <a
            className="hover:text-white/50"
            href="https://github.com/jessicasantosb"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
