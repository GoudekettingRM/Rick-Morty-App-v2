import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function CharacterCard(props) {
  const { image, name, id } = props.data;
  return (
    <Card style={{ width: "12rem", margin: "0 auto" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <LinkContainer to={`/characters/${id}`}>
          <Button variant="outline-secondary">More about {name}</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
