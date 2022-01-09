import React from "react";
import { interaction } from "./button";
import { Link } from "react-router-dom";
import Lecture from "../../../icons/lecture.png";
import Team from "../../../icons/team.png";
import About from "../../../icons/about.png";
import testimonial from "../../../icons/testimonial.png";
import event from "../../../icons/event.png";
import sponsor from "../../../icons/sponsor.png";
import dev from "../../../icons/dev.png";

export default function HomeButtons() {
  return (
    <div>
      <div className="csstranforms">
        <button className="cn-button" id="cn-button">
          +
        </button>
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
            <li>
              <Link className="link" to="/about">
                <span>
                  <img src={About}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/categories">
                <span>
                  <img src={event}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/team">
                <span>
                  <img src={Team}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/lectures">
                <span>
                  <img src={Lecture}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/sponsors">
                <span>
                  <img className="small" src={sponsor}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/testimonial">
                <span>
                  <img className="small" src={testimonial}></img>
                </span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/devs">
                <span>
                  <img src={dev}></img>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="cn-overlay" class="cn-overlay"></div>
      </div>
    </div>
  );
}
