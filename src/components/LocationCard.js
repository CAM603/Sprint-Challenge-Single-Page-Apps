import React from "react";

export default function LocationCard({ location }) {
  return (
    <div>
      <h1>{location.name}</h1>
      <h2>{location.type}</h2>
      <h2>{location.dimension}</h2>
    </div>
  );
}
