import React from 'react'
import { Link } from 'react-router-dom';
import "./CardsCat.css"

function CardsCat(props) {
  const category = props.name;
    return (
      <div className='bodycard'>
        <Link to={`/events/${category}` }>
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
        <h3>Know More</h3> 
        
      </div>
    
    </div>
    </Link>
    </div>
  
        
    );
}

export default CardsCat