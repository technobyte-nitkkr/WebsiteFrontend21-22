import React from 'react'
import axios from 'axios';
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './EventDescription.css';
import Store from "../../Store/Store.js";
import SignUpModal from '../SignUpModal';
import Background from '../../components/Background/Background';
import BouncingDotsLoader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';
const EventDescription = () => {
  let navigate = useNavigate();
  const { category, event } = useParams();

  const [Event, setEvent] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [{ isAuth, user, token }] = useContext(Store);

  const [modalShow, setModalShow] = React.useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const getInfo = async () => {
    try {
      //fetching this event info

      const res = await axios.get(
        `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${category}&eventName=${event}`
      );
      setEvent(res.data.data);
      
      if (isAuth) {
        //fetching user registered events
        var myevents = [];
        if (localStorage.getItem('eventsUpdated') != true) {
          const res2 = await axios.get(
            "https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event", {
            headers: {
              authorization: token
            }
          });
          var myevents = res2.data.data.events;
          localStorage.setItem('eventsUpdated', false);
          localStorage.setItem('myevents', JSON.stringify(myevents));
        } else {
          myevents = JSON.parse(localStorage.getItem('myevents'));
        }

        await myevents.map((e) => {
          if (e?.eventName == event) {
            setIsRegistered(true);
          }
        })
      }

      setLoading(false);
    } catch (err) {
      setLoading(true)
      navigate("/error");
    }
  };

  const registerEvent = async () => {
    try {
      const object = {
        "eventName": event,
        "eventCategory": category
      }

      const res = await axios.put(
        `https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event`, object, {
        headers: {
          authorization: token
        }
      }
      );
      alert((res.data.status || " ") + "\nPlease check your email for more details.");
      console.log(res.data);
      if (res.data.success) {
        setIsRegistered(true);
        // setupdated
        localStorage.setItem('eventsUpdated', true);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  const unregisterEvent = async () => {
    try {
      const object = {
        "eventName": event,
        "eventCategory": category
      }

      const res = await axios.put(
        `https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event/unregister`, object, {
        headers: {
          authorization: token
        }
      }
      );
      alert(res.data.status);
      if (res.data.success) {
        setIsRegistered(false);
        localStorage.setItem('eventsUpdated', true);
      }
    } catch (err) {
      navigate("/error");
      console.log(err);
      alert(err);
    }
  }

  function handleClick() {
    if (user.onBoard) {
      if (isRegistered) {
        unregisterEvent()
      } else {
        registerEvent()
      }
    } else {
      handleShow();
    }
  }

  useEffect(async () => {
    setLoading(true);
    await getInfo();
  }, []);

  return (
    !isLoading ?
      <>
        <Background />
       {
          Event && <div style={{ textAlign: 'center', color: 'white', width: "100%" }}>
            <div style={{ fontSize: '6vh' }}>
              {Event.eventName}
            </div>

            <div style={{ padding: '20px' }}>
              <Row>
                <Col xs sm={12} lg={4} md={4} style={{ paddingBottom: "20px" }}>
                  <Image src={Event.poster} height="250vw" width="320vw"
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px #4890ff2f' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://i.ibb.co/hcR8BXn/placeholder.jpg";
                    }}
                  >
                  </Image>
                  <div style={{ paddingTop: '20px' }} >
                    {
                      Event.endTime > new Date("2022-01-01") ? (<>
                        <h6>
                          Start Time : {new Date(Event.startTime).toLocaleString("en-US", { year: "numeric", month: "short", day: "2-digit", hour: "numeric", minute: "2-digit" })}
                        </h6>
                        <h6>
                          End Time : {new Date(Event.endTime).toLocaleString("en-US", { year: "numeric", month: "short", day: "2-digit", hour: "numeric", minute: "2-digit" })}
                        </h6>
                      </>): 
                      <h6>
                        Events dates coming soon
                      </h6>
                    }

                  </div>

                  {!isAuth ? <>

                    <Button disabled style={{ color: "white", border: '1px  solid white', background: "transparent" }}>
                      Login to Register
                    </Button>
                  </> : <>

                    <Button onClick={handleClick}
                      style={{
                        color: "whitesmoke",
                        backgroundColor: (isRegistered) ? "#e84338" : "#3864e8",
                        fontSize: "20px",
                        borderColor: "transparent"
                      }}>
                      {
                        isRegistered ? <>Unregister</> : <>Register</>
                      }
                    </Button>
                    <SignUpModal
                      show={modalShow}
                      onHide={handleClose}
                      user={user}
                    />
                  </>}

                </Col>
                <Col >
                  <div style={{ textAlign: 'left', color: 'white', fontSize: '30px' }}>
                    <h4>Description: </h4>
                    <p style={{ fontSize: '15px' }}>{Event.description}</p>
                    {(!Event.rules) ? <>
                    </> :
                      <>
                        <h4>Rules: </h4>
                        <div style={{ fontSize: '15px' }}>
                          <ul>
                            {Event.rules.map((rule) => (
                              <li style={{ margin: "2px" }}>{rule}</li>
                            ))}
                          </ul>
                        </div>
                      </>}

                    <h4>Venue: </h4>
                    <p style={{ fontSize: '15px' }}>{Event.venue}</p>
                    {(!Event.coordinators) ? <>
                    </> :
                      <>
                        <h4>Coordinators: </h4>
                        {
                          Event.coordinators.map((coordinator) => (
                            <p style={{ fontSize: '15px' }}>{coordinator.coordinator_name} - {coordinator.coordinator_number}</p>
                          ))}
                      </>
                    }

                  </div>
                </Col>
              </Row>
            </div>
          </div>
       }
      </> :
      <>
       <BouncingDotsLoader/>
      </>
  )
}

export default EventDescription
