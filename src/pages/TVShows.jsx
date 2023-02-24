import React from "react";

import "../styles/pages.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import GradeIcon from "@mui/icons-material/Grade";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AsideComponent from "../components/AsideComponent";
import MediaPages from "../components/MediaPages";

const TVShows = () => {
  return (
    <main className="pages_main">
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
      <div className="pages_all_sliders_container">
        <MediaPages
          id="now-playing"
          category="tv"
          string="airing_today"
          title="Airing Today"
          icon={<LiveTvIcon />}
        />
        <MediaPages
          id="on-air"
          category="tv"
          string="on_the_air"
          title="On The Air"
          icon={<VideocamIcon />}
        />
        <MediaPages
          id="top-rated"
          category="tv"
          string="top_rated"
          title="Top Rated"
          icon={<GradeIcon />}
        />
        <MediaPages
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
