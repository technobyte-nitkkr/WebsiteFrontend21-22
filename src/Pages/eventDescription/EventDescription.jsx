import React from 'react'
import axios from 'axios';
import  { useEffect , useState, useContext} from 'react'
import { useParams} from 'react-router-dom';
import { Row,Col, Image, Button } from 'react-bootstrap';
import './EventDescription.css';
import Store from "../../Store/Store.js";

const EventDescription = () => {

    const { category , event} = useParams();

    const [Event, setEvent] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [{ isAuth, user,token }] = useContext(Store);
    
    
    const getInfo = async () => {
      try {

        //fetching this event info
        const res = await axios.get(
          `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${category}&eventName=${event}`
        );
        setEvent(res.data.data);
        
        //fetching user registered events
        const res2 = await axios.get(
          "https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event" , {
            headers :  {
              authorization: token
            }
          }
        );

        await res2.data.data.events.map((e) => 
        {
          if(e.eventName == event) {   
            setIsRegistered(true);
         }
        })
      } 
      catch (err) {
        console.log(err);
      }
    };

    const registerEvent = async () => {

      try {
        const object = {
          "eventName" : event,
          "eventCategory" : category
        }
        const res = await axios.put(
          `https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event`, object, {
            headers : {
              authorization : token
            }
          }
        );
        alert(res.data.status);
        console.log(res.data.success);
        if(res.data.success) {
          setIsRegistered(true);
        }
      }
      catch(err) {
        console.log(err);
        alert(err);
      }
    }
       
        

    const unregisterEvent = async () => {
      try {
        const object = {
          "eventName" : event,
          "eventCategory" : category
        }
        const res = await axios.put(
          `https://us-central1-techspardha-87928.cloudfunctions.net/api2/user/event/unregister`, object, {
            headers : {
              authorization : token
            }
          }
        );
        alert(res.data.status);
        if(res.data.success) {
          setIsRegistered(false); 
        }
      }
      catch(err) {
        console.log(err);
        alert(err);
      }
    }

    function handleClick() {
       if(isRegistered) {
          unregisterEvent()
       }
       else {
          registerEvent()
       }  
     }
   
     
    useEffect(async ()=>{
      setLoading(true);
      await getInfo();
      setLoading(false);
    },[]);
   
   
    
    
    return (
      ! isLoading ? <> 
        
        <div style={{textAlign: 'center', color: 'white', fontSize: '70px'}}>
           {Event.eventName}
        <div style={{padding: '20px'}}>
        <Row>
            <Col xs lg={5}>
            <Image src={Event.poster} height={300} width={500}   
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/dvhrzmkwd/image/upload/v1643788204/Unknown39825/eesglbsknedo9vvnclkx.jpg";
            }} 
            >
            </Image>
             <div style={{  paddingTop : '20px'}} >
               <h4>
                   {}
                Start Time : {new Date(Event.startTime).toLocaleString("en-US", {year: "numeric", month: "short", day: "2-digit", hour: "numeric" })}
               </h4>
               <h4>
                   End Time : {new Date(Event.endTime).toLocaleString("en-US", {year: "numeric", month: "short", day: "2-digit", hour: "numeric" })}
               </h4>
               </div>

               { !isAuth ? <>

                <Button disabled style={{color: "white", background: "transparent"}}>
                   Login to Register  
                </Button>
               </> : <>
               <Button onClick={handleClick} style = {{color: "white", background: "transparent", fontSize: "25px"}}>
                 {
                   isRegistered ? <>Unregister</> : <>Register</> 
                 } 
               </Button>
               </>}
               
            </Col>
            <Col lg={1}>
            <div class="vl"></div>
            </Col>
            <Col >
            <div style={{textAlign: 'left', color: 'white', fontSize: '30px'}}>
              <h4>Description: </h4>
              <p style={{fontSize: '15px'}}>{Event.description}</p>
              { (! Event.rules) ? <>
              </>  : 
              <>
              <h4>Rules: </h4>
              <ul style={{fontSize: '15px'}}>
              
                  {Event.rules.map((rule) => (
                      <li>{rule}</li>
                  ))}
              </ul>
              </> }
              
              <h4>Venue: </h4>
              <p style={{fontSize: '15px'}}>{Event.venue}</p>
              { (! Event.coordinators) ? <>
              </>  : 
              <>
               <h4>Coordinators: </h4>
                  {
                      Event.coordinators.map((coordinator) => (
                        <p style={{fontSize: '15px'}}>{coordinator.coordinator_name} - {coordinator.coordinator_number}</p>
                      ))}
              </>
              }
             
              </div>
            </Col>   
        </Row>
        </div>
        </div>
        </> : 
        <>
           <h1 style = {{textAlign: 'center', color: 'white', fontSize: '70px'}}>
             Loading ...
           </h1>
        </>
    )
}

export default EventDescription
