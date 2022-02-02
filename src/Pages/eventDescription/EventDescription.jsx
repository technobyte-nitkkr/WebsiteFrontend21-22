import React from 'react'
import axios from 'axios';
import  { useEffect , useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { Row,Col, Card, Image, Button } from 'react-bootstrap';
import './EventDescription.css';
import Events from '../events/Events';

const EventDescription = () => {
    const { category , event} = useParams();

    const [Event, setEvent] = useState([]);
    const [isLoading, setLoading] = useState(false);
     
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${category}&eventName=${event}`
        );
        console.log(res.data);
        setEvent(res.data.data)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
 
    useEffect(()=>{
      getData();
    },[isLoading])
    useEffect(() => {
      setLoading(true);
    }, []);
    

    return (
        
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
               <Button > Register</Button>
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
    )
}

export default EventDescription
