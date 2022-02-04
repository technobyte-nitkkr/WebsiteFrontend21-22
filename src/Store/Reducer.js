import { LOGIN, LOGOUT, AUTH, ONBOARD } from './Types'
// import jwt from 'jsonwebtoken'
import { decodeToken } from "react-jwt";
import Keys from '../config.keys';

const Reducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {

        case LOGIN:
            // const userData = jwt.verify(payload, Keys.JWT_SECRET);
            // const userData = decodeToken(payload);
            const {user,token} = payload;
            // console.log(userData);
            localStorage.setItem("ts20token", token);
            return {
                ...state,
                isAuth: true,
                // user: userData,
                // token: payload
                user,token
            }
        case LOGOUT:
            console.log("logged out")
            localStorage.removeItem('ts20token')
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null
            }
        case AUTH:
            console.log("HETE")
            return {
                ...state,
                authLoading: false
            }
        case ONBOARD:
            console.log("onboard reducer");
            user = payload;
            console.log(payload);
            return{
                ...state,
                onBoard:true,
                user
            }

        default:
            return state;
    }
}


export default Reducer;