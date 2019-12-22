import React from "react";

// Styles
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function LocationCard({ location }) {
  
  return (
    <div className="location-card">
      <Card>
        <CardHeader>Location: {location.name}</CardHeader>
        <CardBody>
          <CardText>Type: {location.type}</CardText>
          <CardText>Dimension: {location.dimension}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
