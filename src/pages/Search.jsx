import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultsUI from "../components/ResultsUI";
import SearchComponent from "../components/SearchComponent";
import "../styles/search_results.css";

const Search = () => {
  const [films, getFilms] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const { state } = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${state}&include_adult=false`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Could not fetch the data from the api. Try again later."
          );
        }
        return res.json();
      })
      .then((data) => {
        getFilms(data.results);
        setIsPending(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsPending(false);
          setError(err.message);
        }, 2000);
      });
  }, []);

  return (
    <div className="results_page">
      <SearchComponent />
      <h2 className="results_for">Results for: "{state}"</h2>
      {isPending && (
        <div className="loading">
          <p>Loading...</p>
          <CircularProgress color="inherit" />
        </div>
      )}
      {error && (
        <div className="loading">
          <h3>Something went wrong, please try again in a bit.</h3>
          <p>{error}</p>
        </div>
      )}
      {films?.length > 0 ? (
        <main className="results_container">
          <div className="results">
            {films.map((film) => (
              <div className="single_result">
                <ResultsUI film={film} key={film.id} />
              </div>
            ))}
          </div>
        </main>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
