import React, { useEffect, useRef, useState } from 'react';
import './GuesLecture.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Lecture = () => {
    const [guestList, SetGuestList] = useState([])
    const scrollref = useRef(null);
    var lectures = [];

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

        <div className="demo">
            <div className='headingGL'>
                Guest Lectures
            </div>
            <div className="mainContentGL">
                <div className="carouselGL">

                    {
                        guestList.map(item => {
                            return (<>
                                <div class="profile-card">
                                    <header>
                                        
                                        <img src={item.imageUrl}  />
                                        <h1>{item.name}</h1>
                                        <h2>{item.date}</h2>
                                    </header>
                                    <div class="profile-bio">
                                        <p>{item.desc.length> 300 ? item.desc.substring(0,200): item.desc}</p>
                                    </div>
                                    <ul class="profile-social-links">
                                        <li>
                                            <a href="">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </>
                            )
                        })
                    }

                    {/* </Carousel> */}

                </div>
            </div>

        </div>
    )
}

export default Lecture