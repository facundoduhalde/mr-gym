import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from './CartWidget'
import brandLogo from '../assets/img/logo-01.png'


function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={brandLogo}></img></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>
    )

};

export default NavBar;