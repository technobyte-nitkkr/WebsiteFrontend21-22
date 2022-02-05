import React, { useContext } from "react";
import Store from "../Store/Store";
import LoginButton from "./LoginButton";
import { GoogleLogout } from "react-google-login";
import { withRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Keys from "../config.keys";
import logo from "../logo.svg";
import "./TopBar.css";
import { Row,Col} from 'react-bootstrap';
import { LOGOUT } from "../Store/Types";

const TopBar = (props) => {
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
   
      <div className="top-bar" style={{zIndex: "1000"}}>
      <Row>
      <Col lg ={8} sm={8}>
        <div className="top-title">
          <Link to="/" className="no-style-link">
            <img
              src={logo}
              alt="Altius/2020"
              style={{
                width: "60px",
                height: "auto",
                padding: "0",
                margin: "0",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
        </Col>
        <Col>
        <div className="flex-it">
          {isAuth ? (
            <div className="flex-it" style={{float: "right"}}>
            <Link to="/user">
              <div className="mr-2 hover">
                <i className="fa fa-user icon" aria-hidden="true"></i>{" "}
                {user.name}
              </div>
              </Link>
              <div>
                <GoogleLogout
                  clientId={Keys.OAUTH_CLIENT_ID}
                  render={(renderProps) => (
                    <p
                      className="login-button"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      style = {{color: "white"}}
                    >
                      Logout <i class="fas fa-sign-out-alt" style = {{color: "white"}}></i>
                    </p>
                  )}
                  onLogoutSuccess={logout}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          ) : (
            <div style={{}}>
              <LoginButton />
            </div>
          )}
        </div>
        </Col>
        </Row>
      </div>
      
      
    </>
  );
};

export default TopBar;