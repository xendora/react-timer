import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ASCENDING = 'asc'
const DESCENDING = 'desc'

const ReactTimer = ({
  children,
  start = 0,
  end = 10,
  delta = 1,
  interval = 1000,
  progression = (value, delta) => value - delta,
  onComplete = () => { },
  onTick = () => { }
}) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (value === end) {
        window.clearInterval(timer)
        onComplete(value)
      } else {
        const curr = progression(value, delta)
        setValue(curr)
        onTick(curr)
      }
    }, interval)
    return () => { window.clearInterval(timer) }
  }, [value])

  return children(value)
}

ReactTimer.propTypes = {
  children: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  delta: PropTypes.number,
  interval: PropTypes.number,
  progression: PropTypes.oneOf([ASCENDING, DESCENDING]),
  onComplete: PropTypes.func,
  onTick: PropTypes.func
}

export default ReactTimer
