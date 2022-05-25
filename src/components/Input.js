import "../stylesheets/Input.css";
import AutoCompletePanel from "./AutoCompletePanel";
import { useState } from "react";

const Input = ({
  placeholder,
  onChange,
  value,
  enableAutoComplete = false,
  isValid = true,
  type = "text",
  data,
  dataKey,
}) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const onInputChange = (e) => {
    onChange(e);
    if (e.target.value !== "") {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  };
  const onBlur = (e) => {
    if (
      e.relatedTarget?.className !== "auto-complete-item" &&
      e.relatedTarget?.className !== "auto-complete-panel"
    ) {
      setShowAutoComplete(false);
    }
  };
  return (
    <>
      <input
        className={`input ${showAutoComplete ? "with-autocomplete" : ""} ${
          !isValid ? "valid" : ""
        }`}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        onBlur={onBlur}
      />
      {enableAutoComplete && showAutoComplete ? (
        <AutoCompletePanel
          data={data}
          dataKey={dataKey}
          setShowAutoComplete={setShowAutoComplete}
          onClick={onChange}
        />
      ) : null}
    </>
  );
};

export default Input;
