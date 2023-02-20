import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import { BiMoon, BiSun } from "react-icons/bi";

import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Search from "./pages/Search";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import History from "./pages/history";
import "./styles/navbar.css";
import "./styles/swiper.css";
import "./App.css";
import { MenuItem, Typography } from "@mui/material";

export const ThemeContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router history={History}>
          <nav className="navbar">
            <div className="links_container">
              <h2>
                <Link to="/">MFinder</Link>
              </h2>
              <ul className="navbar_links">
                <MenuItem className="MenuItem">
                  <Typography textAlign="center">
                    <Link to="/movies">Movies</Link>
                  </Typography>
                </MenuItem>
                <li>
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link to="/tvshows">TV Shows</Link>
                    </Typography>
                  </MenuItem>
                </li>
              </ul>
            </div>
            <div className="switch_container">
              <ReactSwitch
                onColor={"#262626"}
                offColor={"#bfbfbf"}
                className="switch"
                uncheckedIcon={<BiMoon className="moon" />}
                checkedIcon={<BiSun className="sun" />}
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/search"
              element={<Search location={location} key={location.pathname} />}
            />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TVShows />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
