import { Button } from "@mui/material";
import React from "react";
import "../styles/notfound.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <p>ERROR CODE 404</p>
      <h2>
        Oops!! <SentimentVeryDissatisfiedIcon fontSize="large" />
      </h2>
      <h3>This is not the page you are looking for.</h3>
      <Button variant="contained">
        <Link to="/">Take me back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
