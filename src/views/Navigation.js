import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";
import "../stylesheets/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li className="nav-icon">
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li className="nav-icon">
          <Link to="/addworkout">
            <AddIcon />
          </Link>
        </li>
        <li className="nav-icon">
          <Link to="/">
            <Logout />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
