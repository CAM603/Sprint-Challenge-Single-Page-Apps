import React, { useEffect, useState } from "react";
import axios from 'axios';

//Components
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  // Set state for loading
  const [loading, setLoading] = useState(true)
  // Set state for character api
  const [characters, setCharacters] = useState([]);
  // Set state for specific character
  const [character, setCharacter] = useState('');
  //Set state for next page
  const [nextPage, setNextPage] = useState()

  // Function to set specific character
  const searchCharacter = (character) => {
    setCharacter(character);
  }

  useEffect(() => {

    setLoading(true)
    let cancel

    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${character}`, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(response => {
      console.log(response)
      setLoading(false)
      setCharacters(response.data.results)
    })
    .catch(error => console.log(error))

    // Cleanup function
    return () => cancel()

  }, [character]);

  if (loading) return 'Loading...'

  return (

    <div>
      <h1 className="title">Characters</h1>
      <SearchForm
      searchCharacter={searchCharacter}
      />
      <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
    </div>
  );
}
