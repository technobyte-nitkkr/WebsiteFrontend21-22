import React from 'react';
import '../navbar/Nav.css';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
    <div className="logo" style ={{zIndex: "2"}}>
        <img src={logo} alt="" />
    </div>
    <div className='navCont'>
      <div className="menubutton">
        <input type="checkbox" onClick={renderSidebar} id="check" />
        <label htmlFor="check">
          <div className="menubuttonBurger">
          </div>
          <div className="closetext">
            Close  X
          </div>
        </label>
      </div>
      <div className="sidebar">
        <div className='nav'>
          <Link to="/" className='nav-comp'>Home</Link>
          <Link to="/" className='nav-comp'>About Us</Link>
          <Link to="/" className='nav-comp'>Events</Link>
          <Link to="/" className='nav-comp'>Register</Link>
        </div>
      </div>
    </div>
    </>
    
  );
}
let check = 0;
function renderSidebar() {
  if (check == 0) {
    document.getElementsByClassName('sidebar')[0].style.right = "-20px";
    document.getElementsByClassName('closetext')[0].style.display = "block";
    document.getElementsByClassName('menubuttonBurger')[0].style.display = "none";
    check = 1;
  }
  else {
    document.getElementsByClassName('sidebar')[0].style.right = "-415px";
    document.getElementsByClassName('closetext')[0].style.display = "none";
    document.getElementsByClassName('menubuttonBurger')[0].style.display = "block";
    check = 0;
  }
}

export default Nav;
