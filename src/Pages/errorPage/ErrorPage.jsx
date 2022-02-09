import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate = useNavigate();

    useEffect (() => {
        setTimeout(()=>{
           navigate("/");
        },5000);
    },[]);

    return (
        <div style={{alignItems : "center", margin: "80px", alignContent: "center",color: "white", textAlign: "center"}}>

            <h1>404</h1>
            <h3>Looks like you're lost ☹ ☹</h3>
            <h4>The page you are looking for is not available !!</h4>
            <h4> Redirecting to home...</h4>
        </div>
    )
}

export default ErrorPage
