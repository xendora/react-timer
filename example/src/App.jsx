import React from 'react';
import ReactTimer from 'react-timer';

export default () => (
  <div>
    <ReactTimer
      start={30}
      end={(value) => value < 25}
      // eslint-disable-next-line no-console
      onStart={(value) => console.log('STARTED WITH VALUE', value)}
      // eslint-disable-next-line no-console
      onEnd={(value) => console.log('ENDED WITH VALUE', value)}
      // eslint-disable-next-line no-console
      onStop={(value) => console.log('STOPPED WITH VALUE', value)}
      // eslint-disable-next-line no-console
      onReset={(value) => console.log('RESETTED AT VALUE', value)}
      onTick={(value) => value - 1}
    >
      {({
        value, reset, start, stop,
      }) => (
        <div>
          {value}
          <div>
            <button type="button" onClick={start}>start</button>
            <button type="button" onClick={stop}>stop</button>
            <button type="button" onClick={reset}>reset</button>
          </div>
        </div>
      )}
    </ReactTimer>
  </div>
);
