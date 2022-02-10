import { React, useContext, useEffect, useState } from "react";
import './UserProfilePage.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Store from "../../Store/Store";
import axios from "axios";
import Keys from "../../config.keys";
import {Container, Row, Col, Button } from "react-bootstrap";

import SignUpModal from "../SignUpModal";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";

const UserProfilePage = () => {
    const [userData, setUserData] = useContext(Store);
    const [userEvents, setUserEvents] = useState(null);

    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    let navigate = useNavigate();

    useEffect(() => {
      if (!userData.isAuth){
         return navigate("/");
      }
   },[userData.isAuth]);
   
    useEffect(() => {
      const getUserDetails = async () => {
        console.log("hello");
        console.log(userData);
  
        try {
          const url = Keys.BASE_API + "/user/event";
          var res = await axios.get(url, {
            headers: {
              authorization: userData.token,
            },
          });
          
          console.log("my events");
          console.log(res);
          setUserEvents([...res.data.data.events]);
        } catch (e) {
          console.log(e);
        }
      };
      if(userData.isAuth) {
        getUserDetails();
      }
    }, []);
    
    return (    
      <div>
        {!userData.isAuth ? 
           <></>
         : (
          <Container className='container'>
            <h1 style={{textAlign: "center", color: "white"}}>Your Profile</h1> 
          <Row className='mainContent'>
              <Col xl={12}>
                  <Col>
                  <div className='userInfo'>
                      <div className='userImage'><img src = {userData.user.picture}></img></div>
                      <div className="userDesc">
                        
                        <p style={{fontSize:"2rem"}}><b>{userData.user.name}</b></p>
                        <p><b>Email:</b> {userData.user.email}</p>
                        {(() => {
                          if(!userData)
                            console.log("helloeelele");
                          if (!userData.user.onBoard) {
                            return (
                              <div stlye={{backgroundColor:"red"}}>
                                <Button onClick={handleShow}>
                                  SignUp for Techspardha
                                </Button>
                                <SignUpModal
                                  show={modalShow}
                                  onHide={handleClose}
                                  user = {userData.user}
                                />
                              </div>
                            )
                          } else{
                            return (
                              <div>
                                  <p><b>College:</b> {userData.user.college}</p>
                                  <p><b>Contact:</b> {userData.user.phone}</p>
                                  <p><b>Year:</b> {userData.user.year}</p> 
                              </div>
                            )
                          } 
                        })()}
                      </div>
                  </div>
                  </Col>
              </Col>
              <Col>
                  <div className='regEvents-heading'><h1>Your Registered Events</h1></div>
                  {(() => {
                    if(!userEvents){
                      return (<p style={{color:"white",textAlign:"center",marginBottom:"100px"}}>You have not registered in any event.</p>)
                    }else{
                      return(
                      <div className='regEvents'>
                      <Row>
                        {userEvents &&
                        userEvents.map((e, i) =>
                        <EventCard category = {e.eventCategory} poster={e.poster} eventName={e.eventName} startTime = {e.startTime} />             
                          )}
                      </Row>
                      </div>
                      )
                    }
                  })()}
              </Col>
          </Row>
      </Container>
        )}
      </div>
    );
  };

export default UserProfilePage
