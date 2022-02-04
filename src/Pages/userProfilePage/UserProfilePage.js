import { React, useContext, useEffect, useState } from "react";
import './UserProfilePage.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Store from "../../Store/Store";
import { format } from "date-fns";
import axios from "axios";
import Keys from "../../config.keys";
import SignUp from "./SignUp.js";

import { Carousel, Card, Container, Row, Col } from "react-bootstrap";


const UserProfilePage = () => {
    const [userData, setUserData] = useContext(Store);
    const [userEvents, setUserEvents] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
      const getUserDetails = async () => {
        console.log(userData);
  
        try {
          const url = Keys.BASE_API + "/user/event";
          var res = await axios.get(url, {
            headers: {
              authorization: userData.token,
            },
          });
  
          console.log(res);
          setUserEvents([...res.data.data.events]);
        } catch (e) {
          console.log(e);
        }
      };
      getUserDetails();
    }, []);
    useEffect(() => {
        const getCategories = async () => {
          try {
            const url = Keys.BASE_API + "/events/categories";
            var res = await axios.get(url);
    
            console.log(res.data.data.categories);
            setCategories([...res.data.data.categories]);
          } catch (e) {
            console.log(e);
          }
        };
        getCategories();
    }, []);

    return (
      <div>
        {!userData.isAuth ? (
          <div className="center">
            {" "}
            <div>Fetching data..</div>
          </div>
        ) : (
          <Container className='container'>
          <Row className='mainContent'>
              <Col xl={12}>
                  <Col>
                  <div className='userInfo'>
                      <div className='userImage'><img src = {userData.user.picture}></img></div>
                      <div className='userDesc'>
                        
                        <p style={{fontSize:"2rem"}}><b>{userData.user.name}</b></p>
                        <p><b>Email:</b> {userData.user.email}</p>
                        {(() => {
                          if(!userData)
                            console.log("helloeelele");
                          if (!userData.user.onBoard) {
                            return (
                              <div stlye={{backgroundColor:"red"}}><SignUp /></div>
                              
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
                  <div className='regEvents'>
                  <Row>
                    {userEvents &&
                    userEvents.map((e, i) => 
                      <Col xl={4} md={5} sm={5} xs={8} className='mx-auto my-3'>
                        <Row>
                          <Col xl={10} md={10} className='event mx-auto'>
                          <p className="regEventName"><h3>{e.eventName}</h3></p>
                          {categories.map(catgr => (
                              <div>
                              {catgr.categoryName == e.eventCategory &&
                                  <div className="regEventImage"><img src={catgr.icon}></img>
                                  <p>{format(new Date(e.startTime), "PPp")}</p>
                                  </div>
                                  
                              }
                              </div>
                          ))}
                          </Col>
                        </Row>
                    </Col>)}
                  </Row>
                  </div>
              </Col>
          </Row>
      </Container>
        )}
      </div>
    );
  };

export default UserProfilePage
