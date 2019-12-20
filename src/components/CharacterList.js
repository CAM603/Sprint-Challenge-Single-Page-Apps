import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
