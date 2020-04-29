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
    this.onTickCallback = this.onTickCallback.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  onTickCallback() {
    const { value } = this.state;
    const {
      end,
      onEnd,
    } = this.props;
    if (end(value)) {
      this.stop();
      onEnd(value);
    }
  }

  timer() {
    const {
      onTick,
    } = this.props;
    this.setState(({ value }) => (
      { value: onTick(value) }
    ), this.onTickCallback);
  }

  start() {
    const {
      end,
      onStart,
      onEnd,
    } = this.props;
    const { value } = this.state;
    if (this.timerId) {
      onStart(value);
      return;
    }
    onStart(value);
    if (end(value)) {
      onEnd(value);
      this.stop();
      return;
    }
    const {
      interval,
    } = this.props;
    this.timerId = setInterval(this.timer, interval);
  }

  stop() {
    const {
      onStop,
    } = this.props;
    const { value } = this.state;
    onStop(value);
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    const {
      onReset,
    } = this.props;
    const { value } = this.state;
    onReset(value);
    const { start } = this.props;
    this.setState({
      value: start,
    }, () => {
      this.stop();
      this.start();
    });
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    const {
      start,
      stop,
      reset,
    } = this;
    return children({
      value,
      start,
      stop,
      reset,
    });
  }
}

ReactTimer.defaultProps = {
  interval: 1000,
  onStart: () => {},
  onStop: () => {},
  onEnd: () => {},
  onTick: () => {},
  onReset: () => {},
};

ReactTimer.propTypes = {
  children: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.func.isRequired,
  interval: PropTypes.number,
  onTick: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onReset: PropTypes.func,
};

export default ReactTimer;
