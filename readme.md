# react-image-effects

> A small, customizable react component that adds effects to images. Currently compatible with **React**, but **React Native** support is on the way.

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

Prop | Type | Required | Default
:--- |:--- |:--- |:---
`url`|string|yes||
`effect`|string|no|'none'||
`width`|string|no|'800px'||
`height`|string|no|'400px'


## Contributing

PRs are welcome.


## License

MIT &copy; | [@cdrani](https://github.com/cdrani)
