import { Chip, Divider, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/singleItem.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const SingleItem = ({ category }) => {
  const { id } = useParams();
  const [data, getData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [recs, getRecs] = useState();

  useEffect(() => {
    getData(null);
    setIsPending(true);
    setError(null);
    fetch(
      `https://api.themoviedb.org/3/${category}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=watch/providers&append_to_response=credits`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id, category]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1&include_adult=false`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getRecs(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);

  return (
    <div className="single-item_page">
      {data && (
        <>
          <section
            className="background_single-item"
            style={{
              backgroundImage: `url(${
                "https://www.themoviedb.org/t/p/w1280/" + data.backdrop_path
              })`,
            }}
          >
            <div className="shadow-gradient-bio"></div>
            <div className="single-item_card">
              <h4>
                {data.original_title} &#40;{data.release_date?.slice(0, 4)}&#41;
              </h4>
              <Divider className="divider" />
              <div className="single-item_bio">
                <div className="single-item_poster">
                  <img
                    src={
                      "https://www.themoviedb.org/t/p/w1280/" + data.poster_path
                    }
                  ></img>
                </div>
                <div className="sigle-item_desc">
                  <h5 className="single-item_title">{data.title}</h5>
                  <p className="tagline">{data.tagline}</p>
                  <Divider className="divider" />
                  <div className="watchers">
                    <RemoveRedEyeIcon />
                    <p>{data.vote_count}</p>
                    <Rating
                      name="read-only"
                      className="Rating"
                      value={Math.round((data.vote_average / 2) * 10) / 10}
                      precision={0.5}
                      readOnly
                    />
                    <Divider orientation="vertical" flexItem />
                    <p>{data.runtime}min </p>
                    <Divider orientation="vertical" flexItem />
                    {data.genres.map((genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < data.genres.length - 1 && " / "}
                      </span>
                    ))}
                    <Divider orientation="vertical" flexItem />
                    <p>{data.release_date.slice(0, 4)}</p>
                  </div>
                  <Divider className="divider" />
                  <div className="single-item_details-cast">
                    <div className="details">
                      <h5>Details</h5>
                      {data.credits.crew.slice(0, 4).map((member) => (
                        <p key={member.id}>
                          {member.known_for_department}:{" "}
                          <span>{member.name}</span>
                        </p>
                      ))}
                      <p>Country: {data.production_countries[0]?.iso_3166_1}</p>
                      <p>
                        Main Language: {data.spoken_languages[0]?.english_name}
                      </p>
                      <p>Release Date: {data.release_date}</p>
                    </div>
                    <div className="cast">
                      <h5>Cast</h5>
                      {data.credits.cast.slice(0, 4).map((member) => (
                        <div key={member.id} className="cast_members">
                          <div
                            style={{
                              backgroundImage: `url(${
                                "https://www.themoviedb.org/t/p/w1280/" +
                                member.profile_path
                              })`,
                            }}
                          ></div>
                          <span>{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Divider className="divider" />
                  <div className="storyline storyline_movie">
                    <h5>Storyline</h5>
                    <p>{data.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="poster_single-item"
            style={{
              backgroundImage: `url(${
                "https://www.themoviedb.org/t/p/w1280/" + data.poster_path
              })`,
            }}
          ></section>
          <div className="shadow-gradient_poster"></div>
          <div className="single-item_card_mobile">
            <h4>
              {data.original_title} &#40;{data.release_date?.slice(0, 4)}&#41;
            </h4>
            <div className="single-item_bio">
              <div className="sigle-item_desc">
                <h5 className="single-item_title">{data.title}</h5>
                <p className="tagline">{data.tagline}</p>
                <Divider className="divider" />
                <div className="watchers">
                  <RemoveRedEyeIcon />
                  <p>{data.vote_count}</p>
                  <Rating
                    name="read-only"
                    className="Rating"
                    value={Math.round((data.vote_average / 2) * 10) / 10}
                    precision={0.5}
                    readOnly
                  />
                  <Divider orientation="vertical" flexItem />
                  <p>{data.runtime}min </p>
                </div>
                <Divider className="divider" />
                <div className="single-item_genres">
                  {data.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < data.genres.length - 1 && " / "}
                    </span>
                  ))}
                </div>
                <Divider className="divider" />
                <div className="storyline storyline_movie">
                  <h5>Storyline</h5>
                  <p>{data.overview}</p>
                </div>
                <Divider className="divider" />
                <div className="single-item_details-cast">
                  <div className="details">
                    <h5>Details</h5>
                    {data.credits.crew.slice(0, 4).map((member) => (
                      <p key={member.id}>
                        {member.known_for_department}:{" "}
                        <span>{member.name}</span>
                      </p>
                    ))}
                    <p>Country: {data.production_countries[0]?.iso_3166_1}</p>
                    <p>
                      Main Language: {data.spoken_languages[0]?.english_name}
                    </p>
                    <p>Release Date: {data.release_date}</p>
                  </div>
                  <Divider className="divider" />
                  <div className="cast">
                    <h5>Cast</h5>
                    {data.credits.cast.slice(0, 4).map((member) => (
                      <div key={member.id} className="cast_members">
                        <div
                          style={{
                            backgroundImage: `url(${
                              "https://www.themoviedb.org/t/p/w1280/" +
                              member.profile_path
                            })`,
                          }}
                        ></div>
                        <span>{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-gradient_single-item"></div>
          {recs && (
            <div className="pages_slider_container recs">
              <h5>Similar Movies</h5>
              <div className="pages_slider">
                {recs.map((rec) => (
                  <Link
                    to={`/movie/${rec.id}`}
                    className="slider_single_box"
                    key={rec.id}
                  >
                    <div className="slider_single_box" key={rec.id}>
                      <img
                        src={
                          "https://www.themoviedb.org/t/p/w1280/" +
                          rec.poster_path
                        }
                      ></img>
                      <p className="media_title">{rec.title || rec.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleItem;
