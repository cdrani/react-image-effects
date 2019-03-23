import React from 'react'
import { storiesOf } from '@storybook/react'
import ImageEffect from '../src/'

storiesOf('ImageEffect', module)
  .addDecorator(storyFn => <div style={{ margin: '0 auto' }}>{storyFn()}</div>)
  .add('airbrush', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='airbrush'
      width='900px'
      height='300px'
    />
  ))
  .add('chalkboard', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='chalkboard'
      width='900px'
      height='300px'
    />
  ))
  .add('collage', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='collage'
      width='900px'
      height='300px'
    />
  ))
  .add('colored-chalkboard', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='colored-chalkboard'
      width='900px'
      height='300px'
    />
  ))
  .add('colored-pencil', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='colored-pencil'
      width='900px'
      height='300px'
    />
  ))
  .add('emboss', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='emboss'
      width='900px'
      height='300px'
    />
  ))
  .add('flannel', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='flannel'
      width='900px'
      height='300px'
    />
  ))
  .add('hallucination', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='hallucination'
      width='900px'
      height='300px'
    />
  ))
  .add('infrared', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='infrared'
      width='900px'
      height='300px'
    />
  ))
  .add('low-ink-h', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='low-ink-h'
      width='900px'
      height='300px'
    />
  ))
  .add('low-ink-v', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='low-ink-v'
      width='900px'
      height='300px'
    />
  ))
  .add('mirror-h', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='mirror-h'
      width='900px'
      height='300px'
    />
  ))
  .add('mirror-v', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='mirror-v'
      width='900px'
      height='300px'
    />
  ))
  .add('mosaic', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='mosaic'
      width='900px'
      height='300px'
    />
  ))
  .add('night-vision', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='night-vision'
      width='900px'
      height='300px'
    />
  ))
  .add('none', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='none'
      width='900px'
      height='300px'
    />
  ))
  .add('pencil', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='pencil'
      width='900px'
      height='300px'
    />
  ))
  .add('photo-border', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='photo-border'
      width='900px'
      height='300px'
    />
  ))
  .add('selective-color', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='selective-color'
      width='900px'
      height='300px'
    />
  ))
  .add('warhol', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='warhol'
      width='900px'
      height='300px'
    />
  ))
  .add('watercolor', () => (
    <ImageEffect
      url='https://picsum.photos/900/300'
      effect='watercolor'
      width='900px'
      height='300px'
    />
  ))
