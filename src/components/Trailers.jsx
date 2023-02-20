import React, { useEffect, useState } from "react";
import "../styles/trailers.css";
import { FaPlay } from "react-icons/fa";
const Trailers = () => {
  const [bg, getBg] = useState(null);

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
        getBg(data.results);
      });
  }, []);
  return (
    <section className="trailers">
      <div className="section_container trailers">
        <h3 className="trailers_title">Latest Trailers</h3>
        <div className="videos_wrapper">
          <a
            className="link_container"
            href={"https://www.youtube.com/watch?v=uLtkt8BonwM"}
          >
            {bg && (
              <>
                <div
                  className="video_container"
                  style={{
                    backgroundImage: `url(${
                      "https://www.themoviedb.org/t/p/w1280/" +
                      bg[0].backdrop_path
                    })`,
                  }}
                >
                  <FaPlay size={40} />
                </div>
                <p className="title">{bg[0].name || bg[0].title}</p>
              </>
            )}
          </a>
          <a
            className="link_container"
            href={"https://www.youtube.com/watch?v="}
          >
            {bg && (
              <>
                <div
                  className="video_container"
                  style={{
                    backgroundImage: `url(${
                      "https://www.themoviedb.org/t/p/w1280/" +
                      bg[1].backdrop_path
                    })`,
                  }}
                >
                  <FaPlay size={40} />
                </div>
                <p className="title">{bg[1].name || bg[1].title}</p>
              </>
            )}
          </a>
          <a
            className="link_container"
            href={"https://www.youtube.com/watch?v=uLtkt8BonwM"}
          >
            {bg && (
              <>
                <div
                  className="video_container"
                  style={{
                    backgroundImage: `url(${
                      "https://www.themoviedb.org/t/p/w1280/" +
                      bg[2].backdrop_path
                    })`,
                  }}
                >
                  <FaPlay size={40} />
                </div>
                <p className="title">{bg[2].name || bg[2].title}</p>
              </>
            )}
          </a>
          <a
            className="link_container"
            href={"https://www.youtube.com/watch?v=uLtkt8BonwM"}
          >
            {bg && (
              <>
                <div
                  className="video_container"
                  style={{
                    backgroundImage: `url(${
                      "https://www.themoviedb.org/t/p/w1280/" +
                      bg[3].backdrop_path
                    })`,
                  }}
                >
                  <FaPlay size={40} />
                </div>
                <p className="title">{bg[3].name || bg[3].title}</p>
              </>
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trailers;
