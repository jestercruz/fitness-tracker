import Title from "../components/Title";
import "../stylesheets/History.css";
import getHistoryData from "../data/history.json";
import { useState, useEffect } from "react";
import Input from "../components/Input";

const getHistory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getHistoryData);
    }, 1500);
  });
};

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBy, setSearchBy] = useState();
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setHistoryData(await getHistory());
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <Title title="Past Workouts" icon />
      <div>
        <Input
          placeholder="search for..."
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
          value={searchBy}
        />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : historyData?.length ? (
          historyData
            .filter((el) => {
              if (searchBy) {
                return (
                  el?.group?.toLowerCase().includes(searchBy?.toLowerCase()) ||
                  el?.exerciseName
                    ?.toLowerCase()
                    .includes(searchBy?.toLowerCase())
                );
              } else {
                return el;
              }
            })
            .map((el) => {
              return (
                <div className="history-item" key={el.id}>
                  <header>
                    <h4>{el.exerciseName}</h4>
                    <h4>{el.date}</h4>
                  </header>
                  <p>{el.group}</p>
                  <p className="numbers">
                    <span>Weight: {el.weight} </span>
                    <span>Sets: {el.sets} </span>
                    <span>Reps: {el.reps}</span>
                  </p>
                </div>
              );
            })
        ) : (
          <div>No past workouts have been recorded.</div>
        )}
      </div>
    </>
  );
};

export default History;
