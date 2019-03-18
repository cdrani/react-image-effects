import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import imageEffects from "./imageEffects";

const ImageEffect = ({ url, effect }) => {
  const Image = styled.div`
    width: 600px;
    height: 300px;
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    background-position: center;
  `;

  const effectObject = imageEffects(url)[effect]

  const Effect = styled(Image)`
  ${effectObject}
  `
  return <Effect url={url} />;
};

ImageEffect.propTypes = {
  url: PropTypes.string.isRequired,
  effect: PropTypes.oneOf([
    "none",
    "pencil",
    "watercolor",
    "emboss",
    "colored-pencil",
    "chalkboard",
    "colored-chalkboard",
    "airbrush",
    "hallucination",
    "flannel",
    "low-ink-v",
    "low-ink-h",
    "collage",
    "mosaic",
    "photo-border",
    "infrared",
    "night-vision",
    "warhol",
    "selective-color",
    "mirror-h",
    "mirror-v"
  ])
};

ImageEffect.defaultProps = {
  effect: "none"
};

export default ImageEffect;
