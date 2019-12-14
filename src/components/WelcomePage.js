import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/Characters">
          <Button className="btn">Characters</Button>
        </Link>
        <Link to="/Search">
          <Button className="btn">Search</Button>
        </Link>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </main>
  );
}
