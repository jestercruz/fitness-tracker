const History = ({ history }) => {
  return history?.length ? (
    <>
      {history.map((el) => {
        return (
          <div>
            <h4>{el.group}</h4>
            <p>{el.exerciseName}</p>
            <p>
              Weight: {el.weight} Sets: {el.sets} Reps: {el.reps}
            </p>
          </div>
        );
      })}
    </>
  ) : (
    <></>
  );
};

export default History;
