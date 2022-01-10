import React, { useState, useEffect } from "react";
import anshika from "../../images/anshika.jpeg";
import "./team.css";
import axios from "axios";
export default function Team() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          " http://us-central1-techspardha-87928.cloudfunctions.net/api/about"
        );
        setData(res.data.data.devs);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="team">
      <div className="team-heading">OUR TEAM</div>
      <div className="team-slider">
        <div className="diamond-shape-outer">
          {data
            ? data.map((x) => {
                return (
                  <div className="diamond">
                    <div className="diamond-shape">
                      <img src={x.imageUrl}></img>
                      <div className="developers-content">
                        <h2>Anshika Jain</h2>
                        <p>Logos</p>
                      </div>
                    </div>
                    <div className="dev-info">Hello its anshika here</div>
                  </div>
                );
              })
            : "no found"}
        </div>
      </div>
    </div>
  );
}
