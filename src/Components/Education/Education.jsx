import React, { Component } from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "./ParticlesConfig";
import { loadFull } from "tsparticles";
import "./Education.css";
import Logo from "../Logo/Logo";

export default class Education extends Component {
  render() {
    const particlesInit = async (main) => {
      await loadFull(main);
    };
    return (
      <React.Fragment>
        <Logo />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
        <div class="education">
            <div className="center-content">
              <div className="edu-title glow">Education</div>
                        <ul class="education__list">
              <li>
                <h4 class=" eduh4 glow">University of Toronto</h4>
                <ul class="education__list__list">
                  <li>President's Scholar of Excellence ($10,000)</li>
                  <li>CGPA: 3.91</li>
                  <li>
                    TLI: One of twenty students chosen by the computer science
                    department for leadership skills
                  </li>
                </ul>
              </li>
              <li>
                <h4 class="eduh4 glow">Google IT Certificate</h4>
                <ul class="education__list__list">
                  <li class="">
                    Extensive teaching in computer networking, OSes, sysadmin, and
                    data security
                  </li>
                  <li class="">
                    8 month certification process with tests, VMs, and networking
                    opportunities
                  </li>
                </ul>
              </li>
              <li>
                <h4 class=" eduh4 glow">UofT LearnAI</h4>
                <ul class="education__list__list">
                  <li></li>
                  <li>
                    UofT course teaching students how to create and manage AI
                    software
                  </li>
                  <li>
                    Have experience in Numpy, Panda, neural networks, and NLP
                  </li>
                </ul>
              </li>
                        </ul>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
