export const particlesConfig = {
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {

      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: false,
          force: 400,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      connect: {
        links: {
          opacity: 0.15,
          shadow: {
            blur: 2,
            enable: true,
          }
        },
        radius: 150,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffcc",
    },
    collisions: {
      enable: false,
    },
    move: {
      trail:{
        enable: true,
        length: 5,
      },
      outModes: {
        default: "out",
      },

    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 120,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maximumValue: 0.2,
      },
    },
    shadow: {
      blur:10,
      color: {
        value: "#ffffff",
      },
      enable: true,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
    wobble: {
      distance: 0.7,
      enable: true,
      speed: 0.7,
    },
  },

  detectRetina: true,
};
