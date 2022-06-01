import React, { useState } from "react";
import Title from "../components/Title";
import ExerciseInput from "../components/ExerciseInput";
import DisplayHistory from "../components/DisplayHistory";

const AddWorkout = () => {
  const dateTime = new Date();

  const [exercise, setExercise] = useState({
    id: "",
    date: dateTime,
    group: "",
    exerciseName: "",
    weight: 0,
    sets: 4,
    reps: 10,
  });
  const [history, setHistory] = useState([]);
  return (
    <>
      <Title title="Add Workout" icon />
      <ExerciseInput
        exercise={exercise}
        setExercise={setExercise}
        setHistory={setHistory}
        history={history}
      />
      <DisplayHistory history={history} />
    </>
  );
};

export default AddWorkout;
