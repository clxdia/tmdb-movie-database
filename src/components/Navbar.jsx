import { Close, Menu, Search } from "@mui/icons-material";
import { Divider, Paper, Switch } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchMB from "./SearchMB";

const Navbar = ({ toggleTheme, theme, setTheme }) => {
  const [open, setOpen] = useState();
  const [search, setSearch] = useState();

  const toggleOpenMenu = () => {
    setOpen(!open);
  };

  const toggleOpenSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="navbar_container">
      <ul className="navbar_links">
        <li onClick={toggleOpenMenu}>
          <Menu />
        </li>
        <li onClick={toggleOpenSearch}>
          <Search />
        </li>
      </ul>
      {open ? (
        <Paper className="navbar_open" elevation={12}>
          <div className="navbar_open_flex">
            <div onClick={() => setOpen(false)}>
              <Close />
            </div>
            <div className="navbar_open_links_container">
              <ul className="navbar_open_links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/tv-shows">TV Shows</Link>
                </li>
                <Divider />
              </ul>
              <div className="switch_container">
                <Switch
                  defaultChecked
                  onChange={() => toggleTheme() && setTheme("light")}
                  checked={theme === "dark"}
                />
              </div>
            </div>
          </div>
        </Paper>
      ) : (
        <div className="navbar_close"></div>
      )}
      {search ? (
        <SearchMB
          toggleOpenSearch={toggleOpenSearch}
          search={search}
          setSearch={setSearch}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
