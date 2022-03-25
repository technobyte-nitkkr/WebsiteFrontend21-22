import React from 'react';
import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';
import './EventCard.css';
import { Link } from 'react-router-dom';

export default function EventCard(props) 
{
  return (

 <Col style={{paddingLeft: "40px", paddingRight: "40px"}} xl={4} md={4} sm={6} xs={12} className='mx-auto my-3'>
     <Link to = {`/eventdetails/${props.category}/${props.eventName}`} style={{ textDecoration: 'none' }}>
        <Row>
            <Col xl={10} md={10} className='event mx-auto'>
            <div className="regEventImage"><img src={props.poster}  onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/dvhrzmkwd/image/upload/v1643788204/Unknown39825/eesglbsknedo9vvnclkx.jpg";
            }} ></img>
            <p className="regEventName"><h3>{props.eventName}</h3></p>
            <p className="Date">{format(new Date(props.startTime), "PPp")}</p>
            <p style={{color: "grey", fontSize: "18px"}}>Know More</p>
            </div>
            </Col>
        </Row>
        </Link>
    </Col>      
  );
}
