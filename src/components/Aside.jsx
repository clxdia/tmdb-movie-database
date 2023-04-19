import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/aside.css";
import ReactSwitch from "react-switch";
import { BiMoon, BiSun } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { RiMovie2Fill, RiMovie2Line, RiTvFill, RiTvLine } from "react-icons/ri";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

const Aside = ({ toggleTheme, theme, setTheme }) => {
  const [open, setClose] = useState(false);
  const [active, setActive] = useState("Home");

  const handleLinkClick = (linkName) => {
    setActive(linkName);
  };

  const handleOpen = () => {
    setClose((prevState) => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setClose(false);
    }
  };

  return (
    <div className="page_wrapper">
      <div className="aside-home">
        <ul>
          <li
            style={{
              borderLeftColor: "transparent",
            }}
          >
            <Link
              className="aside-links search_link"
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
            >
              <SearchIcon />
            </Link>
            {open && (
              <div
                className="search_background"
                onClick={() => setClose(false)}
              >
                <Link className="close_icon" onClick={handleOpen}>
                  <CloseIcon fontSize="large" />
                </Link>

                <div
                  className="search_bar"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SearchBar />
                  <h3>Press ESC to close.</h3>
                </div>
              </div>
            )}
          </li>
          <li
            style={{
              borderLeftColor: active === "Home" ? "#7f5af0" : "transparent",
              backgroundColor:
                active === "Home" ? "rgba(199, 199, 199, 0.1)" : "transparent",
            }}
          >
            <Link
              className="aside-links"
              to="/"
              onClick={() => handleLinkClick("Home")}
              style={{
                transform: active === "Home" ? "scale(120%)" : "scale(100%)",
                transition: active === "Home" && "all 300ms ease-in-out",
              }}
            >
              {active === "Home" ? (
                <AiFillHome size={25} />
              ) : (
                <AiOutlineHome size={25} />
              )}
            </Link>
          </li>
          <li
            style={{
              borderLeftColor: active === "Movies" ? "#7f5af0" : "transparent",
              backgroundColor:
                active === "Movies"
                  ? "rgba(199, 199, 199, 0.1)"
                  : "transparent",
            }}
          >
            <Link
              className="aside-links"
              to="movies"
              onClick={() => handleLinkClick("Movies")}
              style={{
                transform: active === "Movies" ? "scale(120%)" : "scale(100%)",
                transition: active === "Movies" && "all 300ms ease-in-out",
              }}
            >
              {active === "Movies" ? (
                <RiMovie2Fill size={25} />
              ) : (
                <RiMovie2Line size={25} />
              )}
            </Link>
          </li>
          <li
            style={{
              borderLeftColor:
                active === "TV Shows" ? "#7f5af0" : "transparent",
              backgroundColor:
                active === "TV Shows"
                  ? "rgba(199, 199, 199, 0.1)"
                  : "transparent",
            }}
          >
            <Link
              className="aside-links"
              to="tv-shows"
              onClick={() => handleLinkClick("TV Shows")}
              style={{
                transform:
                  active === "TV Shows" ? "scale(120%)" : "scale(100%)",
                transition: active === "TV Shows" && "all 300ms ease-in-out",
              }}
            >
              {active === "TV Shows" ? (
                <RiTvFill size={25} />
              ) : (
                <RiTvLine size={25} />
              )}
            </Link>
          </li>
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
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Aside;
