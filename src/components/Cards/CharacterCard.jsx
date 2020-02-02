import React from "react";
import "./card.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function CharacterCard(props) {
  const { image, name, id } = props.data;
  return (
    <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <LinkContainer to={`/characters/${id}`}>
          <Button className="mt-auto" variant="outline-secondary">
            More about {name}
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
