import React, { useEffect } from "react";
import "./developers.css";
import anshika from "../images/anshika.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Developers() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="developers">
      <h1>DEVELOPERS</h1>
      <div className="developers-container">
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h1>Anshika Jain</h1>
              <p>
                <a href="https://github.com/Anuj-0911" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-mehta-b35766191/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/anuj__0911/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
          <h1 className="name">Anshika Jain</h1>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
        <div className="hexagon" data-aos="flip-left">
          <div className="shape">
            <img src={anshika}></img>
            <div className="developers-content">
              <h2>Anshika Jain</h2>
              <p>Logos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Developers}
