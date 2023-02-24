import React from "react";

import "../styles/slider.css";
import "../styles/small_slider.css";

const SliderPages = ({ movies }) => {
  return (
    <div className="pages_slider_container">
      <div className="pages_slider">
        {movies.map((movie) => (
          <div className="slider_single_box">
            <img
              src={"https://www.themoviedb.org/t/p/w1280/" + movie.poster_path}
            ></img>
            <p className="title">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
      <div className="fade_effect"></div>
    </div>
  );
};

export default SliderPages;
