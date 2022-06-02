import React, { Component } from "react";
import "./MainGrid.css";

export default class NavigateCard extends Component {
  render() {
    return (
      <div className="navigate-card">
        <div className="navigation__div">
          <div className="navigate">Drag</div>
          <div className="navigation">
            <img className="left" src="/images/icons/arrow.png" alt="Left: " />
            Skills
          </div>
          <div className="navigation">
            <img className="down" src="/images/icons/arrow.png" alt="Down: " />
            Work
          </div>
          <div className="navigation">
            <img
              className="right"
              src="/images/icons/arrow.png"
              alt="Right: "
            />
            Education
          </div>
          <div className="navigation">
            <img className="up" src="/images/icons/arrow.png" alt="Up: " />
            Projects
          </div>
        </div>
      </div>
    );
  }
}
