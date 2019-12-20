import React from "react";

export default function CharacterCard({character}) {
  
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} />
      <h2>Status: {character.status}</h2>
      <h2>Species: {character.species}</h2>
    </div>
  )
}
