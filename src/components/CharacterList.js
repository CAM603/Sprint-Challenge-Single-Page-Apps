import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState('');

  const searchCharacter = (character) => {
    setCharacter(character);
  }

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${character}`)
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => console.log(error))
  }, [character]);

  return (
    <>
      <SearchForm
      searchCharacter={searchCharacter}
      />
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
    </>
  );
}
