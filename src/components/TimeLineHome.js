import React, { useEffect, useContext, useState } from "react";
import Store from "../Store/Store";
import axios from "axios";
// import Elist from "../evtImg.js";
// import { Timeline, TimelineEvent } from "react-event-timeline";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import HorizontalTimeline from "react-horizontal-timeline";
import "./Timeline.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
        console.log(res.data.data.events);
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
        <OwlCarousel
          loop={true}
          autoplay={true}
          autoplaySpeed={4000}
          dots={false}
          slideBy={5}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 },
            1200: { items: 5 },
          }}
          // navSpeed={100}
          autoplayTimeout={8000}
          autoplayHoverPause={true}
        >
          {istate.timeline ? (
            istate.timeline
              .filter((event) => event.startTime > now)
              .map((event, index) => {
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
                        {date(event.startTime)}
                        {/* {"Event Dates Coming Soon"} */}
                      </span>
                    </div>
                    <div className="status">
                      <h6>
                        {time(event.startTime)} - {time(event.endTime)}
                      </h6>
                    </div>
                  </li>
                );
                // }
              })
          ) : (
            <p></p>
          )}
        </OwlCarousel>
      </ul>
    </div>
  );
};

export default TimelineHome;
