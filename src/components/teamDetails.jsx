import React, { useState, useEffect } from "react";
import "./teamDetails.css";
import axios from "axios";
export default function TeamDetails() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          " https://techspardhabackend.herokuapp.com/contacts"
        );
        setData(res.data.data.contacts);
        console.log(res.data.data.contacts);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="team-details">
      <div className="team-links">
        {data
          ? data.map((x) => {
              return <button className="teams">{x.section}</button>;
            })
          : ""}
      </div>
      <div className="team-card-container">
        {data
          ? data[3].people.map((x) => {
              return (
                <div className="team-card">
                  <img src={x.imageUrl}></img>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
