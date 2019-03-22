import PropTypes from 'prop-types'
import styled from 'styled-components'
import imageEffects from '../components/imageEffects'

const createImageComponent = (w, h, u, e) => {
  const Image = styled.div`
    width: ${w};
    height: ${h};
    background-image: url(${u});
    background-size: cover;
    background-position: center;

    ${imageEffects(u)[e]}
  `
  return Image
}

const effects = [
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
]

const IMAGE_EFFECT_PROP_TYPES = {
  effect: PropTypes.oneOf(effects),
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

export { createImageComponent, effects, IMAGE_EFFECT_PROP_TYPES }
