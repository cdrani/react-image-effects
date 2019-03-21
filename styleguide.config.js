const path = require('path')

module.exports = {
  title: 'React Image Effects',
  pagePerSection: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  sections: [
    {
      name: 'React Image Effects',
      content: 'docs/react-image-effects.md',
      description: 'welcome'
    },
    {
      name: 'Getting Started',
      content: 'docs/getting-started.md'
    },
    {
      name: 'Effects',
      sections: [
        { name: 'airbrush', content: 'docs/airbrush.md' },
        { name: 'chalkboard', content: 'docs/chalkboard.md' }
      ]
    },
    {
      name: 'Effects',
      content: 'docs/ui.md',
      exampleMode: 'expand',
      usageMode: 'expand'
    }
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine: () => {
    return `import ImageEffect from 'react-image-effects'`
  },
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'Cute React SVG Components'
        }
      ],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
        }
      ]
    }
  },
  theme: {
    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff'
    },
    fontFamily: {
      base: '"Source Sans Pro", sans-serif'
    }
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'styleguide/components/StyleGuide'
    ),
    SectionsRenderer: path.join(__dirname, 'styleguide/components/Sections'),
    SectionRenderer: path.join(__dirname, 'styleguide/components/Section'),
    'slots/IsolateButton': path.join(
      __dirname,
      'styleguide/components/IsolateButton'
    )
  },
  styleguideDir: 'build/react-kawaii',
  serverPort: 8210
}
