import { Component } from 'react';
import PropTypes from 'prop-types';

class ReactTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.start || 0,
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start() {
    if (this.timer) return;
    const {
      onTick,
      interval,
      end,
      onEnd,
    } = this.props;
    this.timer = setInterval(() => {
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
    }, interval);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    const { start } = this.props;
    this.setState({
      value: start,
    });
    this.start();
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    const {
      start,
      stop,
      reset,
      timer,
    } = this;
    return children({
      value,
      timer,
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
