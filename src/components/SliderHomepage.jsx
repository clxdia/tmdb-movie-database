import React from "react";

const SliderHomepage = ({ trending }) => {
  return (
    <div className="slider">
      <div className="container">
        {trending.map((trend) => (
          <div className="swiper_box">
            <img
              src={"https://www.themoviedb.org/t/p/w1280/" + trend.poster_path}
              className="poster"
            ></img>
            <p className="title">{trend.name || trend.title}</p>
          </div>
        ))}
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};

export default SliderHomepage;
