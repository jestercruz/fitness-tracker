import "../stylesheets/Button.css";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`${props.secondary ? "secondary" : ""} ${
        props.className
      } button`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
