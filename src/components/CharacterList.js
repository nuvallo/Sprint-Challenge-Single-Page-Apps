import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          name={character.name}
          species={character.species}
          origin={character.origin.name}
          status={character.status}
          image={character.image}
        />
      ))}
    </section>
  );
}
