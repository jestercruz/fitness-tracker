import { useEffect, useState } from "react";
import "../stylesheets/ExerciseInput.css";
import Input from "./Input";
import Stepper from "./Stepper";
import AutoCompletePanel from "./AutoCompletePanel";
import { WORKOUTS } from "../data/workouts";

const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  const [updateHistory, setUpdateHistory] = useState(false);
  useEffect(() => {
    if (updateHistory) {
      setHistory([...history, exercise]);
      setUpdateHistory(false);
    }
  }, [updateHistory, setHistory, history, exercise]);

  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [showExerciseAutoComplete, setShowExerciseAutoComplete] =
    useState(false);
  const hideAutoCompletePanel = (e) => {
    if (
      e.relatedTarget?.className !== "auto-complete-item" &&
      e.relatedTarget?.className !== "auto-complete-panel"
    ) {
      setShowAutoComplete(false);
    }
  };
  const filterExercises = () => {
    let filteredExercises = [];
    let workoutsCopy = WORKOUTS;
    let groups = WORKOUTS.map((e) => e.group);
    if (groups.includes(exercise.group)) {
      workoutsCopy = WORKOUTS.filter((e) => {
        return e.group === exercise.group;
      });
    }
    workoutsCopy.forEach(
      (e) => (filteredExercises = [...filteredExercises, ...e.exercises])
    );
    return filteredExercises;
  };
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
        className={showAutoComplete ? "with-autocomplete" : ""}
        onChange={(e) => {
          if (e.target.value !== "") {
            setShowAutoComplete(true);
          } else {
            setShowAutoComplete(false);
          }
          setExercise({ ...exercise, group: e.target.value });
        }}
        onBlur={(e) => {
          hideAutoCompletePanel(e);
        }}
        value={exercise.group}
      />
      {showAutoComplete ? (
        <AutoCompletePanel
          data={WORKOUTS}
          dataKey="group"
          exercise={exercise}
          setExercise={setExercise}
          setShowAutoComplete={setShowAutoComplete}
        />
      ) : null}
      <Input
        placeholder="Exercise"
        className={showExerciseAutoComplete ? "with-autocomplete" : ""}
        onChange={(e) => {
          if (e.target.value !== "") {
            setShowExerciseAutoComplete(true);
          } else {
            setShowExerciseAutoComplete(false);
          }
          setExercise({ ...exercise, exerciseName: e.target.value });
        }}
        value={exercise.exerciseName}
      />
      {showExerciseAutoComplete ? (
        <AutoCompletePanel
          data={filterExercises()}
          dataKey="exerciseName"
          exercise={exercise}
          setExercise={setExercise}
          setShowAutoComplete={setShowExerciseAutoComplete}
        />
      ) : null}
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
