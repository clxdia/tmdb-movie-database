import { Close, Menu, Search } from "@mui/icons-material";
import { getAccordionDetailsUtilityClass, Switch } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme, setTheme }) => {
  const [open, setOpen] = useState();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`navbar ${open ? "active" : ""}`}>
        <div className="navbar_container">
          <ul className="navbar_links">
            <li onClick={toggleOpen}>
              <Menu />
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar_open">
        <ul className="navbar_open_links">
          <li onClick={() => setOpen(false)}>
            <Close />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv-shows">TV Shows</Link>
          </li>
          <div className="switch_container">
            <Switch
              defaultChecked
              onChange={() => toggleTheme() && setTheme("light")}
              checked={theme === "dark"}
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
