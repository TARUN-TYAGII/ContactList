import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { searchResult } from "../actions";

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const first = useRef(true);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!first.current) {
      const delay = setTimeout(() => {
        props.contacts.dispatch(searchResult(searchTerm));
      }, 500);
      return () => clearTimeout(delay);
    }
    first.current = false;
  }, [searchTerm]);

  return (
    <div className="nav bg-gray-900 flex  items-center justify-between h-24">
      <Link to="/">
        <div className="logo text-2xl text-white font-bold ml-5 font-serif">
          RECOVERO TEST
        </div>
      </Link>

      <div className="search-bar -ml-28">
        <form>
          <input
            className="search-input w-[7in] p-3 pl-4 focus:outline-none rounded-full placeholder:text-xl text-xl "
            type="text"
            placeholder="search contact"
            value={searchTerm}
            onChange={handleChange}
          ></input>
          <img
            className="h-6 -mt-9 ml-[6.6in]"
            src="https://img.icons8.com/ios-glyphs/2x/search.png"
            alt="search-icon"
          />
        </form>
      </div>
      <div className="create-btn text-black rounded-lg  font-bold mr-8 p-2 bg-blue-300">
        <button>
          <Link to="/create-contact">Add Contact </Link>
        </button>
      </div>
    </div>
  );
}
