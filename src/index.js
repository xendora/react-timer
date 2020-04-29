import { Component } from 'react';
import PropTypes from 'prop-types';

class ReactTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.start || 0,
    };
    this.timerId = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  timer() {
    const {
      onTick,
      end,
      onEnd,
    } = this.props;
    const { value: startingValue } = this.state;
    if (end(startingValue)) {
      onEnd(startingValue);
      return;
    }
    this.setState(({ value }) => (
      { value: onTick(value) }
    ), () => {
      const { value: currentValue } = this.state;
      if (end(currentValue)) {
        this.stop();
        onEnd(currentValue);
      }
    });
  }

  start() {
    if (this.timerId) return;
    const {
      interval,
    } = this.props;
    this.timerId = setInterval(this.timer, interval);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    const { start } = this.props;
    this.setState({
      value: start,
    });
    this.stop();
    this.start();
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    const {
      start,
      stop,
      reset,
      timerId,
    } = this;
    return children({
      value,
      timer: timerId,
      start,
      stop,
      reset,
    });
  }
}

ReactTimer.defaultProps = {
  interval: 1000,
  onEnd: () => {},
  onTick: () => {},
};

ReactTimer.propTypes = {
  children: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.func.isRequired,
  interval: PropTypes.number,
  onTick: PropTypes.func,
  onEnd: PropTypes.func,
};

export default ReactTimer;
