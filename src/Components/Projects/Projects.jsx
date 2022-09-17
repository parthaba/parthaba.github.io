import React, { useRef, useEffect } from "react";
import "./Projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HartHouse from "./ProjectInfo/HartHouse";
import AutoTrader from "./ProjectInfo/AutoTrader";
import Personal from "./ProjectInfo/Personal";
import Pawpularity from "./ProjectInfo/Pawpularity";


export default function Projects() {

    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".harthouseimg"),
            {
                x:500,
                rotation: 40,
                opacity:0,
            },
            {
                x:0,
                rotation:4, 
                opacity:1,
                ease:"none",
                scrollTrigger: {
                    trigger: ".hhtrigger",
                    scroller: ".projects",
                    start: "center bottom",
                    end: "center center",
                    scrub: true
                  }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".traderautoimg"),
            {
                opacity:0,
                y:500,
                rotation: 30,
            },
            {
                opacity:1,
                y:0,
                rotation:-2,
                ease:"none",
                scrollTrigger: {
                    trigger: ".tatrigger",
                    scroller: ".projects",
                    start: "center bottom",
                    end: "center center",
                    scrub: true
                  }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".personalimg"),
            {
                opacity:0,
                y:-500,
                rotation: -30,
            },
            {
                opacity:1,
                rotation:6,
                y:0,
                ease:"none",
                scrollTrigger: {
                    trigger: ".webtrigger",
                    scroller: ".projects",
                    start: "center bottom",
                    end: "center center",
                    scrub: true

                  }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".pawpularityimg"),
            {
              opacity:0,
              x:500,
              rotation: 30,
          },
          {
              opacity:1,
              rotation:-6,
              x:0,
              ease:"none",
              scrollTrigger: {
                  trigger: ".pawtrigger",
                  scroller: ".projects",
                  start: "center bottom",
                  end: "center center",
                  scrub: true

                }
          }
      );
  }, []);

    return (
      <div className="projects">
        <div className="left-box">
          <div className="projects-item projects-title ">Scroll Here</div>
          <div className="projects-item projects-title hhtrigger"><HartHouse/></div>
          <div className="projects-item projects-title tatrigger"><AutoTrader/></div>
          <div className="projects-item projects-title webtrigger"><Personal/> </div>
          <div className="projects-item projects-title pawtrigger"><Pawpularity/></div>
        </div>
        <div ref={ref} className="right-box">
          <div className="projects-image-div ">
            <span className="scroll-div">Projects</span>
          </div>
          <div className="projects-image-div harthouseimg">
            <img
              className="projects-image "
              src="/images/projects/HartHouseWebsite.png"
              alt="HartHouse Points Website"
            />
          </div>
          <div className="projects-image-div traderautoimg">
            <img
              className="projects-image "
              src="/images/projects/TraderAutoWebsite.png"
              alt="TraderAuto Website"
            />
          </div>
          <div className="projects-image-div personalimg">
            <img
              className="projects-image "
              src="/images/projects/PersonalWebsite.png"
              alt="Personal Website"
            />
          </div>
          <div className="projects-image-div pawpularityimg">
            <img
              className="projects-image "
              src="/images/projects/Pawpularity.png"
              alt="Pawpularity"
            />
          </div>
        </div>
      </div>
    );
  }

