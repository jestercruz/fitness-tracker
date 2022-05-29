import "./stylesheets/App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddWorkout from "./views/AddWorkout";
import Navigation from "./views/Navigation";
import Login from "./views/Login";
import Signup from "./views/Signup";
import History from "./views/History";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
