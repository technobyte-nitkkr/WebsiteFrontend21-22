import { createContext } from "react";

const token = localStorage.getItem('ts20token') || null;

const Store = createContext({
    user: null,
    isAuth: false,
    token,
    authLoading: true,
    onBoard: false
})

export default Store