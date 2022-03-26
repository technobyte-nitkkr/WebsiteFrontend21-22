import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Background from '../../components/Background/Background';
import Card from '../../components/card/Card';
import "./developers.css"

const Developers = () => {
  const [Developers, getDevelopers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getDevs = async () => {
    try {
      //fetching this event info
      const res = await axios.get(
        `https://us-central1-techspardha-87928.cloudfunctions.net/api2/about`
      );
      console.log(res.data.data.devs);
      getDevelopers(res.data.data.devs);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(async () => {
    setLoading(true);
    await getDevs();
    setLoading(false);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Background />
      <div class="top" style={{ zIndex: "2" }}>
        MEET OUR DEVELOPERS
      </div>
      <div class="team2">
        {
          Developers.map((dev) => (
            <Card name={dev.name} year={dev.year} img={dev.imageUrl} git={dev.github} insta={dev.insta} linkedin={dev.linkedin} />
          ))
        }

      </div>
    </div>
  );
};

export default Developers;
