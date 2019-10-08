/* eslint-disable no-debugger */
import React from 'react';
import { Chart } from 'react-charts';
import ReactTimer from '../src';

const MyChart = () => {
  const coords = [[0, 0]];

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  const renderChart = (value) => {
    const ar = [value, (Math.random() * 10).toFixed(0)];
    coords.push(ar);
    return (
      <Chart
        data={[
          {
            label: 'Series 1',
            data: coords,
          },
        ]}
        axes={axes}
      />
    );
  };

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
      }}
    >
      <ReactTimer
        start={0}
        end={(value) => value === 10}
        onTick={(value) => value + 1}
      >
        {(value) => renderChart(value)}
      </ReactTimer>
    </div>
  );
};


export default MyChart;
