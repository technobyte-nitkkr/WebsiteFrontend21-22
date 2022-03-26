import React from 'react';
import '../main/Main.css'

import TimelineHome from '../TimeLineHome';
import { Link } from 'react-router-dom';
import Footer from '../extras/Footer';
import KommunicateChat from '../../chat';
function Main() {
  return (
    <>
    <div className="earth"></div>
    <div id="header-main" className="header-main">
      
      <div className="head-main text_shadow">TECHSPARDHA</div>
      <div className="time">Unravelling Dimensions</div>
     
      <div className="buttons">
        <div className="learn">
          <Link to="/about  "><span style={{color:"#4890ff"}}>Learn More</span></Link>
        </div>
      </div>
      <TimelineHome />
      <KommunicateChat/>
    </div>
    </>
  );
}

export default Main;