import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/home.css";

const Reviews = ({ movieId }) => {
  const [review, setReview] = useState([]);

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

  if (!review) {
    return null;
  }

  return (
    <div key={review.id} className="reviews">
      <div className="icon_name">
        {/* <Avatar
          src={
            review.author_details.avatar_path !== null || undefined ? (
              review.author_details.avatar_path.substring(1) ||
              "https://www.themoviedb.org/t/p/w128_and_h128_face/" +
                review.author_details.avatar_path
            ) : (
              <Avatar sx={{ bgcolor: "gray" }}>{review.author}</Avatar>
            )
          }
        /> */}

        <h3>
          {review.author}
          {/* <span>{review.author_details.rating}</span> */}
        </h3>
      </div>

      <p>{review.content}</p>
    </div>
  );
};

export default Reviews;
