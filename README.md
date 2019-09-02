# react-timer
### WIP

> Awesome react timer componentt

[![NPM](https://img.shields.io/npm/v/react-timer.svg)](https://www.npmjs.com/package/react-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-timer
```

## Props
| Name  | Type |  Description |
| ------------- | ------------- | ------------- |
| children  | object (required)  |    Define your react component here           |
| start | number (required)  | A start value for the timer               |
| end | number (required)  | An end value for the timer               |
| delta | number  | An increment/decrement value               |
| interval | number | An interval value for the timer. Default is 1 second               |
| progression | function (required)  | A callback function where the next computed value is determined               |
| onComplete | function   | A callback function which executes when the 
timer stops executing               |
| onTick | function  | A callback function which executes after every interval               |

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-timer'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [crup](https://github.com/crup)
