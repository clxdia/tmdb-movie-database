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
          throw Error("Could not fetch the data from the api.");
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
      <div className="search_search-page-results">
        <SearchComponent />
      </div>

      <h2 className="results_for">Results for: "{state}"</h2>
      {isPending && (
        <section className="loading_results">
          <p>Loading...</p>
          <CircularProgress color="inherit" />
        </section>
      )}
      {error && (
        <section className="error_results">
          <h3>Something went wrong, please try again in a bit.</h3>
          <p>{error}</p>
        </section>
      )}
      {films?.length > 0 ? (
        <section className="results_container">
          <div className="results">
            {films.map((film) => (
              <ResultsUI film={film} key={film.id} />
            ))}
          </div>
        </section>
      ) : (
        <section className="no_movies_found">
          <h3>No movies found</h3>
        </section>
      )}
    </div>
  );
};

export default Search;
