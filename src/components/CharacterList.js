import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/Search">
        <Button>Search</Button>
      </Link>
      {character.map(ind => (
        <CharacterCard
          key={ind.id}
          name={ind.name}
          species={ind.species}
          status={ind.status}
        />
      ))}
    </section>
  );
}
