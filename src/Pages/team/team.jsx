import React, { useState, useEffect } from "react";
import "./team.css";
import TeamAnimation from "../../components/teamAnimation";
import TeamDetails from "../../components/teamDetails";
export default function Team() {
  return (
    <div className="team">
      <div className="team-heading">Team Techspardha</div>
      <div className="sub-team-heading">
        Meet the People who worked countless hours behind the scenes to bring
        you the Spectacle, that is Altius, the tech-fest of NIT kurukshetra.
      </div>
      <TeamAnimation />
      <TeamDetails />
    </div>
  );
}