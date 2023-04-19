import React, { useEffect, useState } from "react";
import "../styles/celebrities.css";

const Celebrities = () => {
  const [people, getPeople] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${
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
        getPeople(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h2 className="heading">Top People</h2>
      <div className="celebrities">
        {people &&
          people.map((person, number) => (
            <div className="person" key={person.id}>
              <div
                className="person_icon"
                style={{
                  backgroundImage: `url(${
                    "https://www.themoviedb.org/t/p/w1280/" +
                    person.profile_path
                  })`,
                }}
              >
                <div className="number">
                  <p>{number + 1}</p>
                </div>
              </div>

              <p>{person.name}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Celebrities;
