import React, { useState } from "react";
import Title from "./components/Title";
import ExerciseInput from "./components/ExerciseInput";
import DisplayHistory from "./components/DisplayHistory";

const App = () => {
  const [exercise, setExercise] = useState({
    exercise: "",
    weight: "",
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
