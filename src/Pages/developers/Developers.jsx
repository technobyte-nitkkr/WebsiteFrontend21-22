import React from 'react';
import Background from '../../components/Background/Background';
import Card from '../../components/card/Card';
import "./developers.css"

const Developers = () => {
  return(
    //   <div style={{position: "relative"}}>
      <div class ="container">
          <div class = "top" style={{zIndex: "2"}}>
              MEET OUR DEVELOPERS
          </div>
          <div class = "team">
              <Card name = "Yash Mittal" role="Web Developer" />
              <Card name = "Aman Saini" role = "UI/UX Designer" />
              <Card name = "Utsav Soni" role = "Web Developer" />
              <Card name = "Yash Nigam" role = "Web Developer" />
              <Card name = "Rahul Rathore" role = "Web Deeloper" />
              <Card name = "Yash Mittal" role="Web Developer" />
              <Card name = "Aman Saini" role = "UI/UX Designer" />
              <Card name = "Utsav Soni" role = "Web Developer" />
              <Card name = "Yash Nigam" role = "Web Developer" />
              <Card name = "Rahul Rathore" role = "Web Deeloper" />
              <Card name = "Yash Mittal" role="Web Developer" />
              <Card name = "Aman Saini" role = "UI/UX Designer" />
              <Card name = "Utsav Soni" role = "Web Developer" />
              <Card name = "Yash Nigam" role = "Web Developer" />
              <Card name = "Rahul Rathore" role = "Web Deeloper" />
          </div>
      </div>
    //   </div>
  );
};

export default Developers;
