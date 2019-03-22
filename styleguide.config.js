module.exports = {
  title: 'React Image Effects',
  pagePerSection: true,
  components: './src/components/ImageEffect.js',
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
      content: 'docs/ReactImageEffects.md'
    },
    {
      name: 'Getting Started',
      content: 'docs/GetStarted.md'
    },
    {
      name: 'Effects',
      components: './src/effects/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand'
    }
  ],
  getComponentPathLine: pathname => {
    return `import ImageEffect from 'react-image-effect'`
  },
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'Cool Visual Image Effects'
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
  styleguideDir: 'build',
  serverPort: 8210
}
