import React from "react";
import { Link } from "react-router-dom";
import "../CharacterCard/card.css";

export default function EpisodeCard(props) {
  const { episode, name, id, air_date } = props.data;
  return (
    <div className="card">
      <h3>{episode}</h3>
      <p>
        {name} <br /> {air_date}
      </p>
      <Link to={`/episodes/${id}`}>More about {episode}</Link>
    </div>
  );
}
