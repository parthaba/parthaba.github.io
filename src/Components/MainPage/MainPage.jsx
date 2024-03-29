import React, { Component } from "react";
import "./MainPage.css";
import MainGrid from "./MainGrid/MainGrid";
import Logo from "../Logo/Logo";

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Logo />
        <MainGrid />
        <div className="mobile-main">
          <div className="mobile-title">Ameen Parthab</div>
          <div className="mobile-resume"><a href="/images/ResumeAmeenParthab.pdf" target="_blank">Resume</a></div>
          <div className="mobile-icons">
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
        </div>
      </React.Fragment>
    );
  }
}
