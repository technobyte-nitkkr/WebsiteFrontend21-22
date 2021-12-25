import { LOGIN, LOGOUT, AUTH } from './Types'
import jwt from 'jsonwebtoken'


const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            const userData = jwt.verify(payload, process.env.JWT_SECRET);
            localStorage.setItem("token", payload);
            return {
                ...state,
                isAuth: true,
                user: userData,
                token: payload
            }
        case LOGOUT:
            console.log("logged out")
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null
            }
        case AUTH:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default Reducer;