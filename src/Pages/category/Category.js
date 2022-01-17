import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import CardsCat from "./CardsCat";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Category.css";
// import Heading from "./heading.js";
function Category() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    // navText: ["<", ">"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      515: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
          items: 4,
      }
    },
  };
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://techspardhabackend.herokuapp.com/events/categories"
      );
      setData(res.data.data.categories);
      console.log(res);
      //console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    getData();
  },[load])
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div
      style={{
        // backgroundImage: "url(" + background + ")",
        backgroundColor: "#000",
        backgroundSize: "cover",
        widht:"100vw",  
        height: "100vh"    
    }}
    >
      {/* <div class="container-fluid">
        <Heading />
      </div> */}
      {console.log(data)}
      <div className="category-heading">Categories</div>
      <div class="container-fluid">
        {load? <OwlCarousel
          className="slider-items owl-carousel owl-theme"
          loop
          nav
          {...options}
        >
          {data.map((x, index) => {
            {
              console.log("Helllooooooooooooooooooooooooooo");
            }
            return (
              <div key={index}>
                <CardsCat name={x.categoryName} img={x.imgUrl} icon={x.icon} />
              </div>
            );
          })}
        </OwlCarousel> : <></>}
      </div>
    </div>
  );
}

export default Category;
