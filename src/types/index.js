import PropTypes from 'prop-types'

export default {
  /**
   * local or remote link to image
   */
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
  /**
   * width of component
   */
  width: PropTypes.string,
  /**
   * height of component
   */
  height: PropTypes.string
}
