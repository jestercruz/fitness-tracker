import "../stylesheets/ExerciseInput.css";
import Input from "./Input";
import Stepper from "./Stepper";

const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  return (
    <div className="exercise-input-container">
      <Input
        placeholder="Exercise"
        onChange={(e) => {
          setExercise({ ...exercise, exercise: e.target.value });
        }}
        value={exercise.exercise}
      />
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
      <button onClick={() => setHistory([...history, exercise])}>
        Add Workout
      </button>
    </div>
  );
};

export default ExerciseInput;
