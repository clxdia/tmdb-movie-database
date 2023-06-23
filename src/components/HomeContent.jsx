import Reviews from "../components/Reviews";
import React, { useEffect, useState } from "react";
import Celebrities from "./Celebrities";
import Trailers from "./Trailers";
import Trending from "./Trending";

const HomeContent = () => {
  const [trending, setTrending] = useState(null);
  const [moviesId, setMoviesId] = useState(null);

  const getTrending = (movies) => {
    setTrending(movies);
  };
  useEffect(() => {
    if (trending) {
      setMoviesId(trending.map((movie) => movie.id));
    }
  }, [trending]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${
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
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="home_content">
      <Trending category={"movie"} title={"Movies"} />
      <Trailers />
      <Celebrities />
      <Trending category={"tv"} title={"TV Shows"} />
      {trending && (
        <section>
          <h3 className="heading reviews_title">Top Reviews</h3>
          <div className="review_wrapper">
            {moviesId &&
              moviesId
                .slice(0, 5)
                .map((movieId) => <Reviews key={movieId} movieId={movieId} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomeContent;
