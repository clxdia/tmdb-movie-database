import React from "react";

import "../styles/movies.css";
import SliderPages from "../components/SliderPages";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GradeIcon from "@mui/icons-material/Grade";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AsideComponent from "../components/AsideComponent";

const Movies = () => {
  return (
    <main className="movies_homepage">
      <AsideComponent
        link1={"#now-playing"}
        title1="Now Playing"
        link2={"#now-popular"}
        title2="Now Popular"
        link3={"#top-rated"}
        title3="Top Rated"
        link4={"#coming-soon"}
        title4="Coming Soon"
      />

      <div className="movie_lists">
        <SliderPages
          id="now-playing"
          category="movie"
          string="now_playing"
          title="Now Playing"
          icon={<LocalMoviesIcon />}
        />
        <SliderPages
          id="now-popular"
          category="movie"
          string="popular"
          title="Now Popular"
          icon={<TrendingUpIcon />}
        />
        <SliderPages
          id="top-rated"
          category="movie"
          string="top_rated"
          title="Top Rated"
          icon={<GradeIcon />}
        />
        <SliderPages
          id="coming-soon"
          category="movie"
          string="upcoming"
          title="Coming Soon"
          icon={<GroupWorkIcon />}
        />
      </div>
    </main>
  );
};

export default Movies;
