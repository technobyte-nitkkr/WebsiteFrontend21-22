import React, { useContext } from "react";
import Store from "../Store/Store";
import LoginButton from "./LoginButton";
import { GoogleLogout } from "react-google-login";
import { withRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Keys from "../config.keys";
import logo from "../logo.svg";
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
      <div className="top-bar">
        <div className="top-title">
          <Link to="/" className="no-style-link">
            <img
              src={logo}
              alt="Altius/2020"
              style={{
                width: "140px",
                height: "auto",
                padding: "0",
                margin: "0",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        <div className="flex-it">
          {isAuth ? (
            <div className="flex-it">
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
                    >
                      &nbsp; <i class="fas fa-sign-out-alt"></i>
                    </p>
                  )}
                  onLogoutSuccess={logout}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          ) : (
            <div>
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;