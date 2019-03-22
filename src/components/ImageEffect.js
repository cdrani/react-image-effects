import React from 'react'
import styled from 'styled-components'
import imageEffects from './imageEffects'
import imageEffectProps from '../types'

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

ImageEffect.propTypes = imageEffectProps

ImageEffect.defaultProps = {
  effect: 'none',
  width: '600px',
  height: '300px'
}

export default ImageEffect
