import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import icon from "../assets/mf.ico";

const Footer = () => {
  return (
    <section className="footer_wrapper">
      <div className="footer_content">
        <div className="footer_content-left">
          <div className="footer_icon">
            <img src={icon}></img>
            <h2>MovieFinder</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer_content-right">
          <ul className="footer_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tv-shows">TV Shows</Link>
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <h3>© Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
    </section>
  );
};

export default Footer;
