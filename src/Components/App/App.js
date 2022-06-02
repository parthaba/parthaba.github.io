import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import WorkExperience from "../WorkExperience/WorkExperience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";

export default class App extends Component {
  render() {
    return (
      <Swiper
        Pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={1}
        noSwiping={true}
        noSwipingClass={"noSwipingClass"}
      >
        <SwiperSlide className="swiperslide-w">
          <Skills />
        </SwiperSlide>
        <SwiperSlide className="swiperslide-w">
          <Swiper
            Pagination={{
              clickable: true,
            }}
            direction={"vertical"}
            modules={[Pagination]}
            className="mySwiper2 swiper-v"
            initialSlide={1}
            noSwiping={true}
            noSwipingClass={"noSwipingClass"}
          >
            <SwiperSlide className="swiperslide-v">a</SwiperSlide>
            <SwiperSlide className="swiperslide-v">
              <MainPage />
            </SwiperSlide>
            <SwiperSlide noSwiping={true} className="swiperslide-v">
              <WorkExperience />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide className="swiperslide-w">
          <Education />
        </SwiperSlide>
      </Swiper>
      // <WorkExperience />
    );
  }
}
