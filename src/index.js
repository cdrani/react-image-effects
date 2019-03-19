import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import imageEffects from './imageEffects'

const ImageEffect = ({ url, effect, width, height }) => {
  const Image = styled.div`
    width: ${width};
    height: ${height};
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    background-position: center;
  `

  const effectObject = imageEffects(url)[effect]

  const Effect = styled(Image)`
    ${effectObject}
  `
  return <Effect url={url} />
}

ImageEffect.propTypes = {
  url: PropTypes.string.isRequired,
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
  width: PropTypes.string,
  height: PropTypes.string
}

ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
