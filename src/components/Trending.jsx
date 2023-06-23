import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MediaPages({ category, title }) {
  const [movies, getMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${category}/day?api_key=${
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
    <div className="slider slider_tvshows">
      <h3 className="heading">Trending Now in {title}</h3>
      {isPending && (
        <div className="skeleton_movies">
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
          <Skeleton variant="rounded" width={200} height={280} />
        </div>
      )}
      {error && (
        <div className="error">
          <h3>Something went wrong, please try again in a bit.</h3>
          <p>{error}</p>
        </div>
      )}
      {movies && (
        <div className="pages_slider_container pages_slider_container_tvshow">
          <div className="pages_slider pages_slider_tvshows">
            {movies.map((movie) => (
              <Link
                to={`/${category}/${movie.id}`}
                className="slider_single_box"
                key={movie.id}
              >
                <img
                  src={
                    "https://www.themoviedb.org/t/p/w1280/" + movie.poster_path
                  }
                ></img>
                <p className="media_title">{movie.title || movie.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
