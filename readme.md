# react-image-effects

> A small, customizable react component that adds effects to images. Currently compatible with **React**, but **React Native** support is on the way.

<p align="center">
  <a href="https://www.npmjs.com/package/react-image-effects">
    <img alt= "NPM" src="https://img.shields.io/npm/v/react-image-effects.svg">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
  <a href="https://circleci.com/gh/gokcan/react-shimmer">
    <img alt="Circle CI Status" src="https://circleci.com/gh/cdrani/react-image-effects.svg?style=shield">
  </a>
  <a href="https://codeclimate.com/github/cdrani/react-image-effects/maintainability">
    <img alt= "Maintainability" src="https://api.codeclimate.com/v1/badges/6121d4eb6cc7b8708c42/maintainability">
  </a>
</p>

<p align="center">
  <img src="react-image-effects.png">
</p>

### Install

`npm i react-image-effects`

or

`yarn add react-image-effects`

### Usage

```js
import React from 'react'
import ImageEffect from 'react-image-effects'

export default function App(props) {
  return (
    <div>
      <ImageEffect
        url="https://example.com/test.jpg"
        effect="airbrush"
        width="640px"
        height="480px"
      />
    </div>
  )
}
```

### Properties

| Prop     | Type   | Required | Default |
| :------- | :----- | :------- | :------ |
| `url`    | string | yes      |         |
| `effect` | string | no       | 'none'  |  |
| `width`  | string | no       | '600px' |  |
| `height` | string | no       | '300px' |

## Contributing

PRs are welcome.

## License

MIT &copy; | [@cdrani](https://github.com/cdrani)
