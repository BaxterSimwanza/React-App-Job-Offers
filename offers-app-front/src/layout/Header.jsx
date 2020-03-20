import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <h1>Company Name</h1>
        <h3>Slogan here</h3>
        <Link to={"https://google.com"} target="_blank">
          {"Liste des offres"}
        </Link>
        {" "}
        <Link to={"https://yahoo.com"} target="_blank">
          {"Mon profil"}
        </Link>
      </header>
    </div>
  );
}
