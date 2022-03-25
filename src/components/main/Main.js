import React from 'react';
import '../main/Main.css'
import gear1 from "../assets/gear1.png";
import gear2 from "../assets/gear2.png";
import gear3 from "../assets/gear3.png";
import TimelineHome from '../TimeLineHome';
import { Link } from 'react-router-dom';
import Footer from '../extras/Footer';
function Main() {
  return (
    <div id="header-main" className="header-main">
      {/* <img src={gear1} className="gear1" alt="" />
      <img src={gear2} className="gear2" alt="" />
      <img src={gear3} className="gear3" alt="" /> */}
      <div className="head-main text_shadow">TECHSPARDHA</div>
      <div className="time">"Unravelling Dimensions"</div>
     
      <div className="buttons">
        <div className="learn">
          <Link to="/about  "><span style={{color:"cyan"}}>Learn More</span></Link>
        </div>
      </div>
      <TimelineHome />
      
    </div>
  );
}

export default Main;