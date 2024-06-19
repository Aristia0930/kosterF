import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Company Dashboard</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;