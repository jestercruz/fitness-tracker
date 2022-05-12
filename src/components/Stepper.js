import Input from "./Input";
import "../stylesheets/Stepper.css";

const Stepper = ({ label, changeHandler, value }) => {
  const key = label.toLowerCase();
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div className="stepper-container">
        <button
          className="stepperButton"
          onClick={() => changeHandler({ ...value, [key]: value[key] - 1 })}
        >
          -
        </button>
        <Input
          onChange={(e) => {
            changeHandler({
              ...value,
              [key]: Number(e.target.value.replace(/[^0-9]/, "")),
            });
          }}
          value={value[key]}
        />
        <button
          className="stepperButton"
          onClick={() => changeHandler({ ...value, [key]: value[key] + 1 })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Stepper;
