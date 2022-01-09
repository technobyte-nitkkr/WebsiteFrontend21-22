import React from "react";
import { interaction } from "./button";
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
              <a className="link" href="/a">
                <span className="icon-picture"></span>
              </a>
            </li>
            <li>
              <a className="link" href="/b">
                <span className="icon-headphones"></span>
              </a>
            </li>
            <li>
              <a className="link" href="/c">
                <span className="icon-home"></span>
              </a>
            </li>
            <li>
              <a className="link" href="/d">
                <span className="icon-facetime-video"></span>
              </a>
            </li>
            <li>
              <a className="link" href="/e">
                <span className="icon-envelope-alt"></span>
              </a>
            </li>
            <li>
              <a className="link" href="#">
                <span className="icon-envelope-alt"></span>
              </a>
            </li>
            <li>
              <a className="link" href="#">
                <span className="icon-envelope-alt"></span>
              </a>
            </li>
          </ul>
        </div>
        <div id="cn-overlay" class="cn-overlay"></div>
      </div>
    </div>
  );
}
