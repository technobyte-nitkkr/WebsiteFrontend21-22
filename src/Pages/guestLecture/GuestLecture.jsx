import React, { useEffect, useRef, useState } from 'react';
import './GuesLecture.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Background from '../../components/Background/Background';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Lecture = () => {
    const [guestList, SetGuestList] = useState([])
    const scrollref = useRef(null);
    var lectures = [];
    const [expanded, setExpanded] = useState(0)

    useEffect(() => {
        fetch('https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => res.json())
            .then((data) => {
                lectures = data.data.lectures;
                console.log(lectures);
                SetGuestList(data.data.lectures)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
 
    return (

        <>
            <Background />
            <div className='headingGL'>
                Guest Lectures
            </div>
            <div className="mainContentGL">
                <div className="carouselGL">

                    {
                        guestList.map((item,index) => {
                            return (
                                <div key={index} class="profile-card">
                                    <header>
                                        
                                        <img src={item.imageUrl}  />
                                        <h1>{item.name}</h1>
                                        <h2>{item.date}</h2>
                                    </header>
                                    <div class="profile-bio">
                                        <p>{ expanded!==index+1 ? item.desc.substring(0,200): item.desc}</p>
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
                                    <ul class="profile-social-links">
                                        <li>
                                            <a href="">
                                                <FaInstagram className="faSocial"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FaLinkedin className="faSocial"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FaFacebook className="faSocial"/>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            )
                        })
                    }

                    {/* </Carousel> */}

                </div>
            </div>

        </>
    )
}

export default Lecture