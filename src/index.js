import { useState, useEffect, useRef } from 'react'
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
  const timerRef = useRef()

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = window.setInterval(() => {
        setValue(val => onTick(val))
      }, interval)
    }
    if (end(value)) {
      window.clearInterval(timerRef.current)
      onEnd(value)
    }
  }, [value])

  useEffect(() => {
    return () => {
      window.clearInterval(timerRef.current)
    }
  }, [])

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
