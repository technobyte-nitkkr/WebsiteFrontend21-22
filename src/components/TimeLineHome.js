import React, { useEffect, useContext, useState } from "react";
import Store from "../Store/Store";
import axios from "axios";
// import Elist from "../evtImg.js";
// import { Timeline, TimelineEvent } from "react-event-timeline";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
// import HorizontalTimeline from "react-horizontal-timeline";
import "./Timeline.css";

const TimelineHome = () => {
  const { state, dispatch } = useContext(Store);
  const [istate, setState] = useState({
    timeline: [],
  });
  useEffect(() => {
    const getTimeline = async () => {
      try {
        const res = await axios.get(
          "https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/timeline"
        );
        setState({
          ...istate,
          timeline: res.data.data.events,
        });
        console.log(res.data.data.events.sort((a, b) => a.eventName.toString().localeCompare(b.eventName.toString())));
         console.log(
           res.data.data.events.filter((e) => e.endTime > Date.now())
         );
      } catch (error) {
        console.log(error);
      }
    };
    getTimeline();
  }, []);
  function getImage(eventName) {
    var x;
    // Elist.map((element, index) => {
    //   if (element.event == eventName) {
    //     x = element.img;
    //     return false;
    //   }
    // });
    return x;
  }

  function time(timestamp) {
    var myDate = new Date(timestamp);
    var x = dateFormat(myDate, "hh:MM TT");
    return x;
  }

  function date(timestamp) {
    var myDate = new Date(timestamp);
    var x = dateFormat(myDate, "dd/mm/yy");
    return x;
  }

  istate.timeline.sort((x, y) => {
    var a = new Date(x.startTime);
    var b = new Date(y.startTime);
    return a - b;
  });

  var now = new Date();
  var timenow = now.getTime();

  return (
    <div className="timeline-wrapper">
      <ul className="timeline" id="timeline">
        {istate.timeline ? (
          istate.timeline.map((event, index) => {
            return (
              <li key={index} className="li complete">
                <div className="timestamp">
                  <Link
                    className="primary"
                    to={`/eventdetails/${event.eventCategory}/${event.eventName}`}
                  >
                    <span className="author">{event.eventName}</span>
                  </Link>
                  <span className="date" style={{ marginBottom: "1rem" }}>
                    {date(event.startTime)} - {time(event.startTime)}
                  </span>
                </div>
                <div className="status">
                  <h6>
                    {date(event.endTime)} - {time(event.endTime)}
                  </h6>
                </div>
              </li>
            );
            // }
          })
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
};

export default TimelineHome;
