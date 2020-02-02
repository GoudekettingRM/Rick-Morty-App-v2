import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function EpisodeCard(props) {
  const { episode, name, id, air_date } = props.data;
  return (
    <Card className="epCard">
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ color: "maroon" }}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{episode}</Card.Subtitle>
        <Card.Text>Aired: {air_date}</Card.Text>
        <LinkContainer to={`/episodes/${id}`}>
          <Button className="mt-auto" variant="outline-secondary">
            More about {name}
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
