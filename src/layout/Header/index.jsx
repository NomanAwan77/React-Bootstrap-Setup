import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./style.scss";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Your Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Form.Check
              type="switch"
              id="theme-switch"
              label={isDarkTheme ? "🌙" : "☀️"}
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="ms-3"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
