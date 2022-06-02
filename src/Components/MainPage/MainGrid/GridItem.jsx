import { useEffect, useRef, useState, useImperativeHandle, forwardRef} from "react";
import gsap from "gsap";
import React from "react";
import NavigateCard from "./NavigateCard";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }


const GridItemStatic = forwardRef(({ styleName, randMove, bkg, text}, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
            x=x/randMove;
            y=y/randMove;
          gsap.to(el.current, { x, y });
        },
      };
    },
  );

  return <div
      className={`grid__item ${styleName}`}
      style={ bkg ? {backgroundImage: `url(${bkg})`} : {}}
      ref={el}
      >
        <span>
          {text}
        </span>
      </div>;
});

export default function GridItemMove() {
    const gridRefs = useRef([])

    gridRefs.current = [];

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        gridRefs.current.forEach(ref =>
            ref.moveTo(width, height));

        const onMove = ({ clientX, clientY}) => {
            gridRefs.current.forEach(ref => 
                ref.moveTo(clientX, clientY));
        };

        window.addEventListener("pointermove", onMove);

        return () =>
        window.removeEventListener("pointermove", onMove);
    }, []);

    const addGridRef = ref => {
        if (ref) {
            gridRefs.current.push(ref);
        }
    };

    return (
        <React.Fragment>
        <GridItemStatic randMove={10} ref={addGridRef} styleName="pos-0 lighten" text="Ameen Parthab" />
        <GridItemStatic randMove={15} ref={addGridRef} styleName="pos-1 lighten software" text="Software Developer" />
        <GridItemStatic randMove={-7} ref={addGridRef} styleName="pos-2 darken" bkg="/images/me/vibing.jpg" />
        <GridItemStatic randMove={8} ref={addGridRef} styleName="pos-3 lighten" text={<NavigateCard/>} />
        <GridItemStatic randMove={5} ref={addGridRef} styleName="pos-4 lighten resume noSwipingClass" text={<a href="/images/ResumeAmeenParthab.pdf" target="_blank">Resume</a>} />
        <GridItemStatic randMove={-15} ref={addGridRef} styleName="pos-5 darken" bkg="/images/me/beach.jpeg" />
        {/* <GridItemStatic randMove={10} ref={addGridRef} styleName="pos-6 lighten library" text={<Libraries />} /> */}
        <GridItemStatic randMove={10} ref={addGridRef} styleName="pos-6 lighten in-prod" text={"Incomplete"} />
        <GridItemStatic randMove={-5} ref={addGridRef} styleName="pos-7 darken" bkg="/images/me/square-one.png" />
        </React.Fragment>
    )
}