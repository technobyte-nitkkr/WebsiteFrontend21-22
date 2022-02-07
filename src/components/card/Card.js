import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import "./card.css"
import devPhoto from "../assets/dev.png"


const Card = ({name, role}) => {
  return (
    <div class="cardContainer">
        <img class="devPhoto" src={devPhoto} />
        <span class = "details">
            <span style= {{color: "#C559EB"}}> {name} </span> <br />
            <span style={{marginTop: "5px"}}> {role} </span>  <br />
            <div><span style = {{fontSize: "35px", marginTop: "5px"}}> <FaGithub /> </span>  
            <span style = {{fontSize: "35px"}}> <FaLinkedin /> </span>  <br /></div>
        </span>
    </div>
  );
};

export default Card;
 