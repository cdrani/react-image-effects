import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import imageEffects from './imageEffects'
import { effects } from './utils'

const ImageEffect = ({ url, effect, width, height, children }) => {
  const Image = styled.div`
    width: ${width};
    height: ${height};
    background-image: url(${url});
    background-size: cover;
    background-position: center;

    ${imageEffects(url)[effect]}
  `
  return <Image url={url}>{children}</Image>
}

ImageEffect.propTypes = {
  /** local or remote link to image */
  url: PropTypes.string.isRequired,
  /** effects to apply on image */
  effect: PropTypes.oneOf(effects),
  /** width of component */
  width: PropTypes.string,
  /** height of component */
  height: PropTypes.string,
  /** React element */
  children: PropTypes.element
}

ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
