import Input from "./Input";
import "../stylesheets/Stepper.css";

const Stepper = ({ label, changeHandler, value }) => {
  const key = label.toLowerCase();
  return (
    <div>
      <label htmlFor={label} className="stepper-label">
        {label}
      </label>
      <div className="stepper-container">
        <button
          className="stepper-button"
          onClick={() => {
            value[key] -= 1;
            if (value[key] > 0) {
              changeHandler({ ...value, [key]: value[key] });
            } else {
              changeHandler({ ...value, [key]: (value[key] = 1) });
            }
          }}
        >
          -
        </button>
        <Input
          onChange={(e) => {
            if (e.target.value > 0) {
              changeHandler({
                ...value,
                [key]: Number(e.target.value.replace(/[^0-9]/, "")),
              });
            } else {
              changeHandler({ ...value, [key]: 1 });
            }
          }}
          value={value[key]}
        />
        <button
          className="stepper-button"
          onClick={() => changeHandler({ ...value, [key]: value[key] + 1 })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Stepper;
