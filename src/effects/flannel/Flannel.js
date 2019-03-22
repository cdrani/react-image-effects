import React from 'react'
import PropTypes from 'prop-types'
import { createImageComponent } from '../../utils'

/**
 * @visibleName flannel
 */

const ImageEffect = ({ url, effect, width, height }) => {
  const Image = createImageComponent(width, height, url, effect)
  return <Image />
}

ImageEffect.propTypes = {
  /** local or remote path to image */
  url: PropTypes.string.isRequired,
  /** image effects */
  effect: PropTypes.oneOf([
    'airbrush',
    'chalkboard',
    'collage',
    'colored-chalkboard',
    'colored-pencil',
    'emboss',
    'flannel',
    'hallucination',
    'infrared',
    'low-ink-h',
    'low-ink-v',
    'mirror-h',
    'mirror-v',
    'mosaic',
    'night-vision',
    'none',
    'pencil',
    'photo-border',
    'selective-color',
    'warhol',
    'watercolor'
  ]),
  /** width of image/component */
  width: PropTypes.string,
  /** width of image/component */
  height: PropTypes.string
}

ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
