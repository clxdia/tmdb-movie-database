import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Trailer from "./Trailer";
import { Paper } from "@mui/material";

const Trailers = () => {
  const [medias, getMedias] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getMedias(data.results);
      });
  }, []);

  return (
    <section className="trailers">
      <h3 className="title">Latest Trailers</h3>
      <div className="videos_container">
        {medias &&
          medias.map((media) => (
            <div>
              <Paper
                elevation={7}
                className="video_container"
                style={{
                  backgroundImage: `url(${
                    "https://www.themoviedb.org/t/p/w1280/" +
                    media.backdrop_path
                  })`,
                }}
              >
                <Trailer media_type={media.media_type} media_id={media.id} />
                <FaPlay size={40} />
              </Paper>
              <p className="media_title">{media.name || media.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Trailers;
