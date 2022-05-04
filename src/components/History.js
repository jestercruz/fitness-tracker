const History = ({ history }) => {
  return history.map((el) => (
    <h3>{`${el.exercise} ${el.weight} ${el.sets} ${el.reps}`}</h3>
  ));
};

export default History;
