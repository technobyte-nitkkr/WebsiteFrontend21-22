import React, { useState, useEffect, useRef } from "react";
import "./teamDetails.css";
import "./teamDetails.scss";
import axios from "axios";
export default function TeamDetails() {
  const [data, setData] = useState();
  const [people, setPeople] = useState();
  const [current, setCurrent] = useState();
  const Ref = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          " https://techspardhabackend.herokuapp.com/contacts"
        );
        setData(res.data.data.contacts);
        console.log(res.data.data.contacts);
        setPeople(res.data.data.contacts[0].people);
        setCurrent(res.data.data.contacts[0].section);
        var x = document.getElementById(res.data.data.contacts[0].section);
        x.style.background = "#0e101b";
        window.scrollTo(".team-card-container");
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const changePeople = async (e) => {
    try {
      var y = document.getElementById(current);
      y.style.background = "#203354";
      console.log(e.target.id);
      setCurrent(e.target.id);
      for (var i = 0; i < data.length; i++) {
        if (data[i].section === e.target.id) {
          setPeople(data[i].people);
          console.log(data[i].people);
        }
      }
      var x = document.getElementById(e.target.id);
      x.style.background = "#0e101b";
      Ref.current.scrollIntoView();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="team-details">
      <div className="team-links">
        {data
          ? data.map((x) => {
              return (
                <button
                  id={x.section}
                  onClick={(e) => {
                    changePeople(e);
                  }}
                  className="teams"
                >
                  {x.section}
                </button>
              );
            })
          : ""}
      </div>
      <div ref={Ref} className="team-card-container">
        {people
          ? people.map((x) => {
              return (
                <div class="nft">
                  <div class="team-card-main">
                    <img
                      class="tokenImage"
                      src={x.imageUrl}
                      alt="post-holder"
                    />
                    <h2 className="person-name">{x.name}</h2>
                    <hr />
                    <p class="person-post">{x.post}</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
