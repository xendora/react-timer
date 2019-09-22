import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ReactTimer = ({
  children,
  start = 0,
  end = () => true,
  interval = 1000,
  onEnd = () => { },
  onTick = () => { }
}) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (end(value)) {
        window.clearInterval(timer)
        onEnd(value)
      } else {
        const curr = onTick(value)
        setValue(curr)
      }
    }, interval)
    return () => { window.clearInterval(timer) }
  }, [value])

  return children(value)
}

ReactTimer.propTypes = {
  children: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.func.isRequired,
  interval: PropTypes.number,
  onTick: PropTypes.func,
  onEnd: PropTypes.func
}

export default ReactTimer
