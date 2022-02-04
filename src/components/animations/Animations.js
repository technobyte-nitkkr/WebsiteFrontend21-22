import React from 'react';
import gear1 from "../assets/gear1.png";
import gear2 from "../assets/gear2.png";
import gear3 from "../assets/gear3.png";
import '../animations/Animations.css'

function Animations() {
  return (<div>
      <img src={gear1} className="gear1" alt="" />
        <img src={gear2} className="gear2" alt="" />
        <img src={gear3} className="gear3" alt="" />
        <div className='top-circle'>
        </div>
        <div className='bottom-circle'>
      </div>
  </div>);
}

export default Animations;
