import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Developers from "./Pages/developers";
import Home from "./Pages/home/Home";
import Team from "./Pages/team/team";
import Category from "./Pages/category/Category";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
        
          </Route>
          <Route path="/categories" element ={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
