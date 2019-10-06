import React from 'react';
import ReactTimer from 'react-timer';

export default () => (
  <div>
    <ReactTimer
      start={30}
      end={(value) => value < 25}
      // eslint-disable-next-line no-console
      onEnd={(value) => console.log('ENDED WITH VALUE', value)}
      onTick={(value) => value - 1}
    >
      {(time) => <div>{time}</div>}
    </ReactTimer>
  </div>
);
