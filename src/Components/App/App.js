import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import WorkExperience from "../WorkExperience/WorkExperience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";

export default class App extends Component {
  render() {
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper main"
        initialSlide={2}
        noSwiping={true}
        noSwipingClass={"noSwipingClass"}
      >
        <SwiperSlide className="swiperslide">a</SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Skills />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <MainPage />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Education />
        </SwiperSlide>
        <SwiperSlide noSwiping={true} className="swiperslide">
          <WorkExperience />
        </SwiperSlide>
      </Swiper>
      // <WorkExperience />
    );
  }
}
