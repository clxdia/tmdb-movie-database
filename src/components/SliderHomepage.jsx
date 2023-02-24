import React from "react";
import "../styles/homepage.css";

const SliderHomepage = ({ trending }) => {
  return (
    <div className="homepage_slider_container">
      <div className="homepage_slider">
        {trending.map((trend) => (
          <div className="slider_single_box">
            <img
              src={"https://www.themoviedb.org/t/p/w1280/" + trend.poster_path}
              className="poster"
            ></img>
            <p className="media_title">{trend.name || trend.title}</p>
          </div>
        ))}
      </div>
      <div className="fade_effect"></div>
    </div>
  );
};

export default SliderHomepage;
