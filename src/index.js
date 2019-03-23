import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import imageEffects from './imageEffects'
import effects from './effects'

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
  /** local or remote link to image */
  url: PropTypes.string.isRequired,
  /** effects to apply on image */
  effect: PropTypes.oneOf(effects),
  /** width of component */
  width: PropTypes.string,
  /** height of component */
  height: PropTypes.string
}

ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
