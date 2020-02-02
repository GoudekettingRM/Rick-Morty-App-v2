import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function CharacterCard(props) {
  const { image, name, id } = props.data;
  return (
    <div className="card">
      <img className="cardImg" src={image} alt={name} />
      <h5>{name}</h5>
      <Link className="moreInfo" to={`/characters/${id}`}>
        More about {name}
      </Link>
    </div>
  );
}
