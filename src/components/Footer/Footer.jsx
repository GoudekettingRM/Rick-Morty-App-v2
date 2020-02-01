import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer mt-auto py-3 bg-light text-dark">
      <Container>
        <Row>
          <Col>
            <div className="container">
              © 2020. All Rights Reserved. <br />
              RMG & Glootie.
            </div>
          </Col>
          <Col>
            <h6>More information</h6>
            <Link className="infoLink" to="/about">
              About
            </Link>
            <Link className="infoLink" to="/contact">
              Contact
            </Link>
            <Link className="infoLink" to="/support">
              Support
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
