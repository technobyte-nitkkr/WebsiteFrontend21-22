import React, { useState, useEffect } from "react";
import anshika from "../../images/anshika.jpeg";
import "./team.css";
import axios from "axios";
export default function Team() {
  const [data, setData] = useState();
  const [team, setTeam] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          " https://techspardhabackend.herokuapp.com/contacts"
        );
        setData(res.data.data.contacts);
        //console.log(res.data.data.contacts);
        let array = [];
        const arr = res.data.data.contacts;
        for (var i = 0; i < arr.length; i++) {
          //console.log(arr[i].people[0]);
          for (var j = 0; j < arr[i].people.length; j++) {
            console.log(arr[i].people[j]);
            array.push(arr[i].people[j]);
          }
        }
        let array1 = array;
        let array2 = array;
        await setTeam(array);
        array1 = await array1.sort(() => Math.random() - 0.5);
        await setTeam1(array1);
        array2 = await array2.sort(() => Math.random() - 0.5);
        await setTeam2(array2);
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
          <div className="team-divide">
            {team
              ? team.map((x) => {
                  return (
                    <div className="diamond">
                      <div className="diamond-shape">
                        <img src={x.imageUrl}></img>
                      </div>
                    </div>
                  );
                })
              : "no found"}
          </div>
          <div className="team-divide team-middle">
            {team1
              ? team1.map((x) => {
                  return (
                    <div className="diamond">
                      <div className="diamond-shape">
                        <img src={x.imageUrl}></img>
                      </div>
                    </div>
                  );
                })
              : "no found"}
          </div>
          <div className="team-divide team-bottom">
            {team2
              ? team2.map((x) => {
                  return (
                    <div className="diamond">
                      <div className="diamond-shape">
                        <img src={x.imageUrl}></img>
                      </div>
                    </div>
                  );
                })
              : "no found"}
          </div>
        </div>
      </div>
    </div>
  );
}
