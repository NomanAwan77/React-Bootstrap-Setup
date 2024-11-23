import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const PageNotFound = () => {
  return (
    <Container className="page-not-found">
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <Button as={Link} to="/" variant="primary">
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
