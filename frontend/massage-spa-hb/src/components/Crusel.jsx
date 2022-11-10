import React from 'react'
import {Container,Navbar,Nav,Form,FormControl,Button,Carousel, Row, Col} from "react-bootstrap"
import pic1 from "../assesments/1.jpg"
import pic2 from "../assesments/2.jpg"
import pic3 from "../assesments/3.jpg"
import "./home.css"
const CruselHome = () => {
  return (
    <Carousel fade className='p-absolute' >
  <Carousel.Item >
    <img
      className=" w-100 h-20"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Full Body Massage</h3>
      <p>Relaxation,Swedish,Deep tissue</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100 h-50 "
      src={pic3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Hot Stone Massage</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100 h-50 "
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Place to Relax!</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CruselHome