import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ImageEffect from '../src/'
import { effects } from '../src/utils'

const stories = storiesOf('ImageEffect', module)
stories.addDecorator(
  withInfo({
    propTablesExclude: [ImageEffect],
    inline: true
  })
)

stories.addDecorator(storyFn => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      margin: '0 auto'
    }}
  >
    {storyFn()}
  </div>
))

effects.forEach(effect => {
  stories.add(effect, () => (
    <ImageEffect
      url='https://picsum.photos/900/500'
      effect={effect}
      width='100%'
      height='350px'
    />
  ))
})
