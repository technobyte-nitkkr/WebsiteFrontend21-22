import React from "react";
import { interaction } from "./button";
import { Link } from "react-router-dom";
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
                <span className="icon-picture"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/categories">
                <span className="icon-headphones"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                <span className="icon-home"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/lectures">
                <span className="icon-facetime-video"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/sponsors">
                <span className="icon-envelope-alt"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/testimonial">
                <span className="icon-envelope-alt"></span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/devs">
                <span className="icon-envelope-alt"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="cn-overlay" class="cn-overlay"></div>
      </div>
    </div>
  );
}
