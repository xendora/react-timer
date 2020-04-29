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
      {({
        value, reset, timer, start, stop,
      }) => (
        <div>
          <p>
            Timer id:
            {' '}
            {timer}
          </p>
          {value}
          <button type="button" onClick={start}>start</button>
          <button type="button" onClick={stop}>stop</button>
          <button type="button" onClick={reset}>reset</button>
        </div>
      )}
    </ReactTimer>
  </div>
);
