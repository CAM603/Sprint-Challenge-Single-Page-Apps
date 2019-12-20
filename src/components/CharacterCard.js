import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


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
