import React, { Component } from "react";
import "./MainGrid.css";

export default class NavigateCard extends Component {
  render() {
    return (
      <div className="navigate-card">
        <div className="navigation__div">
          <div className="navigate">Navigate</div>
          <div className="navigate">With</div>
          <div className="navigate">Arrows</div>
        </div>
      </div>
    );
  }
}
