import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function CharacterCard(props) {
  const { image, name, species, originPlanet, id } = props.data;
  return (
    <div className="card">
      <img className="cardImg" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{species} </p>
      <p>{originPlanet}</p>
      <Link to={`/characters/${id}`}>More about this character</Link>
    </div>
  );
}
