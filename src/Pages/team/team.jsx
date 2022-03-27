import React, { useState, useEffect } from "react";
import "./team.css";
import TeamAnimation from "../../components/team/teamAnimation";
import TeamDetails from "../../components/team/teamDetails";
import Background from "../../components/Background/Background";
export default function Team() {
  return (

    <div className="team">
      <Background />

      <div className="headingGL">Team Techspardha</div>
      <div className="sub-team-heading">
        "Meet the People who worked countless hours behind the scenes to bring
        you the Spectacle, that is Altius, the tech-fest of NIT kurukshetra."
      </div>
      <TeamAnimation /> 
      <TeamDetails />
    </div>
  );
}