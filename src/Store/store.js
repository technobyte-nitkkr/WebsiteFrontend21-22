import { createContext } from "react";

const token = localStorage.getItem('token') || null;

const Store = createContext({
    user: null,
    isAuth: false,
    token,
    loading: true
})

export default Store