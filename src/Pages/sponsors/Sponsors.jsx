
import React, { useEffect, useState } from "react";
import "./sponsors.css";
import axios from "axios";
import Keys from "../../config.keys";

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
    <div style={{ marginBottom: '6rem' }}>

      <div className="sponsor-wrapper">
        <h2 className="sponsor-headline typography-sponsor-headline">
          Our Amazing&nbsp;Sponsors
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
                      objectFit: "contain",
                    }}
                    src={item.imageUrl}
                  />
                </div>
                <div className="sponsi-card-text">
              
                  <h4>
                    <a href={item.targetUrl} style={{
                      color:'#FFFFFF',
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
    </div> 
    // </div>
  );
};
export default Sponsors;
