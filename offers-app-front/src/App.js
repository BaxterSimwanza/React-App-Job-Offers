import React from "react";
import Header from "./layout/Header";
import Body from "./layout/Body";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
