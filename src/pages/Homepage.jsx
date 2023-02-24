import React, { useState } from "react";

import Trailers from "../components/Trailers";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import hero from "../assets/hero-movies.png";
import MediaHomepage from "../components/MediaHomepage";

const Homepage = () => {
  return (
    <>
      <header className="header">
        <img className="hero" src={hero}></img>
        <h1 className="title_homepage">MovieFinder</h1>
        <SearchComponent />
      </header>

      <MediaHomepage category="movie" title="Trending Now in Movies" />
      <Trailers />
      <MediaHomepage category="tv" title="Trending Now in TV Shows" />
    </>
  );
};

export default Homepage;
