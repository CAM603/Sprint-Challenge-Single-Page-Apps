import React from "react";
import { Link } from 'react-router-dom';

// Styles
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard({character}) {
  
  const id = character.id;
  return (
    <div className="characterCard">
      <Card>
        <CardImg src={character.image} />
        <CardBody>
          <Link to={`/characters/${id}`}>
            <CardTitle>{character.name}</CardTitle>
          </Link>
          <CardText>Status: {character.status}</CardText>
          <CardText>Species: {character.species}</CardText>
          <CardText>Origin: {character.origin.name}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}
