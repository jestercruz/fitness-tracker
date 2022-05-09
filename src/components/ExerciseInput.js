import "../stylesheets/ExerciseInput.css";
import Input from "./Input";
import Stepper from "./Stepper";

const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  return (
    <div className="exercise-input-container">
      <Input
        type="date"
        value={exercise.date}
        onChange={(e) => {
          setExercise({ ...exercise, date: e.target.value });
        }}
      />
      <Input
        placeholder="Exercise"
        onChange={(e) => {
          setExercise({ ...exercise, exercise: e.target.value });
        }}
        value={exercise.exercise}
      />
      <div className="number-inputs">
        <Input
          placeholder="Weight"
          onChange={(e) => {
            setExercise({
              ...exercise,
              weight: Number(e.target.value.replace(/[^0-9.]/, "")),
            });
          }}
          value={exercise.weight}
        />
        <Stepper label="Sets" changeHandler={setExercise} value={exercise} />
        <Stepper label="Reps" changeHandler={setExercise} value={exercise} />
      </div>
      <button onClick={() => setHistory([...history, exercise])}>
        Add Workout
      </button>
    </div>
  );
};

export default ExerciseInput;
