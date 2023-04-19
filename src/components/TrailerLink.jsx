import React, { useEffect, useState } from "react";

const TrailerLink = ({ media_type, media_id }) => {
  const [link, getLink] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${media_type}/${media_id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US
        
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getLink(data.results[2]);
      });
  }, []);

  return (
    <>
      {link && (
        <a
          className="link_container"
          href={`https://www.youtube.com/watch?v=` + link.key}
        ></a>
      )}
    </>
  );
};

export default TrailerLink;
