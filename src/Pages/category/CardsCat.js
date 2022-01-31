import React from 'react'
import "./CardsCat.css"

function CardsCat(props) {
    return (
      <div className='bodycard'>
      <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img className="img" src={props.img}></img>
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{props.name}</h3>
        
      </div>
    
    </div>
    </div>
  
        
    );
}

export default CardsCat