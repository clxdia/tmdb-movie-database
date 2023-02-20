import { Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SliderHomepage from "./SliderHomepage";

export default function TrendingHomepage({ category, title }) {
  const [trending, getTrending] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${category}/day?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api.");
        }
        return res.json();
      })
      .then((data) => {
        getTrending(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <section className="trending">
      <h3 className="trending_title">{title}</h3>
      {isPending && (
        <div className="skeleton_homepage">
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
        <div className="error_homepage">
          <h3>Something went wrong, please try again in a bit.</h3>
          <p>{error}</p>
        </div>
      )}
      {trending && <SliderHomepage trending={trending} key={trending.id} />}
    </section>
  );
}
