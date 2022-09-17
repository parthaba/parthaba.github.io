import React, { Component } from "react";
import "./MainGrid.css";

export default class Media extends Component {
  render() {
    return (
      <div className="media-box">
        <a target={"_blank"} href="https://github.com/parthaba">
          <img
            className="media-icon"
            src="/images/icons/github.svg"
            alt="github"
          />
        </a>
        <a
          target={"_blank"}
          href="https://www.facebook.com/profile.php?id=100006030679406"
        >
          <img
            className="media-icon"
            src="/images/icons/facebook.svg"
            alt="facebook"
          />
        </a>
        <a target={"_blank"} href="https://www.linkedin.com/in/ameen-parthab">
          <img
            className="media-icon"
            src="/images/icons/linkedin.svg"
            alt="linked in"
          />
        </a>
      </div>
    );
  }
}
