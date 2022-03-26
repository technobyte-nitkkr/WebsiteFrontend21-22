import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import "./CardsCat.css";

import { Col } from "react-bootstrap";

function CardsCat(props) {
  const category = props.name;
  
  return (
    <Col Col xl={4} md={4} sm={6} xs={12} >
    
      <Link to={`/events/${category}`}>
      <Card className="cardOuter">
        <CardMedia className="cardImage" image={props.img} />
        <CardContent className="cardBody" >
          <div className="cateName">{props.name}</div>
          <Button className="Extra">
            Know More 
          </Button>
        </CardContent>
      </Card>
      </Link>
      
    </Col>
  );
}

export default CardsCat;
