import "../stylesheets/Input.css";

const Input = ({ placeholder, onChange, value, onBlur, type = "text" }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};

export default Input;
