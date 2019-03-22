import React from 'react'
import { createImageComponent, IMAGE_EFFECT_PROP_TYPES } from '../utils'

const ImageEffect = ({ url, effect, width, height }) => {
  const Image = createImageComponent(width, height, url, effect)
  return <Image />
}

ImageEffect.propTypes = { ...IMAGE_EFFECT_PROP_TYPES }
ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
