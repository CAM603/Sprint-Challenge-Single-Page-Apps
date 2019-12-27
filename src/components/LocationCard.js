import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function LocationCard({ location }) {
  const id = location.id
  return (
    <div className="location-card">
      <Card>
        <Link to={`/locations/${id}`}>
          <CardHeader>Location: {location.name}</CardHeader>
        </Link>
        <CardBody>
          <CardText>Type: {location.type}</CardText>
          <CardText>Dimension: {location.dimension}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
