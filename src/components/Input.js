import "../stylesheets/Input.css";

const Input = ({
  className,
  placeholder,
  onChange,
  value,
  onBlur,
  type = "text",
}) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};

export default Input;
