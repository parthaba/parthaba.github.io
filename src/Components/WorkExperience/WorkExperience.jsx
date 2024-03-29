import React, { Component } from "react";
import "./WorkExperience.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Tag from "./Tags/Tag";
import Logo from "../Logo/Logo";

export default class WorkExperience extends Component {
  render() {
    return (
      <div className="work-background ">
        <Logo />
        <Swiper
          navigation={true}
          direction="vertical"
          modules={[Navigation]}
          className="noSwipingClass work-swiper"
        >
          <SwiperSlide>
            <div className="workexperience">
              <div className="workexperience-title neon">
                <h1>Work Experience</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="workexperience">
              <div className="job-box cibc-box">
                <div className="job-title">CIBC</div>
                <div className="icon CIBC">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200.000000 200.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <filter id="hand-glow">
                        <feGaussianBlur
                          stdDeviation="0.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="globe-glow">
                        <feGaussianBlur
                          stdDeviation="0.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="cibc-glow">
                        <feGaussianBlur
                          stdDeviation="30"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g
                      transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M696 1800 c-40 -12 -67 -40 -154 -160 -42 -58 -163 -223 -269 -367
                -106 -144 -193 -267 -193 -273 0 -13 510 -711 554 -758 16 -18 46 -37 66 -42
                19 -5 163 -10 320 -10 255 0 289 2 325 19 33 15 66 53 190 222 82 112 209 286
                283 386 l134 183 -134 182 c-74 101 -201 275 -283 387 -124 169 -157 207 -190
                222 -36 17 -70 18 -330 18 -159 0 -303 -5 -319 -9z m525 -522 c106 -145 193
                -270 193 -278 0 -12 -280 -403 -385 -538 -17 -22 -17 -22 -222 255 -112 153
                -201 283 -198 290 14 27 405 533 412 533 4 0 94 -118 200 -262z"
                        filter="url(#cibc-glow)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="job-name">Application Developer</div>
                <div className="job-tags">
                  <Tag color="#0aa" name="React" glow={true} ></Tag>
                  <Tag color="#0aa" name="HTML/CSS" glow={true} ></Tag>
                  <Tag color="#a00" name="PowerShell" glow={true} ></Tag>
                  <Tag color="#a0a" name="JavaScript" glow={true} ></Tag>
                  <Tag color="#a0a" name="C#" glow={true} ></Tag>
                  <Tag color="#aa0" name="MsSQL" glow={true} ></Tag>
                  <Tag color="#0aa" name="MUI" glow={true} ></Tag>
                  <Tag color="#0aa" name="Bootstrap" glow={true} ></Tag>
                </div>
                <div className="job-info">
                  Migrating 4 major CIBC Capital Market applications from on-prem
                  servers to Microsoft Azure
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="workexperience">
              <div className="job-box tba-box">
                <div className="job-title">TBA Debate</div>

                <div className="icon globe">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      id="globepath"
                      d="M10 .4C4.705.4.399 4.707.399 10c0 5.293 4.306 9.6 9.601 9.6 5.293 0 9.6-4.307 9.6-9.6 0-5.293-4.307-9.6-9.6-9.6zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936 0-.297-.328-1.338-.328-2.23 0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 0 1 6.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 0 1-7.089.945z"
                    />
                    <path
                      filter="url(#globe-glow)"
                      d="M10 .4C4.705.4.399 4.707.399 10c0 5.293 4.306 9.6 9.601 9.6 5.293 0 9.6-4.307 9.6-9.6 0-5.293-4.307-9.6-9.6-9.6zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936 0-.297-.328-1.338-.328-2.23 0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 0 1 6.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 0 1-7.089.945z"
                    />
                  </svg>
                </div>
                <div className="job-name">Front-End Developer</div>
                <div className="job-tags">
                  <Tag color="#0aa" name="React" glow={true} ></Tag>
                  <Tag color="#0aa" name="HTML/CSS" glow={true} ></Tag>
                  <Tag color="#a0a" name="Python" glow={true} ></Tag>
                  <Tag color="#aa0" name="MySQL" glow={true} ></Tag>
                  <Tag color="#aa0" name="Django" glow={true} ></Tag>
                  <Tag color="#0aa" name="MUI" glow={true} ></Tag>
                </div>
                <div className="job-info">
                  Made changes to improve the latency of TBA Debate’s website
                  and the organization of their database
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="workexperience">
              <div className="job-box sms-box">
                <div className="job-title">Spirit of Math</div>
                <div className="icon hand">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      filter="url(#hand-glow)"
                      d="M17.924 17.315c-.057.174-.193.367-.416.432-.161.047-5.488 1.59-5.652 1.633-.469.125-.795.033-1.009-.156-.326-.287-4.093-2.85-8.845-3.092-.508-.025-.259-1.951 1.193-1.951.995 0 3.904.723 4.255.371.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 0 1 1.937-.781L8.361 8.37c.193.48.431.662.69.562.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 0 1 7.796.871a1.042 1.042 0 0 1 1.325.652l1.946 5.732c.172.504.354.768.642.646.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 1 1 2.027-.506l1.26 5.042c.184.741.353 1.008.646.935.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 0 1 1.86-.375l.948 4.711.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527 1.085 2.889.519 5.564.334 6.143z"
                    />
                  </svg>
                </div>
                <div className="job-name sms-name">
                  Private Tutor/Assistant Teacher
                </div>
                <div className="job-tags">
                  <Tag color="#0aa" name="Math" glow={true} ></Tag>
                  <Tag color="#0aa" name="Data-Management" glow={true} ></Tag>
                  <Tag color="#a0a" name="CS" glow={true} ></Tag>
                  <Tag color="#a0a" name="Physics" glow={true} ></Tag>
                  <Tag color="#aa0" name="English" glow={true} ></Tag>
                  <Tag color="#aa0" name="Law" glow={true} ></Tag>
                </div>
                <div className="job-info">
                  Tutored students (individual + classes) from Grade 2-12 in
                  English, Math, Law, Physics, and CS
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
