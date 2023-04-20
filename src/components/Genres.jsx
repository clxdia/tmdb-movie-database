import React, { useEffect, useState } from "react";
import "../styles/genres.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Genres = ({ category }) => {
  const [movies, getMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [genre, setGenre] = useState(28);
  const [genreName, setGenreName] = useState("Drama");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${category}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`
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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${category}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=3`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${category}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=4`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  let filteredMovies = [];
  let sortedMovies = [];

  if (movies) {
    filteredMovies = movies.filter((movie) => movie.genre_ids.includes(genre));
  } else {
    filteredMovies = movies;
  }

  sortedMovies = filteredMovies.sort((a, b) => b.vote_average - a.vote_average);

  const handleGenreClick = (id, name) => {
    setGenre(id);
    setGenreName(name);
  };

  return (
    <>
      <div className="genres_box">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(28, "Action")}
            >
              Action
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(12, "Adventure")}
            >
              Adventure
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(16, "Animation")}
            >
              Animation
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(35, "Comedy")}
            >
              Comedy
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(80, "Crime")}
            >
              Crime
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(18, "Drama")}
            >
              Drama
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(10751, "Family")}
            >
              Family
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(36, "History")}
            >
              History
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(27, "Horror")}
            >
              Horror
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(10402, "Music")}
            >
              Music
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(10749, "Romance")}
            >
              Romance
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(878, "Sci-Fi")}
            >
              Sci-Fi
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(10752, "War")}
            >
              War
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(53, "Thriller")}
            >
              Thriller
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className="button_genres"
              variant="contained"
              onClick={() => handleGenreClick(37, "Western")}
            >
              Western
            </Button>
          </Grid>
        </Grid>
      </div>
      <h2 className="heading heading_genres">
        {genreName} {category}
      </h2>
      {sortedMovies.length > 0 && (
        <div className="movies_grid">
          {sortedMovies.map((movie) => (
            <Link
              to={`/${category}/${movie.id}`}
              className="slider_single_box"
              key={movie.id}
            >
              <div
                className="slider_single_box slider_single_box_genres"
                key={movie.id}
              >
                <img
                  src={
                    "https://www.themoviedb.org/t/p/w1280/" + movie.poster_path
                  }
                ></img>
                <p className="media_title">{movie.title || movie.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Genres;
