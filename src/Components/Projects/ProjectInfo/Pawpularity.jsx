import React, { Component } from "react";
import Tag from "../../WorkExperience/Tags/Tag";
import "./ProjectInfo.css"

export default class Pawpularity extends Component {
  render() {
    return (
      <div>
      <div className="project-info">
        <div className="proj-title-div">
          <h1 className="project-title">Pawpularity.AI</h1>
          <a target={"_blank"} href="https://github.com/gnguralnick/learnai-pawpularity">
            <img
              className="git-icon"
              src="/images/icons/github.svg"
              alt="github"
            />
          </a>
        </div>
        <div className="project-tags-div">
            <Tag color="#a19997" name="Python"/>
            <Tag color="#a19997" name="NumPy"/>
            <Tag color="#a19997" name="Pandas"/>
            <Tag color="rgb(197, 165, 159)" name="Keras"/>
            <Tag color="rgb(197, 165, 159)" name="TensorFlow"/>


        </div>
        <div className="project-information">
            <ul>
                <li>Part of an AI based <a href="https://www.kaggle.com/c/petfinder-pawpularity-score">kaggle competition</a> </li>
                <li>Created an AI to determine the cuteness of an animal to aid animal shelters in taking the best photos</li>
                <li>Part of UofT LearnAI's final project</li>
            </ul>
        </div>
      </div>
      <div className="github-div">View more projects on my <a href="https://github.com/parthaba">github</a></div>
      </div>
    );
  }
}
