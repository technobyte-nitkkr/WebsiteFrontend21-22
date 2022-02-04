import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { Row,Col, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

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
                 events.map((event) => (  
                  <Col xs lg={4} >
                     <Link to = {`/eventdetails/${category}/${event.eventName}`}>
                  <div  className='event-card' style={{margin: 20}}>
                 
                    <Card style={{padding: 20,  backgroundColor: "white" }}>
                      <Card.Img height={200} width={400} 
                      src={event.poster}  onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://res.cloudinary.com/dvhrzmkwd/image/upload/v1643788204/Unknown39825/eesglbsknedo9vvnclkx.jpg";
                              }}
                             ></Card.Img>
                    <Card.Title style={{color: "black" , textAlign: "center"}}>{event.eventName}</Card.Title>
                    <Card.Text style={{fontSize: "20px" , color: 'black',textAlign: "center" }}>
                      {event.description.slice(0,100)+'...'}
                    </Card.Text>
                    <Card.Body style={{fontSize: "20px" , color: 'black'}}>
                      Know More
                    </Card.Body>
                  </Card>
                 
                  </div>
                  </Link>
                  </Col>
                 ))}
                </Row>
              </div>
            }
        </div>
    )}

export default Events
