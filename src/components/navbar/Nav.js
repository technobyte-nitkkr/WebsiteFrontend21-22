import React, { useContext } from "react";
import "../navbar/Nav.css";
import logo from "../assets/logo.png";

import { GoogleLogout } from "react-google-login";
import { withRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Keys from "../../config.keys";

import { LOGOUT } from "../../Store/Types";

import Store from "../../Store/Store";
import LoginButton from "../extras/LoginButton";

function Nav() {
  const [{ isAuth, authLoading, user }, dispatch] = useContext(Store);
  const navigate = useNavigate();
  const logout = () => {
    // props.history.push("/");

    navigate("/");
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <div className="navOuter">
      <div className="logo" style={{ zIndex: "2" }}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navCont">
        <div className="menubutton">
          <input type="checkbox" onClick={renderSidebar} id="check" />
          <label htmlFor="check">
            <div className="menubuttonBurger"></div>
            
          </label>
        </div>
        <div className="sidebar">
          <div className="nav">
            <div onClick={renderSidebar} className="nav-comp closetext">
              Close X
            </div>
            <Link to="/" onClick={renderSidebar} className="nav-comp">
              Home
            </Link>
            <Link to="/categories" onClick={renderSidebar} className="nav-comp">
              Events
            </Link>
            <Link to="/sponsors" onClick={renderSidebar} className="nav-comp">
              Sponsors
            </Link>
            <Link to="/lectures" onClick={renderSidebar} className="nav-comp">
              Lectures
            </Link>
            <Link to="/Team" onClick={renderSidebar} className="nav-comp">
              Team Tech
            </Link>
            <Link to="/devs" onClick={renderSidebar} className="nav-comp">
              Developers
            </Link>
            <Link
              to="/testimonial"
              onClick={renderSidebar}
              className="nav-comp"
            >
              Testimonial
            </Link>

            {isAuth ? (
              <>
                <div className="nav-comp " style={{ float: "right" }}>
                  <Link to="/user" onClick={renderSidebar}>
                    
                      <i className="fa fa-user  " aria-hidden="true"></i>
                    
                  </Link>
                  <GoogleLogout
                    clientId={Keys.OAUTH_CLIENT_ID}
                    render={(renderProps) => (
                      <p
                        className="login-button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        
                      >
                        Logout{" "}
                        <i
                          class="fas fa-sign-out-alt"
                          
                        ></i>
                      </p>
                    )}
                    onLogoutSuccess={logout}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </>
            ) : (
              <div className="nav-comp">
                <LoginButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

let check = 0;
function renderSidebar() {
  if (check == 0) {
    document.getElementsByClassName("sidebar")[0].style.right = "-30px";
    
    document.getElementsByClassName("menubuttonBurger")[0].style.display =
      "none";
    check = 1;
  } else {
    document.getElementsByClassName("sidebar")[0].style.right = "-415px";
    
    document.getElementsByClassName("menubuttonBurger")[0].style.display =
      "block";
    check = 0;
  }
}

export default Nav;
