import React from "react";
import Offers from "./layout/Offers";
import Header from "./layout/Header";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Offers />
    </Router>
  );
}

export default App;
