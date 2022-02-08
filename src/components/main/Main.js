import React from 'react';
import '../main/Main.css'
import gear1 from "../assets/gear1.png";
import gear2 from "../assets/gear2.png";
import gear3 from "../assets/gear3.png";
import { useEffect } from 'react/cjs/react.production.min';
function Main() {
  return (
    <div id='header-main' className='header-main'>
      {/* <img src={gear1} className="gear1" alt="" /> */}
      {/* <img src={gear2} className="gear2" alt="" /> */}
      {/* <img src={gear3} className="gear3" alt="" /> */}
      <div className='head-main'>TECHSPARDHA</div>
      <div className='time'>24th - 28th February</div>
      <div className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</div>
      <div className='buttons'>
        <div className='regs'>Register</div>
        <div className='learn'>Learn More</div>
      </div>
    </div>
  );
}

export default Main;