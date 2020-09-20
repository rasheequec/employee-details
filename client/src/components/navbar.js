import React from 'react'
import { Navbar, Container, Form, Button } from 'react-bootstrap';

const NavBar = () => {
  const logoutHandle = e => {
    e.preventDefault()
  }

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">MERN APPLICATION</Navbar.Brand>
      </Container>
      <Form inline>
        <Button variant="outline-info" onClick={logoutHandle}>Logout</Button>
      </Form>
    </Navbar>
  )
}

export default NavBar