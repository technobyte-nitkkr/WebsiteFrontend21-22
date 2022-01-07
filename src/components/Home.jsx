import React, { useEffect } from "react";
import laptop from "../images/laptop.svg";
import wave from "../images/wave.svg";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import dat from "dat.gui";
import "./home.scss";
export default function Home() {
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
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-in-sine", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text" data-aos="flip-left">
          <div className="home-text-div">
            <span>A</span>
            <span>L</span>
            <span>T</span>
            <span>I</span>
            <span>U</span>
            <span>S</span>
          </div>
        </div>
        <nav class="circle-menu">
          <div class="center"></div>
          <ul>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Team Altius</a>
            </li>
            <li>
              <a href="#">Guest Lecture</a>
            </li>
            <li>
              <a href="#">Sponsors</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer">
        <p></p>
      </div>
    </div>
  );
}

/*

  <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </section>

    <div className="home-img" data-aos="fade-left" data-aos-delay="900">
          <div className="home-icons">
            <i class="fab fa-github"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-github"></i>
          </div>
          <img className="laptop" src={laptop}></img>
        </div>

      <div className="home-links">
          <div className="home-1">
            <div className="redirect-left">About</div>
            <div className="line-left"></div>
            <div className="diamond1"></div>
          </div>
          <div className="home-2 up">
            <div className="redirect-left">About</div>
            <div className="line-left"></div>
            <div className="diamond1"></div>
            <div className="diamond1"></div>
            <div className="line-right"></div>
            <div className="redirect-right">About</div>
          </div>
          <div className="home-1 up">
            <div className="diamond1"></div>
          </div>
          <div className="home-2 up">
            <div className="diamond1"></div>
            <div className="diamond1"></div>
          </div>
          <div className="home-1 up">
            <div className="diamond1"></div>
          </div>
        </div>
*/
