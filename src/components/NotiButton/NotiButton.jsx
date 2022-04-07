import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotiButton() {
    return (
        <div class="NotiPop" style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#4890ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            right: "30px",
            zIndex: "130",
            bottom: "90px",
            animation: "logoFlash 1s 0.5s ease-in 1 forwards"
        }}>
            <Link
                to="/notification"
                className="nav-comp"
            >
                <FaBell  style={{
                    fontSize: "30px",
                    color: "white",
                }}/>
            </Link>
        </div>
    )
}
