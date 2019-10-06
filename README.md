# react-timer
### WIP

> A minimalistic yet customizable timer component!

<!-- [![NPM](https://img.shields.io/npm/v/react-timer.svg)](https://www.npmjs.com/package/react-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->


## Props (--early stage--)
| Name  | Type |  Description |
| ------------- | ------------- | ------------- |
| children  | object (required)  |    Define your react component here           |
| start | number (required)  | A start value for the timer               |
| end | function (required)  | A function which determines the end for the timer              |
| interval | number | An interval value for the timer. Default is 1 second               |
| onTick | function (required)  | A callback function where the next computed value is determined               |
| onEnd | function   | A callback function which executes when the timer stops executing               |
---

## License

MIT © [xendora](https://github.com/xendora)
