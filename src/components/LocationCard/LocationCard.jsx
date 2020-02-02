import React from "react";
import { Link } from "react-router-dom";
import "../CharacterCard/card.css";

export default function LocationCard(props) {
  const { dimension, name, id } = props.data;
  return (
    <div className="card">
      <h5>{name}</h5>
      <p>{dimension}</p>
      <Link className="moreInfo" to={`/locations/${id}`}>
        More about {name}
      </Link>
    </div>
  );
}