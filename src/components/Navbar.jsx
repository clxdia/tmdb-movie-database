import { Close, Menu, Search } from "@mui/icons-material";
import {
  Divider,
  getAccordionDetailsUtilityClass,
  List,
  ListItem,
  ListItemText,
  Paper,
  Switch,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme, setTheme }) => {
  const [open, setOpen] = useState();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar_container">
      <ul className="navbar_links">
        <li onClick={toggleOpen}>
          <Menu />
        </li>
        <li>
          <Search />
        </li>
      </ul>
      {open ? (
        <Paper className="navbar_open" elevation={12}>
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
            <Divider />
          </ul>
          <div className="switch_container">
            {/* <ReactSwitch
              onColor={"#262626"}
              offColor={"#bfbfbf"}
              className="switch"
              uncheckedIcon={<BiMoon className="moon" />}
              checkedIcon={<BiSun className="sun" />}
              onChange={() => toggleTheme() && setTheme("light")}
              checked={theme === "dark"}
            /> */}

            <Switch
              defaultChecked
              onChange={() => toggleTheme() && setTheme("light")}
              checked={theme === "dark"}
            />
          </div>
        </Paper>
      ) : (
        <div className="navbar_close"></div>
      )}
    </div>
  );
};

export default Navbar;
