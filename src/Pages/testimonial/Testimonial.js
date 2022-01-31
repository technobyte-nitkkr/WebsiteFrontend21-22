import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import reviews from "./Testimonial.json";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import './Testimonial.scss';


const Testimonial = () => {
  return (
    <>
    {/* <div className='heading'>
      TESTIMONIALS
    </div> */}
    
    <div class="cards">
      <div className='heading'>
        TESTIMONIALS
      </div>
      <div className='sub-heading'>
        Let's read what students are saying about this fest...
      </div>
      <Container style={{width:'95%'}}>
        <Row>
      {reviews.data.map((item,index)=>(
            
              
            <Col xl={6}>
              <div class="cardBox">
            <div class="testimonial">
            <div class="pic">
            <img src={item.imageUrl} />
            </div>
            <h3 class="title">{item.name}</h3>
            <span class="post"><p>{item.course} ( {item.branch} ), {item.year} year</p></span>
            <p class="description">
            {item.review}
            </p>
            </div>
            </div>
            </Col>
            
            
      ))}

      </Row>
      </Container>
  </div>
  </>
  )
}

export default Testimonial
