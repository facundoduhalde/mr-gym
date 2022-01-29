import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import brandLogo from "../assets/img/logo-01.png";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link>
          <img onClick={() => navigate("/")} src={brandLogo} alt="Mr. Gym"></img>
        </Nav.Link>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
          <Nav.Link onClick={() => navigate("/category/Colchonetas")}>
            Colchonetas
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/category/Peso")}>Peso</Nav.Link>
          <Nav.Link onClick={() => navigate("/category/Combos")}>
            Combos
          </Nav.Link>
        </Nav>
        <CartWidget style={{ alignSelf: "flex-end" }} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
