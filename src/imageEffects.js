const imageEffects = (src) => ({
  pencil: {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundBlendMode: "difference",
    backgroundPosition:
      "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
    filter: "brightness(2) invert(1) grayscale(1)",
    boxShadow: "inset 0 0 0 1px black"
  }
})

export default imageEffects
