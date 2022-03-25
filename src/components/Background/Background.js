import React from "react";
// import './Background.css'
import Particles from "react-tsparticles";

function Background() {
  return (
    
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#00FFFF2f",
            //  opacity: 0.4,
          },
          shape: {
            type: "circle",
          
            // opacity: 0.4,
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: "random",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Background;
