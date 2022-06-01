import "../stylesheets/Home.css";
import Title from "../components/Title";
// import summaryData from "../data/summary.json";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [summaryData, setSummaryData] = useState();
  useEffect(() => {
    getSummaryData();
  }, []);

  const getSummaryData = async () => {
    const dataLoading = await axios.post("/summary", {
      id: 1234,
    });
    setSummaryData(dataLoading.data);
  };

  console.log("From home" + summaryData);
  console.log(summaryData && typeof summaryData.summary);
  return (
    summaryData && (
      <>
        <Title title="Fitness Tracker" icon />
        <div className="home-container">
          <h3>{`Welcome Back, ${summaryData.user}`}</h3>
          <section className="home-section">
            <header className="section-header">Summary</header>
            <p>{`Workouts completed this week: ${summaryData.summary.workoutsCompleted}`}</p>
            <p>{`Most frequent exercise: ${summaryData.summary.frequentExercise}`}</p>
          </section>
          <section className="home-section">
            <header className="section-header">This week's challenge</header>
            <p>{`${summaryData.challenge}`}</p>
          </section>
          <section className="home-section">
            <header className="section-header">Recent Workout</header>
            {summaryData.recentWorkouts.map((el) => (
              <p>{el}</p>
            ))}
          </section>
        </div>
      </>
    )
  );
};

export default Home;
