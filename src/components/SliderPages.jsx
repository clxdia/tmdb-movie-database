import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaUI from "./MediaUI";

export default function SliderPages({ category, string, title, icon, id }) {
  const [movies, getMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${category}/${string}?api_key=${
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
    <div>
      <h3 className="title_movies" id={id}>
        {icon}
        {title}
      </h3>
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
        <>
          <h3>Something went wrong, please try again in a bit.</h3>
          <p>{error}</p>
        </>
      )}
      {movies && <MediaUI movies={movies} key={movies.id} />}
    </div>
  );
}
