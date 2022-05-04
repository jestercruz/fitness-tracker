const ExerciseInput = ({ exercise, setExercise, setHistory, history }) => {
  return (
    <>
      <input
        className="exercise"
        type="text"
        onChange={(e) => {
          setExercise({ ...exercise, exercise: e.target.value });
        }}
        value={exercise.exercise}
      />
      <input
        className="weight"
        type="text"
        onChange={(e) => {
          setExercise({ ...exercise, weight: e.target.value });
        }}
        value={exercise.weight}
      />
      <input
        className="sets"
        type="text"
        onChange={(e) => {
          setExercise({ ...exercise, sets: e.target.value });
        }}
        value={exercise.sets}
      />
      <input
        className="reps"
        type="text"
        onChange={(e) => {
          setExercise({ ...exercise, reps: e.target.value });
        }}
        value={exercise.reps}
      />
      <button onClick={() => setHistory([...history, exercise])}>+</button>
    </>
  );
};

export default ExerciseInput;
