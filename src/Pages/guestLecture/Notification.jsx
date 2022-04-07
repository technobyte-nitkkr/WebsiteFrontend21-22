import React, { useEffect, useRef, useState } from 'react';
import "./Notification.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Background from '../../components/Background/Background';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {  Button } from 'react-bootstrap';
const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const scrollref = useRef(null);

    const [expanded, setExpanded] = useState(0)

    useEffect(() => {
        fetch('https://us-central1-techspardha-87928.cloudfunctions.net/api2/notification',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setNotifications(data.data.notifications)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (

        <>
            <Background />
            <div className='headingGL'>
                Notifications
            </div>
            <div className="mainContentNoti">
                <div className="carouselNoti">

                    {
                        notifications.map((item, index) => {
                            return (
                                <div key={index} class="profile-cardNoti">
                                    <header>

                                        <img src={item.notification.image}

                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "https://i.ibb.co/hcR8BXn/placeholder.jpg";
                                            }}

                                        />
                                        <h3>{item.notification.title}</h3>
                                        
                                    </header>
                                    <div class="profile-bioNoti">
                                        <p>{expanded !== index + 1 ? item.notification.body.substring(0, 0) : item.notification.body}</p>
                                    </div>
                                    {expanded !== index + 1 && <div className="buttonarrow" onClick={() => {
                                        console.log("hello");

                                        setExpanded(index + 1);

                                        console.log(expanded)
                                    }}>
                                        Show More
                                    </div>}
                                    {expanded === index + 1 &&
                                        <div className="buttonarrow" onClick={() => {
                                            setExpanded(0);

                                            console.log(expanded)
                                        }}>
                                            Show Less

                                        </div>}

                                    <Button  
                                        className="profile-social-links"
                                        style={{
                                            color: "whitesmoke",
                                            backgroundColor: "#3864e8",
                                            fontSize: "20px",
                                            borderColor: "transparent"
                                        }}
                                        href={item.notification.link}
                                        >

                                        Link
                                       
                                    </Button>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Notification