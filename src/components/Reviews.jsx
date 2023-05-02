import { Avatar, Paper, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/home.css";

const Reviews = ({ movieId }) => {
  const [review, setReview] = useState([]);
  const [movieName, setMovieName] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api.");
        }
        return res.json();
      })
      .then((data) => {
        setReview(data.results[0]);
      });
  }, [movieId]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api.");
        }
        return res.json();
      })
      .then((data) => {
        setMovieName(data);
      });
  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <Paper elevation={3} key={review.id} className="reviews">
      <div className="icon_name">
        <div className="avatar">
          <Avatar
            src={
              review.author_details?.avatar_path !== null || undefined ? (
                review.author_details?.avatar_path.substring(1) ||
                "https://www.themoviedb.org/t/p/w128_and_h128_face/" +
                  review.author_details?.avatar_path
              ) : (
                <Avatar sx={{ bgcolor: "gray" }}>{review.author}</Avatar>
              )
            }
          />
        </div>
        <div className="author">
          <div className="author_info">
            <h3>{review.author}</h3>•{movieName && <p>{movieName?.title}</p>}
          </div>
          <Rating
            name="read-only"
            className="Rating"
            value={Math.round((review.author_details?.rating / 2) * 10) / 10}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
      <div className="review">
        <p className="review_content">{review.content}</p>
      </div>
    </Paper>
  );
};

export default Reviews;
