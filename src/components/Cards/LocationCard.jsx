import React from "react";
import "./card.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function LocationCard(props) {
  const { name, id } = props.data;
  return (
    <Card className="epCard">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <LinkContainer to={`/locations/${id}`}>
          <Button className="mt-auto" variant="outline-secondary">
            Read more
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
