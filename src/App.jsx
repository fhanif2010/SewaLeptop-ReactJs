import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Routers from "./routers/Routers";

const App = () => {
  return (
    <Router>
      <Routers />
    </Router>
  )
}

export default App;