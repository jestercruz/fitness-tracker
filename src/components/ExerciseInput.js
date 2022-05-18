import { useEffect, useState } from "react";
import "../stylesheets/ExerciseInput.css";
import Input from "./Input";
import Stepper from "./Stepper";
import { WORKOUTS } from "../data/workouts";

const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  const [updateHistory, setUpdateHistory] = useState(false);
  useEffect(() => {
    if (updateHistory) {
      setHistory([...history, exercise]);
      setUpdateHistory(false);
    }
  }, [updateHistory, setHistory, history, exercise]);

  const filterExercises = () => {
    let filteredExercises = [];
    let workoutsCopy = WORKOUTS;
    let groups = WORKOUTS.map((el) => el.group); // goes through WORKOUTS and stores each group into the groups array
    if (groups.includes(exercise.group)) {
      // checks if the groups array has current group in input box
      workoutsCopy = WORKOUTS.filter((el) => {
        // if it is, then WORKOUTS is filtered based on whether the element's group matches what is entered in the group field (exercise.group)
        return el.group === exercise.group;
      });
    }
    workoutsCopy.forEach(
      // goes through workoutsCopy and stores each exercise into filteredExercises
      (el) => filteredExercises.push(...el.exercises)
    );
    console.log(filteredExercises);
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
        onChange={(e) => {
          setExercise({ ...exercise, group: e.target.value });
        }}
        value={exercise.group}
        enableAutoComplete
        data={WORKOUTS.filter((el) => {
          return el.group.toLowerCase().includes(exercise.group.toLowerCase());
        })}
        dataKey="group"
      />
      <Input
        placeholder="Exercise"
        onChange={(e) => {
          setExercise({ ...exercise, exerciseName: e.target.value });
        }}
        enableAutoComplete
        data={filterExercises().filter((el) => {
          return el.exerciseName
            .toLowerCase()
            .includes(exercise.exerciseName.toLowerCase());
        })}
        dataKey="exerciseName"
        value={exercise.exerciseName}
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
