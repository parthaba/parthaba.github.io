import React, { Component } from "react";
import Tag from "../../WorkExperience/Tags/Tag";
import "./ProjectInfo.css";

export default class HartHouse extends Component {
  render() {
    return (
      <div className="project-info">
        <div className="proj-title-div">
          <h1 className="project-title">HartHouse Points</h1>
          <a
            target={"_blank"}
            href="https://github.com/parthaba/HartHouse-Point-System"
          >
            <img
              className="git-icon"
              src="/images/icons/github.svg"
              alt="github"
            />
          </a>
        </div>
        <div className="project-tags-div">
          <Tag color="#a19997" name="HTML/CSS" />
          <Tag color="#a19997" name="Angular" />
          <Tag color="#a19997" name="JavaScript" />
          <Tag color="rgb(197, 165, 159)" name="Python" />
          <Tag color="rgb(197, 165, 159)" name="Django" />
          <Tag color="rgb(243, 228, 224)" name="MongoDB" />
          <Tag color="rgb(243, 228, 224)" name="MySQL" />
          <Tag color="rgb(243, 228, 224)" name="Heroku" />
        </div>
        <div className="project-information">
          <ul>
            <li>
              In the process of creating a website to better interact with
              information (picture attached)
            </li>
            <li>
              Created a Python script to automatically access and store data
              taken from a Heroku platform API
            </li>
            <li>
              Stores and manages information for thousands of debaters on
              MongoDB.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
