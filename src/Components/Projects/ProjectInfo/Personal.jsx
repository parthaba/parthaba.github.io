import React, { Component } from "react";
import Tag from "../../WorkExperience/Tags/Tag";
import "./ProjectInfo.css"

export default class Personal extends Component {
  render() {
    return (
      <div className="project-info">
        <div className="proj-title-div">
          <h1 className="project-title">Personal Website</h1>
          <a target={"_blank"} href="https://github.com/parthaba/parthaba.github.io">
            <img
              className="git-icon"
              src="/images/icons/github.svg"
              alt="github"
            />
          </a>
        </div>
        <div className="project-tags-div">
            <Tag color="#a19997" name="HTML/CSS"/>
            <Tag color="#a19997" name="React"/>
            <Tag color="#a19997" name="JavaScript"/>
            <Tag color="rgb(197, 165, 159)" name="GreenSock"/>
            <Tag color="rgb(197, 165, 159)" name="SwiperJS"/>


        </div>
        <div className="project-information">
            <ul>
                <li>Made using React and uploaded to GitHub pages</li>
                <li>All animations made using gsap and CSS/SVG logic</li>
                <li>Manually implemented CSS animated loading screen</li>
            </ul>
        </div>
      </div>
    );
  }
}
