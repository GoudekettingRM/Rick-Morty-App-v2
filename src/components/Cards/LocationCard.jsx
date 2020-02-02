import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function LocationCard(props) {
  const { dimension, name, id } = props.data;
  return (
    <div className="card">
      <h5>{name}</h5>
      <Link className="moreInfo" to={`/locations/${id}`}>
        More about {name}
      </Link>
    </div>
  );
}
