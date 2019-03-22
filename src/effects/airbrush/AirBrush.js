import React from 'react'
import AirBrush from './../../../'
import imageEffectProps from '../../types'

/**
 * @visibleName airbrush
 */

const ImageEffect = ({ url, effect, width, height }) => (
  <AirBrush url={url} effect={effect} width={width} height={height} />
)

ImageEffect.propTypes = imageEffectProps

export default ImageEffect
