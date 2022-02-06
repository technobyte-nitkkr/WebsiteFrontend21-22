import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import "./card.css"
const Card = ({name, role}) => {
  return (
    <div class="cardContainer">
        
        <img class="devPhoto" src={"https://media.istockphoto.com/photos/young-man-portrait-picture-id1313304644?k=20&m=1313304644&s=612x612&w=0&h=ZGEi9fbI2mXmW9W4kim46duNcYl4T-WBMBonxssXgcI="} />
        
        <div class = "details">
            <span style= {{color: "#C559EB"}}> {name} </span> <br />
            {role} <br />
            <span style = {{fontSize: "40px"}}> <FaGithub /> </span>  
            <span style = {{fontSize: "40px"}}> <FaLinkedin /> </span>  <br />
        </div>
        <div class = "social-icons">
            <span class="icon">
                
            </span>
            <span class="icon">
                
            </span>
        </div>
    </div>
  );
};

export default Card;
 