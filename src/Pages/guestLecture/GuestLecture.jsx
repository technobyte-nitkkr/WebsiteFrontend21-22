import React, { useEffect, useRef, useState } from 'react';
import './GuesLecture.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Lecture = ()=>{
    const [guestList, SetGuestList] = useState([])
    const scrollref = useRef(null);
    var lectures=[];

    useEffect(()=>{
        fetch('https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res=>res.json())
        .then((data)=>{
            lectures = data.data.lectures;
            console.log(lectures);
            SetGuestList(data.data.lectures)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        
        <div className="demo">
        <div className='GuestLecture'>
                GUEST LECTURE
            </div>
    <div className="container">
        <div className="row">
            <div>
                <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                
                        
                {
                guestList.map(item => {
                    return (<>
                        <div className="testimonial">
                        <div className="picture">
                            <img src={item.imageUrl} />
                        </div>
                        <h3 className="title">{item.name}</h3>
                        <span className="post">{item.date}</span>
                        <span className="post">{item.time}</span>
                        <p className="description">{item.desc} </p>
                        </div>
                        </>
                    ) 
                })
                }
                    
                </Carousel>
            </div>
        </div>
    </div>

        </div>
    )
}
export default Lecture