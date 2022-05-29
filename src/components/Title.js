import "../stylesheets/Title.css";
import { ReactComponent as AccountIcon } from "../assets/account.svg";
import { useNavigate } from "react-router-dom";

const Title = ({ title, icon }) => {
  const navigate = useNavigate();

  return (
    <div className={`title-container ${icon ? "with-icon" : ""}`}>
      <h1 className="header">{title}</h1>
      <span>
        {icon && (
          <AccountIcon
            className="icon"
            onClick={() => {
              navigate("/login");
            }}
          />
        )}
      </span>
    </div>
  );
};

export default Title;
