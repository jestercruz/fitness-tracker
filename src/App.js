import "./stylesheets/App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddWorkout from "./views/AddWorkout";
import Navigation from "./views/Navigation";
import Login from "./views/Login";
import Signup from "./views/Signup";
import History from "./views/History";
import getHistoryData from "./data/history.json";
import { useState, useEffect } from "react";

const getHistory = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getHistoryData);
    }, 1500);
  });

const App = () => {
  useEffect(() => {
    (async () => {
      setHistoryData(await getHistory());
    })();
  }, []);

  const [historyData, setHistoryData] = useState([]);
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History history={historyData} />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
