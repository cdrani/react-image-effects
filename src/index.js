import 'react' from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ImageEffect = ({ src, effect }) => {
  const Image = styled.img`
    background-image: ${props => url(props.src)};
    background-size: cover;
    background-position: center;
  `

  const Effect = styled(Image)(imageEffects[effect])
  return <Effect src={src} />
}


ImageEffect.propTypes = {
  src: PropTypes.string.isRequired,
  effect: PropTypes.oneOf([
    'none',
    'pencil',
    'watercolor',
    'emboss',
    'colored-pencil',
    'chalkboard',
    'colored-chalkboard',
    'airbrush',
    'hallucination',
    'flannel',
    'low-ink-v',
    'low-ink-h',
    'collage',
    'mosaic',
    'photo-border',
    'infrared',
    'night-vision',
    'warhol',
    'selective-color'
    'mirror-h',
    'mirror-v'
  ])
}

ImageEffect.defaultProps = {
  effect: 'none'
}

export default ImageEffect
