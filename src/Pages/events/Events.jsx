import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { Row,Col, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import EventCard from '../../components/EventCard';

//import "./events.css"

const Events = () => {
   const { category } = useParams();

   const [events, setEvents] = useState([]);
   const [isLoading, setLoading] = useState(false);
    
   const getData = async () => {
     try {
       const res = await axios.get(
         `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${category}`
       );
       setEvents(res.data.data.events);
       console.log(res.data.data.events);
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
        
        <div >
            <h1 style={{textAlign: "center", color: "white", fontSize: "60px"}}> {category}</h1>
           { isLoading ? 
              <div>
                Loading ... 
              </div>  
            : 
              <div>
                <Row> 
                {   
                  events.map((event) => 
                 ( 
                  <EventCard category = {event.eventCategory} poster={event.poster} eventName={event.eventName} startTime = {event.startTime} desc = {event.description} /> 
                 ))}
                </Row>
              </div>
            }
        </div>
    )}

export default Events
