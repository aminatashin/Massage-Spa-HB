import React from 'react'
import {Container,Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
const MyNavbar = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">HB Spa</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    
  </>
  )
}

export default MyNavbar