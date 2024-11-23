import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const Dashboard = () => {
  return (
    <Container className="dashboard-container">
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
