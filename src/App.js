import React, { useState } from "react";
import Title from "./components/Title";
import ExerciseInput from "./components/ExerciseInput";
import History from "./components/History";

const App = () => {
  const [exercise, setExercise] = useState({
    exercise: "",
    weight: "",
    sets: "",
    reps: "",
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
      <History history={history} />
    </>
  );
};

export default App;
