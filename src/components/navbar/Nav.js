import React, { useContext } from "react";
import "../navbar/Nav.css";
import logo from "../assets/logo.png";

import { GoogleLogout } from "react-google-login";
import { withRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Keys from "../../config.keys";

import { LOGOUT } from "../../Store/Types";
import LoginButton from "../LoginButton";
import Store from "../../Store/Store";

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
    <>
      <div className="logo" style={{ zIndex: "2" }}>
        <img src={logo} alt="" />
      </div>
      <div className="navCont">
        <div className="menubutton">
          <input type="checkbox" onClick={renderSidebar} id="check" />
          <label htmlFor="check">
            <div className="menubuttonBurger"></div>
            <div className="closetext">Close X</div>
          </label>
        </div>
        <div className="sidebar">
          <div className="nav">
            <Link to="/" className="nav-comp">
              Home
            </Link>
            <Link to="/categories" className="nav-comp">
              Events
            </Link>
            <Link to="/sponsors" className="nav-comp">
              Sponsors
            </Link>
            <Link to="/lectures" className="nav-comp">
              Lectures
            </Link>
            <Link to="/Team" className="nav-comp">
              Team Tech
            </Link>
            <Link to="/devs" className="nav-comp">
              Developers
            </Link>
            <Link to="/testimonial" className="nav-comp">
              Testimonial
            </Link>

            {isAuth ? (
              <>
                <div className="nav-comp profile" style={{ float: "right" }}>
                  <Link to="/user">
                    <div className="mr-2 hover">
                      <i className="fa fa-user icon" aria-hidden="true"></i>
                    </div>
                  </Link>
                  <GoogleLogout
                    clientId={Keys.OAUTH_CLIENT_ID}
                    render={(renderProps) => (
                      <p
                        className="login-button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        style={{ color: "white" }}
                      >
                        Logout{" "}
                        <i
                          class="fas fa-sign-out-alt"
                          style={{ color: "white" }}
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
    </>
  );
}

let check = 0;
function renderSidebar() {
  if (check == 0) {
    document.getElementsByClassName("sidebar")[0].style.right = "-30px";
    document.getElementsByClassName("closetext")[0].style.display = "block";
    document.getElementsByClassName("menubuttonBurger")[0].style.display =
      "none";
    check = 1;
  } else {
    document.getElementsByClassName("sidebar")[0].style.right = "-415px";
    document.getElementsByClassName("closetext")[0].style.display = "none";
    document.getElementsByClassName("menubuttonBurger")[0].style.display =
      "block";
    check = 0;
  }
}

export default Nav;
