import Title from "../components/Title";
import "../stylesheets/History.css";

const History = ({ history }) => {
  return (
    <>
      <Title title="Past Workouts" />
      <div>
        {history?.length ? (
          history.map((el) => {
            return (
              <div className="history-item" key={el.id}>
                <header>
                  <h4>{el.group}</h4>
                  <h4>{el.date}</h4>
                </header>
                <p>{el.exerciseName}</p>
                <p className="numbers">
                  <span>Weight: {el.weight} </span>
                  <span>Sets: {el.sets} </span>
                  <span>Reps: {el.reps}</span>
                </p>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default History;
