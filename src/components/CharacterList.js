import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        setCharacter(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Search">
        <button>Search</button>
      </Link>
      {character.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          species={character.species}
          status={character.status}
        />
      ))}
    </section>
  );
}
