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
import ImageEffect from 'react-image-effects'

const Example = () => (
  <ImageEffect
    url="./test.jpg"
    effect="airbrush"
    width="640px"
    height="360px"
  />
)
```

### Properties

| Prop     | Type   | Required | Default |
| :------- | :----- | :------- | :------ |
| `url`    | string | yes      |         |
| `effect` | enum   | no       | 'none'  |  |
| `width`  | string | no       | '600px' |  |
| `height` | string | no       | '300px' |

### Documentation

See the interactive styleguide:
[react-image-effects](https://react-image-effects.now.sh)

### Development

`yarn styleguide`
or
`npm run styleguide`

styleguide server on [localhost:8210](localhost:8210)

build
`yarn styleguide:build`
or
`npm run styleguide:build`

### Contributing

PRs are welcome.

### License

MIT &copy; | [@cdrani](https://github.com/cdrani)
