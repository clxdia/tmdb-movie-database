import { Close, Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/searchMB.css";

const SearchMB = ({ toggleOpenSearch }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    if (value != null) {
      navigate("/search?query=" + value, { state: value, replace: true });
      window.location.reload(false);
    }
  };
  return (
    <div className="search-bar_page">
      <Close onClick={() => toggleOpenSearch()} />
      <form onSubmit={handleSearch} className="search search_mb">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="search_input search_input_mobile"
          placeholder="Search for movies and more..."
        ></input>
        <Search
          className="search-icon_mobile"
          alt="search"
          fill="#ffffff"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchMB;
