import { LOGIN, LOGOUT, AUTH, ONBOARD } from "./Types";
// import jwt from 'jsonwebtoken'
import { decodeToken } from "react-jwt";
import Keys from "../config.keys";

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      // const userData = jwt.verify(payload, Keys.JWT_SECRET);
      // const userData = decodeToken(payload);
      const { user, token } = payload;
      // console.log(userData);
      localStorage.setItem("ts20token", token);
      localStorage.setItem("userdata",JSON.stringify(user));
      return {
        ...state,
        isAuth: true,
        user,
        token,
      };

    case LOGOUT:
      console.log("logged out");
      localStorage.removeItem("ts20token");
      localStorage.removeItem("userdata");
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    case AUTH:
      console.log("HETE");
      return {
        ...state,
        authLoading: false,
      };

    default:
      return state;
  }
};

export default Reducer;
