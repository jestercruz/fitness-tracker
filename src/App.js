import "./stylesheets/App.css";
import Title from "./components/Title";
// import AddWorkout from "./views/AddWorkout";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddWorkout from "./views/AddWorkout";
import Navigation from "./views/Navigation";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Title />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
