import React, { useState } from "react";
import Title from "./components/Title";
import ExerciseInput from "./components/ExerciseInput";
import DisplayHistory from "./components/DisplayHistory";
import "./stylesheets/App.css";

const App = () => {
  const dateTime = new Date(Date.now()).toISOString().split("T");

  const [exercise, setExercise] = useState({
    id: "",
    date: dateTime[0],
    group: "",
    exercise: "",
    weight: 0,
    sets: 4,
    reps: 10,
  });
  const [history, setHistory] = useState([]);
  return (
    <>
      <Title />
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

export default App;
