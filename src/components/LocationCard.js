import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

export default function LocationCard({ location }) {
  return (
    <div>
      <Card>
        <CardHeader>{location.name}</CardHeader>
        <CardBody>
          <CardText>{location.type}</CardText>
          <CardText>{location.dimension}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
