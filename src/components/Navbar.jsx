import { Menu, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <ul className="navbar_links">
        <li>
          <Link>
            <Menu />
          </Link>
        </li>
        <li>
          <Link>
            <Search />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
