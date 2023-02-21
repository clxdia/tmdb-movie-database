import { MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import ReactSwitch from "react-switch";

const Navbar = ({ toggleTheme, theme, setTheme }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="links_container">
          <h2>
            <Link to="/">MovieFinder</Link>
          </h2>
          <ul className="navbar_links">
            <MenuItem className="MenuItem">
              <Typography textAlign="center">
                <NavLink to="/movies">Movies</NavLink>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">
                <NavLink to="/tvshows">TV Shows</NavLink>
              </Typography>
            </MenuItem>
          </ul>
        </div>
        <div className="switch_container">
          <ReactSwitch
            onColor={"#262626"}
            offColor={"#bfbfbf"}
            className="switch"
            uncheckedIcon={<BiMoon className="moon" />}
            checkedIcon={<BiSun className="sun" />}
            onChange={() => toggleTheme() && setTheme("light")}
            checked={theme === "dark"}
          />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
