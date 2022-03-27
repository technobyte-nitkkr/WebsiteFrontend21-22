import React from "react";
import { Link } from "react-router-dom";

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
              <button className="Extra">
                Know More
              </button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default CardsCat;
