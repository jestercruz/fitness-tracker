import { useEffect, useState } from "react";
import "../stylesheets/ExerciseInput.css";
import Input from "./Input";
import Stepper from "./Stepper";

const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  const [updateHistory, setUpdateHistory] = useState(false);
  useEffect(() => {
    if (updateHistory) {
      setHistory([...history, exercise]);
      setUpdateHistory(false);
    }
  }, [updateHistory, setHistory, history, exercise]);
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
        placeholder="Muscle Group"
        onChange={(e) => {
          setExercise({ ...exercise, group: e.target.value });
        }}
        value={exercise.group}
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
              weight: e.target.value.replace(/[^0-9.]/, ""),
            });
          }}
          onBlur={(e) => {
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
      <button
        className="add-workout"
        onClick={() => {
          setExercise({ ...exercise, id: Date.now() });
          setUpdateHistory(true);
        }}
      >
        Add Workout
      </button>
    </div>
  );
};

export default ExerciseInput;
