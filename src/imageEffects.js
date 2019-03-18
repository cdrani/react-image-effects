const imageEffects = src => ({
  "night-vision": {
    backgroundImage: `url(${src}), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  },
  "pencil": {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundBlendMode: "difference",
    backgroundPosition:
      "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
    filter: "brightness(2) invert(1) grayscale(1)",
    boxShadow: "inset 0 0 0 1px black"
  },
  "emboss": {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundBlendMode: "difference, screen",
    backgroundPosition:
      "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center",
    filter: "brightness(2) invert(1) grayscale(1)"
  },
  "flannel": {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundPosition: "center",
    backgroundSize: "100%, 100000% 100%, 100% 100000%",
    backgroundBlendMode: "overlay"
  }
});

export default imageEffects;
