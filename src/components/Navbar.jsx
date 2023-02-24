import { MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import ReactSwitch from "react-switch";

const Navbar = ({ toggleTheme, theme, setTheme }) => {
  return (
    <>
      <nav className="navbar_container">
        <div className="navbar">
          <div className="links_container">
            <h2 className="logo_desktop">
              <Link to="/">MovieFinder</Link>
            </h2>
            <h2 className="logo_mobile">
              <Link to="/">MF</Link>
            </h2>
            <ul className="navbar_links">
              <MenuItem className="MenuItem">
                <NavLink to="/movies">Movies</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/tvshows">TV Shows</NavLink>
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
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
