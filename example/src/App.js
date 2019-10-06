import React, { Component } from 'react'
import ReactTimer from 'react-timer'

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactTimer
          start={30}
          end={(value) => value < 25}
          onEnd={(value) => console.log('ENDED WITH VALUE', value)}
          onTick={(value) => value - 1}
        >
          {(time) => <div>{time}</div>}
        </ReactTimer>
      </div>
    )
  }
}
