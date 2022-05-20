import "./stylesheets/App.css";
import Title from "./components/Title";
// import AddWorkout from "./views/AddWorkout";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddWorkout from "./views/AddWorkout";
import Navigation from "./views/Navigation";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Title />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addworkout" element={<AddWorkout />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
