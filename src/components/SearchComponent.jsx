import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../styles/searchBar.css";

const SearchComponent = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate("/search?query=" + value, { state: value, replace: true });
      window.location.reload(false);
    }
  };
  return (
    <form onSubmit={handleSearch} className="search">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search_input"
        placeholder="Search for movies, tv shows and more..."
      ></input>
      <div className="icon_container" onClick={handleSearch}>
        <BiSearchAlt
          className="search-icon"
          alt="search"
          fill="#ffffff"
          onClick={handleSearch}
        />
      </div>
    </form>
  );
};

export default SearchComponent;
