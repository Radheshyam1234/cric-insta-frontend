import { useState, useEffect } from 'react'

const useCountdownTimer = ({ initialTime, onTimerEnd, startConditionally, timeStarted }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime)

  useEffect(() => {
    if (startConditionally && !timeStarted) return

    // Exit early if the timer has reached zero
    if (remainingTime <= 0) {
      onTimerEnd()
      return
    }

    // Set up the interval to update the timer every second
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1)
    }, 1000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [remainingTime, onTimerEnd])

  return {
    remainingTime,
  }
}

export default useCountdownTimer
