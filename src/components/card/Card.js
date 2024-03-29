import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import "./card.css"

const Card = ({name, year, img, git,insta,linkedin}) => {
  return (
    <div class="cardContainer">
      <img class="devPhoto" src={img} />
      <div class="details">
        <span style={{ color: "#4890ff" }}> {name} </span> <br />
        <span style={{ marginTop: "5px" }}> {year} </span> <br />
        <div>
          <a href={git}>
            <span style={{ fontSize: "35px", marginTop: "5px" }}>
              {" "}
              <FaGithub />{" "}
            </span>{" "}
          </a>
          <a href={linkedin}>
            <span style={{ fontSize: "35px" }}>
              {" "}
              <FaLinkedin />{" "}
            </span>{" "}
          </a>
          <a href={insta}>
            <span style={{ fontSize: "35px" }}>
              {" "}
              <FaInstagram />{" "}
            </span>
          </a>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
 