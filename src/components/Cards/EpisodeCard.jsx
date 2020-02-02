import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function EpisodeCard(props) {
  const { episode, name, id, air_date } = props.data;
  return (
    <div className="card">
      <h5>{name}</h5>
      <p>
        {episode} <br /> {air_date}
      </p>
      <Link className="moreInfo" to={`/episodes/${id}`}>
        More about {episode}
      </Link>
    </div>
  );
}
