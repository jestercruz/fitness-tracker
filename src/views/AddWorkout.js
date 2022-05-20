import React, { useState } from "react";

import ExerciseInput from "../components/ExerciseInput";
import DisplayHistory from "../components/DisplayHistory";

const AddWorkout = () => {
  const dateTime = new Date(Date.now()).toISOString().split("T");

  const [exercise, setExercise] = useState({
    id: "",
    date: dateTime[0],
    group: "",
    exerciseName: "",
    weight: 0,
    sets: 4,
    reps: 10,
  });
  const [history, setHistory] = useState([]);
  return (
    <>
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
