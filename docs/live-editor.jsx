import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import ReactTimer from '../src/index';

const Editor = () => {
  const liveEditorStyle = {
    caretColor: 'white',
    background: 'rgb(32, 35, 42)',
  };

  const code = `
    <ReactTimer
    start={0}
    end={(value) => value === 30}
    onEnd={(value) => console.log('ENDED WITH VALUE', value)}
    onTick={(value) => value + 1}>
        {(time) => <div>{time}</div>}
    </ReactTimer>`;
  return (
    <LiveProvider code={code.trim()} scope={{ ReactTimer }}>
      <div style={liveEditorStyle}>
        <LiveEditor />
      </div>
      <div>
        <LiveError />
        <LivePreview />
      </div>
    </LiveProvider>
  );
};

export default Editor;
