import React, { useState, useEffect } from "react";
import anshika from "../../images/anshika.jpeg";
import "./team.css";
import axios from "axios";
import TeamAnimation from "../../components/teamAnimation";
import TeamDetails from "../../components/teamDetails";
export default function Team() {
  return (
    <div className="team">
      <div className="team-heading">TEAM ALTIUS</div>
      <TeamAnimation />
      <TeamDetails />
    </div>
  );
}
