import React from 'react';
import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';
import './EventCard.css';
import { Link } from 'react-router-dom';


export default function EventCard(props) 
{
  return (

 <Col xl={4} md={5} sm={5} xs={8} className='mx-auto my-3'>
     <Link to = {`/eventdetails/${props.category}/${props.eventName}`} style={{ textDecoration: 'none' }}>
        <Row>
            <Col xl={10} md={10} className='event mx-auto'>
            <div className="regEventImage"><img src={props.poster}  onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/dvhrzmkwd/image/upload/v1643788204/Unknown39825/eesglbsknedo9vvnclkx.jpg";
            }} ></img>
            <p className="regEventName"><h3>{props.eventName}</h3></p>
            <p>{format(new Date(props.startTime), "PPp")}</p>
            <p style={{color: "Highlight"}}>Know More</p>
            </div>
            </Col>
        </Row>
        </Link>
    </Col>      
    
  );
}
