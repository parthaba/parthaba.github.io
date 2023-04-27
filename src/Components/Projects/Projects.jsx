import React, { useState } from "react";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

export default function Projects() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <ProjectsMobile /> : <ProjectsDesktop />;
}
