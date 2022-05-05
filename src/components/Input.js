const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
