import React, { Component } from "react";
import Tag from "../../WorkExperience/Tags/Tag";
import "./ProjectInfo.css"

export default class AutoTrader extends Component {
  render() {
    return (
      <div className="project-info">
        <div className="proj-title-div">
          <h1 className="project-title">AutoTrader</h1>
          <a target={"_blank"} href="https://github.com/autotrader-plus">
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
            <Tag color="rgb(197, 165, 159)" name="Java"/>
            <Tag color="rgb(243, 228, 224)" name="MySQL"/>
            <Tag color="rgb(243, 228, 224)" name="AWS"/>

        </div>
        <div className="project-information">
            <ul>
                <li>School club partnered with an industry partner (Senso.AI) to create an AI based loan calculator</li>
                <li>Allowed users to sign-up to store data. Called APIs to calculate user's likelihood of approval</li>
                <li>Hosted using AWS Amplify, EC2, RDS with all information encrypted</li>
            </ul>
        </div>
      </div>
    );
  }
}
