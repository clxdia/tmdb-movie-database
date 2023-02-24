import React from "react";

import "../styles/pages.css";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GradeIcon from "@mui/icons-material/Grade";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AsideComponent from "../components/AsideComponent";
import MediaPages from "../components/MediaPages";

const Movies = () => {
  return (
    <main className="pages_main">
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

      <section className="pages_all_sliders_container">
        <MediaPages
          id="now-playing"
          category="movie"
          string="now_playing"
          title="Now Playing"
          icon={<LocalMoviesIcon />}
        />
        <MediaPages
          id="now-popular"
          category="movie"
          string="popular"
          title="Now Popular"
          icon={<TrendingUpIcon />}
        />
        <MediaPages
          id="top-rated"
          category="movie"
          string="top_rated"
          title="Top Rated"
          icon={<GradeIcon />}
        />
        <MediaPages
          id="coming-soon"
          category="movie"
          string="upcoming"
          title="Coming Soon"
          icon={<GroupWorkIcon />}
        />
      </section>
    </main>
  );
};

export default Movies;
