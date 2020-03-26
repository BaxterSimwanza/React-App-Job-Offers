import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <h1>Company Name</h1>
        <h3>Slogan here</h3>
        <Link to={"/offers"} target="_blank">
          {"Liste des offres"}
        </Link>
        {" "}
        <Link to={"/profil"} target="_blank">
          {"Mon profil"}
        </Link>
      </header>
    </div>
  );
}
