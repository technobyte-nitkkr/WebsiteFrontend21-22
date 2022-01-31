import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt'
import './Lecture.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useScrollSnap from 'react-use-scroll-snap';
import mypic from '../images/mypic.png';
import '../components/Home.css'

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
            SetGuestList(data.guests)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <>
        <div className="demo">
        <div className='GuestLecture'>
                GUEST LECTURE
            </div>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div id="testimonial-slider" className="owl-carousel">
                {
                lectures.map(item => {
                    return (<>
                        <div className="testimonial">
                        <div className="pic">
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
                    
                </div>
            </div>
        </div>
    </div>
</div>
{/*
function Tilt(props) {
    
    const { options, ...rest } = props;
    const tilt = useRef(null);
    

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...rest} />;
}

const Lecture = ()=>{
    AOS.init({
        duration:1500,
        easing:"linear"
    });
    const [guestList, SetGuestList] = useState([])
    const scrollref = useRef(null);

    useEffect(()=>{
        fetch('guestslist.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data.guests);
            SetGuestList(data.guests)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    useScrollSnap({ref: scrollref,duration:100,delay:20})
    const options = {
        reverse:true,
        scale: 1.1,
        speed: 0,
        max: 30,
        glare : true,
        easing: "cubic-bezier(.03,.98,.52,.99)", 
        "max-glare":0.5,
    }; */}
        {/* <div className='bl'>
        <div className='GuestLecture'>
                GUEST LECTURE
            </div>    
        <div className='lecture' ref={scrollref}>
            <br/><br/><br/><br/><br/>
            
        
            {
                guestList.map(item => {
                    return(
                        <div className='container' data-aos="zoom-out-right"  >
            <Tilt options={options}>
                <div className='card'>
                    <div className='content'>
                        <div className='guest'>
                        <img src={mypic} />
                        </div>
                        <div className='guestinfo'>
                        <h3>{item.name}</h3>
                        <h4>{item.date}</h4>
                        <h5>{item.time}</h5>
                        <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
                </Tilt>
            </div>
                    )
                })
            }
            </div>
            </div> */}
        </>
    )
}
export default Lecture