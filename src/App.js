import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./animations/navbar";
import Contact from "./Pages/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Developers from "./Pages/developers";
import Home from "./components/Home";
import Team from "./Pages/team";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
