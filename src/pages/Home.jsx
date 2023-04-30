import React, { useEffect, useState } from "react";
import Trailers from "../components/Trailers";
import Celebrities from "../components/Celebrities";
import "../styles/home.css";
import Trending from "../components/Trending";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [trending, getTrending] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

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
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home_section">
      {trending && (
        <>
          <div
            className="home-section-one"
            style={{
              backgroundImage: `url(${
                "https://www.themoviedb.org/t/p/original/" +
                trending[0].backdrop_path
              })`,
            }}
          >
            <div className="shadow-gradient-bio"></div>
            <div className="bio">
              <h2>{trending[0].title}</h2>
              <div>
                <div className="rating">
                  <Rating
                    name="read-only"
                    className="Rating"
                    value={Math.round((trending[0].vote_average / 2) * 10) / 10}
                    precision={0.5}
                    readOnly
                  />
                  <p>Score: {trending[0].vote_average.toFixed(1)}</p>
                </div>
                <p className="overview">{trending[0].overview}</p>
                <Link to={`/movie/${trending[0].id}`} key={trending[0].id}>
                  <Button variant="contained" className="button_view">
                    View
                  </Button>
                </Link>
              </div>
            </div>
            <div className="shadow-gradient"></div>
            <div className="trending_container">
              <Trending category={"movie"} title={"Movies"} />
            </div>
          </div>
          {/* -------------------MOBILE VERSION ---------  */}
          <div
            className="home-section-one_mobile"
            style={{
              backgroundImage: `url(${
                "https://www.themoviedb.org/t/p/w1280/" +
                trending[0].poster_path
              })`,
            }}
          >
            <div className="shadow-gradient-bio"></div>
            <div className="bio">
              <h2>{trending[0].title}</h2>
              <div>
                <div className="rating">
                  <Rating
                    name="read-only"
                    className="Rating"
                    value={Math.round((trending[0].vote_average / 2) * 10) / 10}
                    precision={0.5}
                    readOnly
                  />
                  <p>Score: {trending[0].vote_average.toFixed(1)}</p>
                </div>

                <Link to={`/movie/${trending[0].id}`} key={trending[0].id}>
                  <Button variant="contained" className="button_view">
                    View
                  </Button>
                </Link>
              </div>
            </div>
            <div className="shadow-gradient"></div>
          </div>
          <div className="home_content">
            <Trending category={"movie"} title={"Movies"} />
            <Trailers />
            <Celebrities />
            <Trending category={"tv"} title={"TV Shows"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
