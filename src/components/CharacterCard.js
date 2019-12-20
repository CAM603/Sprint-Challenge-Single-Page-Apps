import React from "react";

// Styles
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard({character}) {
  
  return (
    <div className="characterCard">
      <Card>
        <CardImg src={character.image} />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardText>Status: {character.status}</CardText>
          <CardText>Species: {character.species}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}
