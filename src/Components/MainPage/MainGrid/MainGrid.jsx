import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./MainGrid.css";
import GridItemMove from './GridItem';

export default function MainGrid() {

      const el = useRef();
      const q = gsap.utils.selector(el);
      const tl = useRef();


      useEffect(() => {

        tl.current = gsap.timeline()
        .set(q(".grid__item"), {scale: 0.7, opacity: 0}, 0)
        .to(q(".grid__item"), {
            delay: 0.5,
            duration: 3,
            ease: 'Expo.easeOut',
            scale: 1,
            stagger: {amount: 0.6, grid: 'auto', from: 'center'}
        }, 0)
        .to(q(".lighten"), {
            delay: 0.5,
            duration: 3,
            ease: 'Power1.easeOut',
            opacity: 1,
            stagger: {amount: 0.6, grid: 'auto', from: 'center'}
        }, 0)
        .to(q(".darken"), {
            delay: 0.5,
            duration: 3,
            ease: 'Power1.easeOut',
            opacity: 0.7,
        }, 0);
      });


    return (
      <div className='main-grid' ref={el}>
          <GridItemMove></GridItemMove>
      </div>
    );
  }

