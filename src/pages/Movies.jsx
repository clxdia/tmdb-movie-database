import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "../styles/movies.css";

import MediaSlider from "../components/MediaSlider";
import { Rating } from "@mui/material";
import TrailerLink from "../components/TrailerLink";
import Genres from "../components/Genres";

const Movies = () => {
  const [movies, getMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getMovies(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <main className="movies-main">
      <div className="pages_slider_container_media">
        <MediaSlider
          category={"movie"}
          string={"now_playing"}
          title={"Now Playing in Theatres"}
        />
      </div>
      {movies && (
        <div
          className="featured_movie"
          style={{
            backgroundImage: `url(${
              "https://www.themoviedb.org/t/p/original/" +
              movies[0].backdrop_path
            })`,
          }}
        >
          <div className="shadow-gradient-bio shadow-gradient-bio-movies"></div>
          <div className="content">
            <div className="bio bio_movies">
              <h2>{movies[0].title}</h2>
              <p className="movies_paragraph">{movies[0].overview}</p>
              <div className="rating">
                <Rating
                  name="read-only"
                  className="Rating"
                  value={Math.round((movies[0].vote_average / 2) * 10) / 10}
                  precision={0.5}
                  readOnly
                />
                <p>Score: {movies[0].vote_average.toFixed(1)}</p>
              </div>
            </div>
            <div className="play_button">
              <TrailerLink media_type={"movie"} media_id={movies[0].id} />
              <PlayCircleOutlineIcon />
              <p>PLAY TRAILER</p>
            </div>
          </div>
        </div>
      )}
      <Genres category={"movie"} />
    </main>
  );
};

export default Movies;
