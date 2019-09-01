import React from 'react'
import ReactTimer from './dist'

const App = () => {
  return (
    <div>
      <ReactTimer
        start={30}
        end={0}
        delta={2}
        onComplete={(value) => console.log('ENDED WITH VALUE', value)}
        onTick={(value) => console.log('CURRENT VALUE', value)}
      >
        {(time) => <div>{time}</div>}
      </ReactTimer>
      <ReactTimer
        start={0}
        end={30}
        delta={2}
        progression={(value, delta) => value + delta}
        onComplete={(value) => console.log('ENDED WITH VALUE', value)}
        onTick={(value) => console.log('CURRENT VALUE', value)}
      >
        {(time) => <div>{time}</div>}
      </ReactTimer>
    </div>)
}

export default App
