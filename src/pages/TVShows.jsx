import React from "react";

import "../styles/movies.css";
import SliderPages from "../components/SliderPages";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import GradeIcon from "@mui/icons-material/Grade";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AsideComponent from "../components/AsideComponent";

const TVShows = () => {
  return (
    <main className="movies_homepage">
      <AsideComponent
        link1={"#now-playing"}
        title1="Airing Today"
        link2={"#on-air"}
        title2="On The Air"
        link3={"#top-rated"}
        title3="Top Rated"
        link4={"#now-popular"}
        title4="Now Popular"
      />
      <div className="movie_lists">
        <SliderPages
          id="now-playing"
          category="tv"
          string="airing_today"
          title="Airing Today"
          icon={<LiveTvIcon />}
        />
        <SliderPages
          id="on-air"
          category="tv"
          string="on_the_air"
          title="On The Air"
          icon={<VideocamIcon />}
        />
        <SliderPages
          id="top-rated"
          category="tv"
          string="top_rated"
          title="Top Rated"
          icon={<GradeIcon />}
        />
        <SliderPages
          id="now-popular"
          category="tv"
          string="popular"
          title="Now Popular"
          icon={<TrendingUpIcon />}
        />
      </div>
    </main>
  );
};

export default TVShows;
