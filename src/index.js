import { Component } from 'react';
import PropTypes from 'prop-types';

class ReactTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.start || 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    const {
      onTick,
      interval,
      end,
      onEnd,
    } = this.props;
    this.timer = setInterval(() => {
      this.setState(({ value }) => (
        { value: onTick(value) }
      ), () => {
        const { value: currentValue } = this.state;
        if (end(currentValue)) {
          clearInterval(this.timer);
          onEnd(currentValue);
        }
      });
    }, interval);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    return children(value);
  }
}

ReactTimer.defaultProps = {
  interval: 1000,
  onEnd: () => { },
  onTick: () => { },
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
