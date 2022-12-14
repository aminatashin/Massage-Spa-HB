import React from 'react'
import {Container,Navbar,Nav,Form,FormControl,Button,Carousel, Row, Col} from "react-bootstrap"
import pic1 from "../assesments/1.jpg"
import pic2 from "../assesments/2.jpg"
import pic3 from "../assesments/3.jpg"
import CruselHome from './Crusel'
import "./home.css"
const Home = () => {
  return (

      <>
           <CruselHome/>     

            <Container className='mt-350px'>
           <Row>
            <Col>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
            </Col>
           </Row>
         </Container>

</>

  )
}

export default Home