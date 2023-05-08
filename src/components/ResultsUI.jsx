import { Paper, Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResultsUI = ({ film }) => {
  const [open, setOpen] = useState();

  for (let id in film.genre_ids) {
    if (film.genre_ids[id] === 28) {
      film.genre_ids[id] = `Action`;
    }
    if (film.genre_ids[id] === 12) {
      film.genre_ids[id] = `Adventure`;
    }
    if (film.genre_ids[id] === 16) {
      film.genre_ids[id] = `Animation`;
    }
    if (film.genre_ids[id] === 35) {
      film.genre_ids[id] = `Comedy`;
    }
    if (film.genre_ids[id] === 80) {
      film.genre_ids[id] = `Crime`;
    }
    if (film.genre_ids[id] === 99) {
      film.genre_ids[id] = `Documentary`;
    }
    if (film.genre_ids[id] === 18) {
      film.genre_ids[id] = `Drama`;
    }
    if (film.genre_ids[id] === 10751) {
      film.genre_ids[id] = `Family`;
    }
    if (film.genre_ids[id] === 14) {
      film.genre_ids[id] = `Fantasy`;
    }
    if (film.genre_ids[id] === 36) {
      film.genre_ids[id] = `History`;
    }
    if (film.genre_ids[id] === 27) {
      film.genre_ids[id] = `Horror`;
    }
    if (film.genre_ids[id] === 10402) {
      film.genre_ids[id] = `Music`;
    }
    if (film.genre_ids[id] === 9648) {
      film.genre_ids[id] = `Mystery`;
    }
    if (film.genre_ids[id] === 10749) {
      film.genre_ids[id] = `Romance`;
    }
    if (film.genre_ids[id] === 878) {
      film.genre_ids[id] = `Science Fiction`;
    }
    if (film.genre_ids[id] === 10770) {
      film.genre_ids[id] = `TV Movie`;
    }
    if (film.genre_ids[id] === 53) {
      film.genre_ids[id] = `Thriller`;
    }
    if (film.genre_ids[id] === 10752) {
      film.genre_ids[id] = `War`;
    }
    if (film.genre_ids[id] === 37) {
      film.genre_ids[id] = `Western`;
    }
  }

  return (
    <div className="single">
      <Link to={`/movie/${film.id}`} key={film.id}>
        <Paper className="single_result" elevation={7} key={film.id}>
          <img
            src={
              film.poster_path !== null
                ? "https://www.themoviedb.org/t/p/w1280/" + film.poster_path
                : "https://via.placeholder.com/400"
            }
          ></img>
          <div className="fade_effect fade_effect_results"></div>
          <div className="result_desc">
            <div className="title_date">
              <p className="title_film">{film.title || film.name}</p>
              <p className="date">&#40;{film.release_date.slice(0, 4)}&#41;</p>
            </div>
            <div className="desc">
              <p>{film.overview}</p>
            </div>
          </div>
        </Paper>
        <div className="title_date_mobile">
          <p className="title_film">{film.title || film.name}</p>
          <p className="date">&#40;{film.release_date.slice(0, 4)}&#41;</p>
        </div>
      </Link>
    </div>
  );
};

export default ResultsUI;
