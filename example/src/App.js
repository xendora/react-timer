import React, { Component } from 'react'
import ReactTimer from './dist'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactTimer
          start={30}
          end={0}
          progression='desc'
          delta={2}
          onComplete={(value) => console.log('ENDED WITH VALUE', value)}
          onTick={(value) => console.log('CURRENT VALUE', value)}
        >
          {(time) => <div>{time}</div>}
        </ReactTimer>
      </div>
    )
  }
}
