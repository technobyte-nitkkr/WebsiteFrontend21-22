import React from "react";
// import './Background.css'
import Particles from "react-tsparticles";
import particlesConfig  from "./particles.json"
function Background() {
  return (
    
    <Particles
      className="particles"
      params={particlesConfig}
    />
  );
}

export default Background;
