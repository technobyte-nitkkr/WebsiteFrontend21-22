import React, { useState, useContext } from "react";
import { GoogleLogin } from "react-google-login";
import useFetch from "use-http";
import Keys from "../../config.keys";

import Store from "../../Store/Store";
import { AUTH, LOGIN } from "../../Store/Types";

const LoginButton = () => {
  const [store, dispatch] = useContext(Store);
  const request = useFetch(Keys.BASE_API);
  const [localState, setLocalState] = useState({
    error: "",
  });

  const success = async (e) => {
    const TOKEN = e.tokenId;

    if (localStorage.getItem("ts20token")) {
      const data = JSON.parse(localStorage.getItem("userdata"));
      const token = localStorage.getItem("ts20token");
      dispatch({
        type: LOGIN,
        payload: {
          user: data,
          token
        },
      });
      return;
    }

    try {
      const response = await request.post("/login", {
        idToken: TOKEN,
      });

      console.log("HERE");
      console.log(response.data.token);
      console.log("HERE");
      dispatch({
        type: LOGIN,
        payload: response.data,
      });

      dispatch({
        type: AUTH,
      });
    } catch (error) {
      console.info("ERROR AUTH FETCH", error);
    }
  };

  const failed = (e) => {
    console.info("Auth on Failure", e);
    setLocalState({
      ...localState,
      error: "Error. Try again.",
    });

    setTimeout(() => {
      setLocalState({
        ...localState,
        error: "",
      });
    }, 2000);
  };

  return (
    <div>
      {localState.error ? (
        <p>{localState.error}</p>
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <button
              style={{ background: "transparent",color: "white", border: "none" }}
              
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </button>
          )}
          clientId={Keys.OAUTH_CLIENT_ID}
          buttonText="Login"
          onSuccess={success}
          onFailure={failed}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default LoginButton;