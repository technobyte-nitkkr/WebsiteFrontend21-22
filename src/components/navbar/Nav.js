import React from 'react';
import '../navbar/Nav.css'
function Nav() {
  return (
    <div>

<div className="menubutton">
        <input type="checkbox" onClick={renderSidebar}  id="check" />
        <label htmlFor="check">
          <div className="menubuttonBurger">

          </div>
          <div className="closetext">
            Close  X
          </div>
        </label>
      </div>

      <div className="iconCircle">

      </div>
     


      <div className="sidebar">

      
        <div className='nav'>
          <div className='nav-comp'>Home</div>
          <div className='nav-comp'>About Us</div>
          <div className='nav-comp'>Events</div>
          <div className='nav-comp'>Register</div>


        </div>
      </div>
    </div>
  );
}

let check=0;
function renderSidebar()
{
  if(check==0)
  {
    document.getElementsByClassName('sidebar')[0].style.right="-20px";
    document.getElementsByClassName('closetext')[0].style.display="block";
    document.getElementsByClassName('menubuttonBurger')[0].style.display="none";
    check=1;
  }
  else
  {
    document.getElementsByClassName('sidebar')[0].style.right="-415px";
    document.getElementsByClassName('closetext')[0].style.display="none";
    document.getElementsByClassName('menubuttonBurger')[0].style.display="block";
    check=0;
  }
  
}

export default Nav;
