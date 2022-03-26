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
      <div className="cateogryWrapper">
      <Link to={`/events/${category}`}>
      <div className="cardOuter">
          <div className="cardImage">
              <img src={props.img} alt="" width="100%" height="auto" />
          </div>
        <div className="cardTop">
          <div className="cardBody">
            <div className="cateName">
              {props.name}
            </div>
              <Button className="Extra">
                Know More
              </Button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default CardsCat;
