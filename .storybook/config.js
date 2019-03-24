import { addParameters, configure } from '@storybook/react'

addParameters({
  options: {
    showPanel: false
  }
})

const loadStories = () => {
  require('../stories/index.js')
}

configure(loadStories, module)
