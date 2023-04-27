import React from "react";
import "./Projects.css";

import AutoTrader from "./ProjectInfo/AutoTrader";
import HartHouse from "./ProjectInfo/HartHouse";
import Pawpularity from "./ProjectInfo/Pawpularity";
import Personal from "./ProjectInfo/Personal";

export default function ProjectsMobile() {
  return (
    <div className="projects">
      <div className="left-box-mobile">
        <div className="projects-item projects-title ">Projects!</div>
        <div className="projects-item projects-title">
          <HartHouse />
          <img
            className="projects-image "
            src="/images/projects/HartHouseWebsite.png"
            alt="HartHouse Points Website"
          />
        </div>
        <div className="projects-item projects-title">
          <AutoTrader />
          <img
            className="projects-image "
            src="/images/projects/TraderAutoWebsite.png"
            alt="TraderAuto Website"
          />
        </div>
        <div className="projects-item projects-title">
          <Personal />
          <img
            className="projects-image "
            src="/images/projects/PersonalWebsite.png"
            alt="Personal Website"
          />
        </div>
      </div>
    </div>
  );
}
