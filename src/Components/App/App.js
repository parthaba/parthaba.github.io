import React, { useEffect, useState } from "react";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import WorkExperience from "../WorkExperience/WorkExperience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import LoadingScreen from "../Loading/LoadingScreen";
import Projects from "../Projects/Projects";
import Logo from "../Logo/Logo";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper main swiper-backface-hidden"
          allowTouchMove={false}
        >
          <SwiperSlide id="MainPage" className="swiperslide">
            <MainPage />
          </SwiperSlide>
          <SwiperSlide id="Projects" className="swiperslide">
            <Logo />
            <Projects />
          </SwiperSlide>
          <SwiperSlide id="Skills" className="swiperslide">
            <Skills />
          </SwiperSlide>
          <SwiperSlide id="WorkExperience" className="swiperslide">
            <WorkExperience />
          </SwiperSlide>
          <SwiperSlide id="Education" noSwiping={true} className="swiperslide">
            <Education />
          </SwiperSlide>
        </Swiper>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
