import { Chip, Divider, Paper, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/singleItem.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const SingleShow = ({ category }) => {
  const { id } = useParams();
  const [data, getData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [recs, getRecs] = useState();
  const [credits, getCredits] = useState();

  useEffect(() => {
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
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1&include_adult=false&sort_by=popularity.desc`
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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the api");
        }
        return res.json();
      })
      .then((data) => {
        getCredits(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);

  return (
    <>
      <div className="single-item_page">
        {data && (
          <>
            <section
              className="background_single-item"
              style={{
                backgroundImage: `url(${
                  "https://www.themoviedb.org/t/p/original/" +
                  data.backdrop_path
                })`,
              }}
            >
              <div className="shadow-gradient-bio"></div>
              <div className="single-item_card">
                <h4>
                  {data.original_name} &#40;{data.first_air_date?.slice(0, 4)}
                  &#41;
                </h4>
                <Divider className="divider" />
                <div className="single-item_bio">
                  <div className="single-item_poster">
                    <img
                      src={
                        data.poster_path !== null
                          ? "https://www.themoviedb.org/t/p/w1280/" +
                            data.poster_path
                          : "https://via.placeholder.com/400"
                      }
                    ></img>
                  </div>
                  <div className="sigle-item_desc">
                    <h5 className="single-item_title">{data.name}</h5>
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
                      <span>
                        {data.episode_run_time[0] ||
                          data.last_episode_to_air.runtime}
                        min
                      </span>
                      <Divider orientation="vertical" flexItem />
                      {data.genres.map((genre, index) => (
                        <span key={genre.id}>
                          {genre.name}
                          {index < data.genres.length - 1 && " / "}
                        </span>
                      ))}
                      <Divider orientation="vertical" flexItem />
                      <span>{data.first_air_date.slice(0, 4)}</span>
                    </div>
                    <Divider className="divider" />
                    <div className="single-item_details-cast">
                      <div className="details">
                        <h5>Details</h5>
                        {credits && credits.crew.slice(0, 4).map((member) => (
                          <p key={member.id}>
                            {member.known_for_department}:{" "}
                            <span>{member.name}</span>
                          </p>
                        ))} 
                        <p>
                          Country: {data.production_countries[0]?.iso_3166_1}
                        </p>
                        <p>
                          Main Language:{" "}
                          {data.spoken_languages[0]?.english_name}
                        </p>
                        <p>Release Date: {data.first_air_date}</p>
                      </div>
                      <div className="cast">
                        <h5>Cast</h5>
                        {credits && credits.cast.slice(0, 4).map((member) => (
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
                <Divider className="divider" />
                <div className="storyline_episode">
                  <div className="storyline">
                    <h5>Storyline</h5>
                    <p>{data.overview}</p>
                    <Divider className="divider" />
                    <h5 className="seasons">
                      Seasons Total: {data.number_of_seasons}
                    </h5>
                  </div>
                  <div className="episode">
                    <h5>Last episode to air</h5>
                    <img
                      src={
                        data.last_episode_to_air?.still_path !== null ||
                        undefined
                          ? "https://www.themoviedb.org/t/p/w1280/" +
                            data.last_episode_to_air?.still_path
                          : "https://via.placeholder.com/400"
                      }
                    ></img>
                    <p>
                      Episode: {data.last_episode_to_air?.episode_number}{" "}
                      Season:
                      {data.last_episode_to_air?.season_number}
                    </p>
                    <p>"{data.last_episode_to_air?.name}"</p>
                  </div>
                </div>
              </div>
              <div className="shadow-gradient_single-item"></div>
            </section>

            {/* --------------- MOBILE VERSION -------------- */}

            <section
              className="poster_single-item"
              style={{
                backgroundImage: `url(${
                  "https://www.themoviedb.org/t/p/w1280/" + data.poster_path
                })`,
              }}
            >
              <div className="shadow-gradient_poster"></div>
            </section>
            <div className="single-item_card_mobile">
              <h4>
                {data.name} &#40;{data.first_air_date?.slice(0, 4)}
                &#41;
              </h4>
              <div className="single-item_bio">
                <div className="sigle-item_desc">
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
                    <p>
                      {data.episode_run_time[0] ||
                        data.last_episode_to_air.runtime}
                      min{" "}
                    </p>
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
                      {credits && credits.crew.slice(0, 4).map((member) => (
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
                      {credits && credits.cast.slice(0, 4).map((member) => (
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
          </>
        )}
      </div>
      {recs && (
        <div className="pages_slider_container recs recs_tv">
          <h5>Similar TV Shows</h5>
          <div className="pages_slider">
            {recs.map((rec) => (
              <Link
                to={`/tv/${rec.id}`}
                className="slider_single_box"
                key={rec.id}
              >
                <div className="slider_single_box" key={rec.id}>
                  <img
                    src={
                      rec.poster_path !== null
                        ? "https://www.themoviedb.org/t/p/w1280/" +
                          rec.poster_path
                        : "https://via.placeholder.com/400"
                    }
                  ></img>
                  <p className="media_title">{rec.title || rec.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="fade_effect"></div>
        </div>
      )}
    </>
  );
};

export default SingleShow;
