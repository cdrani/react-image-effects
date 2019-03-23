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
