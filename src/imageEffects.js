const mirrorEffects = (pos, before, after) => ({
  position: 'relative',
  '::before, ::after': {
    display: 'block',
    content: "''",
    position: 'absolute',
    ...pos
  },
  ...before,
  ...after
})

const imageEffects = src => ({
  airbrush: {
    position: 'relative',
    overflow: 'hidden',
    '::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'inherit',
      filter: 'brightness(1.5) saturate(100) blur(5px) contrast(5)',
      mixBlendMode: 'multiply'
    }
  },
  chalkboard: {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundBlendMode: 'difference',
    backgroundPosition:
      'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)',
    filter: 'brightness(1.5) grayscale(1)'
  },
  'colored-chalkboard': {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition:
      'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center',
    backgroundBlendMode: 'color, difference',
    filter: 'brightness(2)'
  },
  collage: {
    backgroundImage: `url(${src}), url(${src}), url(${src}), url(${src}), url(${src}), url(${src})`,
    backgroundSize: '200%, 80%, 60%, 50%, 40%, 100%',
    backgroundPosition: '50%, 80%, 30%, 0',
    backgroundBlendMode: 'overlay',
    backgroundRepeat: 'no-repeat'
  },
  'colored-pencil': {
    position: 'relative',
    '::before, ::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      boxShadow: 'inset 0 0 0 1px black'
    },
    '::before': {
      backgroundImage: `url(${src}), url(${src})`,
      backgroundBlendMode: 'difference',
      backgroundPosition:
        'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)',
      filter: 'brightness(2) invert(1) grayscale(1)'
    }
  },
  emboss: {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundBlendMode: 'difference, screen',
    backgroundPosition:
      'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center',
    filter: 'brightness(2) invert(1) grayscale(1)'
  },
  flannel: {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundPosition: 'center',
    backgroundSize: '100%, 100000% 100%, 100% 100000%',
    backgroundBlendMode: 'overlay'
  },
  hallucination: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'magenta',
    backgroundBlendMode: 'screen',
    '::before, ::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'inherit',
      mixBlendMode: 'multiply',
      transform: 'scale(1.05)'
    },
    '::before': {
      backgroundColor: 'yellow',
      backgroundBlendMode: 'screen',
      transformOrigin: 'top left'
    },
    '::after': {
      backgroundColor: 'cyan',
      backgroundBlendMode: 'screen',
      transformOrigin: 'bottom right'
    }
  },
  'low-ink-h': {
    backgroundImage: `url(${src}), url(${src}), url(${src})
`,
    backgroundSize: '100% 100%, 10000% 100%',
    backgroundBlendMode: 'screen, overlay'
  },
  'low-ink-v': {
    backgroundImage: `url(${src}), url(${src}), url(${src})`,
    backgroundSize: '100% 100%, 100% 1000%',
    backgroundBlendMode: 'screen, overlay'
  },
  'mirror-h': mirrorEffects(
    {
      top: 0,
      bottom: 0,
      background: 'inherit'
    },
    {
      '::before': {
        left: 0,
        right: '50%',
        transform: 'scaleX(-1)'
      }
    },
    {
      '::after': {
        left: '50%',
        right: 0
      }
    }
  ),
  'mirror-v': mirrorEffects(
    {
      left: 0,
      right: 0,
      background: 'inherit'
    },
    {
      '::before': {
        top: 0,
        bottom: '50%',
        transform: 'scaleY(-1)'
      }
    },
    {
      '::after': {
        top: '50%',
        bottom: 0
      }
    }
  ),
  mosaic: {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundSize: 'cover, 5% 5%',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  },
  'night-vision': {
    backgroundImage: `url(${src}), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  },
  none: {},
  pencil: {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundBlendMode: 'difference',
    backgroundPosition:
      'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)',
    filter: 'brightness(2) invert(1) grayscale(1)',
    boxShadow: 'inset 0 0 0 1px black'
  },
  'photo-border': {
    backgroundImage: `url(${src}), url(${src})`,
    backgroundPosition: 'center',
    backgroundSize: '60%, 20%',
    backgroundRepeat: 'no-repeat, repeat'
  },
  'selective-color': {
    position: 'relative',
    '::before, ::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'inherit',
      backgroundColor: 'red',
      backgroundBlendMode: 'screen',
      mixBlendMode: 'color',
      filter: 'brightness(3)'
    }
  },
  warhol: {
    backgroundImage: `linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(${src})`,
    backgroundSize: '50% 100%, 50% 100%, 50% 50%',
    backgroundPosition: 'top left, top right',
    backgroundRepeat: 'no-repeat, no-repeat, repeat',
    backgroundBlendMode: 'color'
  },
  watercolor: {
    position: 'relative',
    overflow: 'hidden',
    '::before, ::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover'
    },
    '::before': {
      backgroundImage: `url(${src}), url(${src})`,
      backgroundBlendMode: 'difference',
      backgroundPosition:
        'calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)',
      filter: 'brightness(2) invert(1) grayscale(1)',
      boxShadow: 'inset 0 0 0 1px black'
    },
    '::after': {
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      mixBlendMode: 'multiply',
      filter: 'brightness(1.3) blur(2px) contrast(2)'
    }
  }
})

export default imageEffects
