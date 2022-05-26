import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as HistoryIcon } from "../assets/history.svg";
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
          <Link to="/history">
            <HistoryIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
