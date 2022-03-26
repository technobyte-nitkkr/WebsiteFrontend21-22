import React from 'react'
import Background from '../../components/Background/Background'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../../images/about_carousal/1.jpg';
import img2 from '../../images/about_carousal/2.jpg';
import img3 from '../../images/about_carousal/3.jpg';
import img4 from '../../images/about_carousal/4.jpg';
import img5 from '../../images/about_carousal/5.jpg';
import { Carousel, } from "react-bootstrap";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";

import './About.css';  

const About = () => {
    return (
        
        <div style={{margin: "20px", alignItems: "center"}}>
            <Background />
           <div style={{color: "white", textAlign: "center", fontSize: "6vh"}}>
               About Techspardha
           </div>
           <div style={{color: "#4890ff", textAlign: "center", fontSize: "3vh", marginTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
               <p>Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition.Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops.</p>
           </div>
           <div style={{color: "white", textAlign: "left", fontSize: "4vh", paddingLeft: "50px"}}>
               Some glimpses from the past...
           </div>
           <div style={{margin: "10px", padding: "20px"}}>
               <div className="aboutscroll">
           <Carousel>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={img1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={img2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={img3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={img4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={img5} />
          </Carousel.Item>
        </Carousel>
        </div>
               <div style={{margin: "30px"}}>
                   <div style={{color: "white", textAlign: "left", fontSize: "5vh", margin: "20px"}} >
                       Checkout Techspardha 18 Aftermovie : 
                   </div>
                   <div>
                   <div className="video-responsive">
                   <iframe width="360" height="115" 
                   src="https://www.youtube.com/embed/NyHq7Pp1PuY" 
                   title="YouTube video player" 
                   frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowfullscreen></iframe>
                  </div>
                   </div>
               </div>


               <div style={{padding: "20px"}}>
               <div style={{color: "white", textAlign: "center", fontSize: "5vh"}}>
                  Follow Our Social Handles
              </div>

               <div style={{textAlign: "center", padding: "20px"}}>

               <a href="https://www.youtube.com/c/TechspardhaNITKuruksehtra"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>   
                <a href="https://www.facebook.com/techspardha.nitkkr/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/tsnitkkr/?hl=en"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/company/techspardha-nit-kurukshetra/?originalSubdomain=in"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
               </div>
               
           
           </div>
           </div>

        </div>
    )
}

export default About
