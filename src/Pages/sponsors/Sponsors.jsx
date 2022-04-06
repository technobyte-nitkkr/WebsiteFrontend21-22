
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
        var url = Keys.BASE_API + "/sponsors";
        var response = await axios.get(url);
        setSponsorList(response.data.data.sponsors.reverse());
        // response.data.data.sponsors.
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
                  Sponsors
                </h2>
              </div>
            <div className="sponsi-container">
      {
        SponsorList.map((category)=>{
          return(
            <>
             
              {category.sponsors.map((item, index) => {
                console.log(item);

                // var s = arr[Math.floor(Math.random() * arr.length)];

                return (
                  <div key={index} href={item.targetUrl} className="sponsi-card-top">
                    <a href={item.targetUrl} style={{
                          textAlign: 'center',
                          textDecoration: 'none'
                        }}>
                    <div className="sponsi-card-image">
                      <img
                        style={{
                          background: "white"
                        }}
                        src={item.imageUrl}
                      />
                    </div>
                    <div className="sponsi-card-text">
                      <h4 >
                      <div style={{color: "white"}}>
                        {item.name}<br/>
                        </div>
                        {category.sponsorSection}
                        
                        </h4>
                    </div>
                    </a>
                  </div>
                );
              })}
            
            </>
          )
        })
      }
    </div>
    </>
  );
};
export default Sponsors;
