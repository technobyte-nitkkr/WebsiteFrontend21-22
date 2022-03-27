
import React, { useEffect, useState } from "react";
import "./sponsors.css";
import axios from "axios";
import Keys from "../../config.keys";
import Background from "../../components/Background/Background";

const Sponsors = () => {
  var arr = ["left", "right", "top", "bottom"];
  var [SponsorList, setSponsorList] = useState([]);

  useEffect(() => {
    console.log(SponsorList);
    const getSponsors = async () => {
      try {
        var url = Keys.BASE_API + "/foodsponsors";
        var response = await axios.get(url);
        setSponsorList(response.data.data.foodSponsors);
      } catch (error) {
        console.log(error);
      }
    };
    getSponsors();
  }, []);
  
  return (
    //   <div className="container">
    <>
      <Background />
    
      <div className="sponsor-wrapper">
        <h2 className="headingGL">
          Our Amazing Sponsors
        </h2>
      </div>
      <div className="sponsi-container">
        {SponsorList.map((item,index) => {
          console.log(item.imageUrl);

          // var s = arr[Math.floor(Math.random() * arr.length)];
           
            return (
              <div key={index} className="sponsi-card-top">
                <div className="sponsi-card-image">
                  <img
                    style={{
                      background:"white"
                    }}
                    src={item.imageUrl}
                  />
                </div>
                <div className="sponsi-card-text">
              
                  <h4>
                    <a href={item.targetUrl} style={{
                      textAlign:'center',
                      textDecoration:'none'
                    }}>{item.name}</a>
                  </h4>
              
                  <br />

                </div>
                </div>
            );
        })}
      </div>
    
    </>
  );
};
export default Sponsors;
