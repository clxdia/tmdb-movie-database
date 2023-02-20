import React from "react";

import "../styles/slider.css";
import "../styles/small_slider.css";

const MediaUI = ({ movies }) => {
  return (
    <div className="slider_small">
      <div className="container_small">
        {movies.map((movie) => (
          <div className="swiper_box">
            <img
              src={"https://www.themoviedb.org/t/p/w1280/" + movie.poster_path}
            ></img>
            <p className="title">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};

export default MediaUI;
