import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactTimer from '../src';

test('returns correct value after 3 seconds', async () => {
  jest.useFakeTimers();
  const wrapper = mount(
    <ReactTimer
      start={30}
      end={(value) => value < 25}
      onTick={(value) => value - 1}
    >
      {(time) => <div>{time}</div>}
    </ReactTimer>,
  );
  expect(wrapper.find('div').prop('children')).toEqual(30);
  act(() => {
    jest.advanceTimersByTime(3000);
    wrapper.update();
  });
  expect(wrapper.find('div').prop('children')).toEqual(27);
});


test('returns correct value after reaching the end of the timer', async () => {
  jest.useFakeTimers();
  const wrapper = mount(
    <ReactTimer
      start={30}
      end={(value) => value < 25}
      onTick={(value) => value - 1}
    >
      {(time) => <div>{time}</div>}
    </ReactTimer>,
  );
  expect(wrapper.find('div').prop('children')).toEqual(30);
  act(() => {
    jest.advanceTimersByTime(7000);
    wrapper.update();
  });
  expect(wrapper.find('div').prop('children')).toEqual(24);
});
