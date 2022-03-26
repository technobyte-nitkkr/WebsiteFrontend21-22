import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import CardsCat from "./CardsCat";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Category.css";
import { Row } from "react-bootstrap";
import Background from "../../components/Background/Background";

function Category() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/categories"
      );
      setData(res.data.data.categories);
      console.log(res);
      //console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [load])
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      <Background />
      <div style={{margin: "20px", width:"90%"}} >
        {load ? 
          (
            <Row>
            {            
            data.map((x) => (
              <CardsCat name={x.categoryName} img={x.imgUrl} icon={x.icon} />
             ))
            }
            </Row>
           )
           : 
           <></>}
      </div>
    </>
  );
}

export default Category;