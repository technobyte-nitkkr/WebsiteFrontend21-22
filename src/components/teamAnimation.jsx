// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./teamAnimation.css";
// export default function TeamAnimation() {
//   const [team, setTeam] = useState([]);
//   const [team1, setTeam1] = useState([]);
//   const [team2, setTeam2] = useState([]);
//   const shuffleArray = (array) => {
//     let i = array.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     return array;
//   };

//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         "https://us-central1-techspardha-87928.cloudfunctions.net/api2/contacts"
//       );
//       let array = [];
//       let array1 = [];
//       let array2 = [];
//       const arr = res.data.data.contacts;
//       for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].people.length; j++) {
//           array.push(arr[i].people[j]);
//           array1.push(arr[i].people[j]);
//           array2.push(arr[i].people[j]);
//         }
//       }

//       array1 = await shuffleArray(array1);
//       array2 = await shuffleArray(array2);

//       setTeam(array);
//       setTeam1(array1);
//       setTeam2(array2);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="team-slider">
//       <div className="diamond-shape-outer">
//         <div className="team-divide">
//           {team
//             ? team.map((x) => {
//                 return (
//                   <div className="diamond">
//                     <div className="diamond-shape">
//                       <img src={x.imageUrl}></img>
//                     </div>
//                   </div>
//                 );
//               })
//             : "no found"}
//         </div>
//         <div className="team-divide team-middle">
//           {team1
//             ? team1.map((x) => {
//                 return (
//                   <div className="diamond">
//                     <div className="diamond-shape">
//                       <img src={x.imageUrl}></img>
//                     </div>
//                   </div>
//                 );
//               })
//             : "no found"}
//         </div>
//         <div className="team-divide team-bottom">
//           {team2
//             ? team2.map((x) => {
//                 return (
//                   <div className="diamond">
//                     <div className="diamond-shape">
//                       <img src={x.imageUrl}></img>
//                     </div>
//                   </div>
//                 );
//               })
//             : "no found"}
//         </div>
//       </div>
//     </div>
//   );
// }